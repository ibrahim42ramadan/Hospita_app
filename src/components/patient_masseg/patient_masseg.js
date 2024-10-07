import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Patient_masseg({ isOpen, setIsOpen, userData }) {
  console.log("userrrrrr", userData.user);

  return (
    <div className=" w-full flex-col">
      <Transition className="" appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            // setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg md:max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* زر الإغلاق */}
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-3xl font-bold">&times;</span>
                  </button>

                  <div className="flex flex-col md:flex-row">
                    {/* الصورة */}
                    <div className="w-full md:w-40 h-40 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <img
                        className="rounded-lg w-full h-full object-cover"
                        src={
                          userData.user.img || "https://via.placeholder.com/150"
                        }
                        alt="User Profile"
                      />
                    </div>

                    {/* البيانات */}
                    <div className="w-full mt-5 md:mt-0 p-2">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-bold leading-6 text-gray-900"
                      >
                        <div>{userData.user.name}</div>
                      </Dialog.Title>

                      <div className="mt-2 flex flex-col md:flex-row items-start md:items-center gap-5">
                        <p>
                          <strong>Email:</strong> {userData.user.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {userData.user.phone}
                        </p>
                        <p>
                          <strong>Address:</strong> {userData.user.address}
                        </p>
                      </div>
                      <div className="mt-4">
                        <div className="shadow-lg shadow-blue-300 p-1 w-full"></div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Patient_masseg;
