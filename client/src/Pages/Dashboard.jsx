import { Typography } from "@material-tailwind/react";
import Profile from "../Components/Profile";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-7xl mx-auto pt-2">
      <div className="md:p-2 p-1">
        <div className="w-full pt-6 pl-6 h-[230px] bg-gray-900 rounded-xl">
          {pathname === "/dashboard" ? (
            <Typography
              className="text-white md:text-[40px] lg:text-[45px]"
              variant="h3"
            >
              Profile Information
            </Typography>
          ) : pathname === "/dashboard/create-blog" ? (
            <Typography
              className="text-white md:text-[40px] lg:text-[45px]"
              variant="h3"
            >
              Create Blog
            </Typography>
          ) : pathname === "/dashboard/edit-profile" ? (
            <Typography
              className="text-white md:text-[40px] lg:text-[45px]"
              variant="h3"
            >
              Edit Profile Information
            </Typography>
          ) : null}
        </div>
        <div className="w-full px-3 md:px-6 mt-[-70px]">
          <div className="w-full p-5   bg-white rounded-xl drop-shadow-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
