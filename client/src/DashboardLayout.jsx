import React from 'react'
import { Avatar, Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';


const DashboardLayout = () => {
    const { pathname } = useLocation();
    const {header, setHeader} = ("Profile Information")

  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:p-2 p-1">
        <div className="w-full pt-6 pl-6 h-[230px] bg-gray-900 rounded-xl">
          <Typography className="text-white md:text-[40px] lg:text-[45px] " variant="h3">
            {header}
          </Typography>
        </div>
        <div className="w-full px-3 md:px-6 mt-[-70px]">
          <div className="w-full p-5   bg-white rounded-xl drop-shadow-md">
            
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout