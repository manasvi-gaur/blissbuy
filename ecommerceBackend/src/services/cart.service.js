const Cart = require("../models/cart.model.js");
const CartItem = require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");
async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found for the user");
    }
    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItem = cartItems;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;
    for (let cartItem of cart.cartItem) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountedPrice;
    cart.totalItem = totalItem;
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found for the user");
    }
    const product = await Product.findById(req.productId);
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: req.productId,
      userId,
    });
    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: req.size.quantity,
        userId,
        price: product.price,
        size: [req.size],
        discountedPrice: product.discountedPrice,
      });
      const createdCartItem = await cartItem.save();
      cart.cartItem.push(createdCartItem);
      await cart.save();

      return {message : "Item Added to cart"};
    }
    let found=false;
    isPresent.size.find((size) => {
      if (size.name === req.size.name) {
        size.quantity += Number(req.size.quantity);
        found = true;
      }
    });
    if(!found){
      isPresent.size.push(req.size);
    }
    isPresent.price += product.price;
    isPresent.quantity+=req.size.quantity;
    await isPresent.save();
    return {message : "Item Updated to cart"};

  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { createCart, findUserCart, addCartItem };
