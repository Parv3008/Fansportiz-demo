import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/Logo.svg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Fantasy sports", href: "#" },
  { name: "features", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="  bg-white">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-3 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src={logo}
                className="h-14 w-auto lg:h-28 md:h-20 sm:h-14 "
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            >
              <Bars3Icon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 items-center lg:text-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl-plus font-semibold text-blue"
              >
                {item.name}
              </a>
            ))}
            <button className="text-xl-plus font-bold text-white bg-blue lg:px-10 lg:py-4 rounded hover:bg-orange transition">
              START A PROJECT
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button className="text-xl-plus font-bold text-white bg-blue px-3 py-2 rounded">
                    START A PROJECT
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
