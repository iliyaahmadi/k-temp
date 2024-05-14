import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import Image from "../ui/Image";

import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { useGlobalContext } from "../../store/globalContext";
//icons
import { TiHomeOutline } from "react-icons/ti";

function Sidebar({
  pageWidth,
  handleCloseDrawer,
  openDrawer,
  smallDevice,
  showSmallDrawer,
}) {
  const { direction } = useGlobalContext();

  const sidebarData = [
    {
      title: "داشبورد",
      path: "/dashboard",
      auth: false,
    },
    {
      title: "حساب های اجتماعی",
      path: "/social-accounts",
      auth: false,
    },
    {
      title: "احراز هویت",
      path: "/authenticate",
      auth: false,
    },
    {
      title: "املاک",
      path: "/properties",
      auth: false,
    },
    {
      title: "حساب های بانکی",
      path: "/bank-accounts",
      auth: false,
    },
    {
      title: "کیف پول",
      path: "/wallet",
      auth: false,
    },
    {
      title: "تراکنش ها",
      path: "/bank-accounts",
      auth: false,
    },
    {
      title: "قابل فروش",
      path: "/bank-accounts",
      auth: false,
    },
    {
      title: "ملک های من",
      path: "/bank-accounts",
      auth: false,
    },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={handleCloseDrawer(false)}
      className={"drawer-list-items"}
    >
      <Grid
        container
        item
        direction={"column"}
        alignItems={"center"}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        padding={{ xs: 4 }}
      >
        <Grid container item>
          <Grid item xs={9}>
            {openDrawer ? (
              <Image
                url={"dashboard/sidebar/logo-mini-sidebar.svg"}
                imgClass="logo-image"
                altName="logo-sidebar"
              />
            ) : (
              <Image
                url={"dashboard/sidebar/Karovida logo (1).png"}
                imgClass="logo-image-mini"
                altName="logo-sidebar"
              />
            )}
          </Grid>
          <Grid container item xs={3}>
            <Grid
              container
              item
              justifyContent={"center"}
              alignItems={"center"}
            >
              <button
                className="btn-icon"
                onClick={() => {
                  handleCloseDrawer(false);
                }}
              >
                {direction == "rtl" ? (
                  <HiOutlineChevronDoubleRight className="animation-icon" />
                ) : (
                  <HiOutlineChevronDoubleLeft className="animation-icon" />
                )}
              </button>
            </Grid>
          </Grid>
        </Grid>
        {sidebarData.map((d, i) => (
          <Grid
            key={i}
            container
            className="sidebar-nav"
            item
            direction={"row"}
            alignItems={"center"}
          >
            <TiHomeOutline />
            <p>{d.title}</p>
          </Grid>
        ))}
      </Grid>

      <Divider />
    </Box>
  );

  return (
    <Drawer
      open={pageWidth < 756 ? showSmallDrawer : open}
      onClose={() => handleCloseDrawer(false)}
      anchor={`${direction === "ltr" ? "left" : "right"}`}
      variant="persistent"
      className={`flex flex-col gap-y-4 row-span-2 row-start-1 py-5 dashboard-sidebar ${
        !openDrawer && !smallDevice ? "sidebar-mini" : ""
      } ${direction === "ltr" && "left-side"}`}
      onMouseMove={() => {
        if (!openDrawer && !smallDevice) {
          handleCloseDrawer(true);
        }
      }}
    >
      {DrawerList}
    </Drawer>
  );
}

export default Sidebar;
