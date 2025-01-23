const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: function() {
            return this.level !== 1;
        }
    },
    level: {
        type: Number,
        required: true,
    }
});

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;