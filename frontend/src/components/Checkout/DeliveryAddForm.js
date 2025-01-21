import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Button, TextField, Typography } from "@mui/material";

export default function DeliveryAddForm({ formRef }) {
  return (
    <form ref={formRef}>
      <div
        className="space-y-12 "
        style={{ marginLeft: "5vmin", justifySelf: "center" }}
      >
        <div className="border-b border-gray-900/10 pb-10">
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
              <div className="mt-2">
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </div>
              <div className="mt-2">
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="col-span-full">
              <div className="mt-2">
                <TextField
                  required
                  id="mobileNo"
                  name="mobileNo"
                  label="Mobile Number"
                  fullWidth
                  autoComplete="mobile number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="mt-2">
                <TextField
                  width={4}
                  required
                  id="streetAddress"
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  autoComplete="address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <div className="mt-1">
                <TextField
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  required
                  label="City"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-1">
                <TextField
                  name="state"
                  id="state"
                  required
                  label="State"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-1">
                <TextField
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  required
                  label="Postal Code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
