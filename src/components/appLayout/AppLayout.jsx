import React, { useEffect, useState } from "react";
import { json, Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../store/globalContext";
import { dir } from "i18next";

function AppLayout() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [openDrawer, setOpenDrawer] = React.useState();
  const [smallDevice, setSmallDevice] = useState();
  const [showSmallDrawer, setShowSmallDrawer] = useState(false);
  const { t, i18n } = useTranslation();
  const [maxOutlet, setMaxOutlet] = useState(false);

  const { direction } = useGlobalContext();

  const handleCloseDrawer = (newOpen) => {
    setOpenDrawer(newOpen);
    setShowSmallDrawer(newOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setPageWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setPageWidth(window.innerWidth)
      );
    };
  }, []);

  useEffect(() => {
    smallDevice ? setOpenDrawer(false) : setOpenDrawer(true);
    pageWidth < 756 ? setSmallDevice(true) : setSmallDevice(false);
  }, [pageWidth]);

  useEffect(() => {
    if (!openDrawer) {
      setMaxOutlet(true);
    } else if (smallDevice) {
      setMaxOutlet(true);
    } else {
      setMaxOutlet(false);
    }
    console.log(maxOutlet);
  }, [openDrawer]);

  return (
    <div
      className={`
      // ${
        // openDrawer
        // ?
        " h-screen"
        // : pageWidth > minWidth
        // ?
        // "grid h-screen grid-rows-[auto_1fr] grid-cols-[3.65rem_1fr] "
        // : ""
        }  transition-all duration-100`}
    >
      <Header
        smallDevice={smallDevice}
        handleCloseDrawer={handleCloseDrawer}
        showSmallDrawer={showSmallDrawer}
      />
      <div
        className={`${direction === "rtl" ? "outlet-rtl " : "outlet-ltr "}` + `${maxOutlet
          ? `w-full h-full`
          : `outlet-small h-full duration-1000`
          } 
       outlet transition-all duration-200`}
        style={{ paddingRight: smallDevice ? "0" : maxOutlet ? "56px" : "0" }}
      >
        <Outlet />
      </div>
      <Sidebar
        openDrawer={openDrawer}
        pageWidth={pageWidth}
        handleCloseDrawer={handleCloseDrawer}
        smallDevice={smallDevice}
        showSmallDrawer={showSmallDrawer}
      />
    </div>
  );
}

export default AppLayout;
