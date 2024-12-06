import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function DeliveryAddForm() {
  return (
    <form>
      <div className="space-y-12 " style={{ marginLeft: "20vmin" }}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2
            className="text-base font-semibold leading-7 text-gray-900 "
            style={{
              textAlign: "left",
              color: "black",
              fontFamily: "Helvetica",
              fontSize: "4.5vmin",
            }}
          >
            CONTACT
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 "
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <label
                htmlFor="country"
                className=" mt-4 block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                Delivery
              </label>
              <div className="mt-2 col-span-full row-span-full">
                <select
                  style={{ width: "full" }}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                >
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>India</option>
                  <option>United States</option>
                </select>
              </div>
              <label
                htmlFor="street-address"
                className=" mt-4 block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  width={4}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
                style={{
                  color: "black",
                  fontFamily: "Helvetica",
                  fontSize: "2.5vmin",
                }}
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-0.4 mb-3">
          <a
            style={{ backgroundColor: "#BD446B", width: "90vmin" }}
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Pay now
          </a>
        </div>
      </div>
    </form>
  );
}
