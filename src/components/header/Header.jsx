import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { TfiMenu } from "react-icons/tfi";
import { useGlobalContext } from "../../store/globalContext";
import { IoLanguageOutline } from "react-icons/io5";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function Header({ openDrawer, smallDevice, handleCloseDrawer }) {
  const { language, changeLanguage } = useGlobalContext();
  const { i18n, t } = useTranslation();
  const { direction } = useGlobalContext();
  const options = t("language", { returnObjects: true });

  return (
    <div className="h-20 dashboard-header flex items-center justify-between">
      <div>
        {smallDevice && (
          <button
            onClick={() => handleCloseDrawer(true)}
            className="open-drawer-btn"
          >
            <TfiMenu />
          </button>
        )}
      </div>
      <div>
        <DropDown
          options={options}
          changeLanguage={changeLanguage}
          direction={direction}
        />
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropDown({ options, changeLanguage, direction }) {
  return (
    <Menu as="div" className="relative inline-block text-right right-0 a">
      <div>
        <Menu.Button className="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-7">
          <IoLanguageOutline />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${
            direction === "rtl" ? "left-0" : "right-0"
          } z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {Object.keys(options)?.map((item) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex justify-center items-center ${classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}`}
                      onClick={() => changeLanguage(options[item].value)}
                    >
                      {options[item].label}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Header;
