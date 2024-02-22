import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaYoutube, FaTiktok  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="border-t border-b border-black mt-20">
        <div className=" max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-5 mt-10 md:mb-20 mb-10">
            <div>
              <Typography variant="h4" className="mb-4">
                Subzon
              </Typography>
              <Typography variant="lead">Movie</Typography>
              <Typography variant="lead">TV Show</Typography>
              <Typography variant="lead" className="hover:underline">
                Most Download
              </Typography>
              <Typography variant="lead" className="hover:underline">
                Most Collection
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className="mb-4">
                Category
              </Typography>
              <Typography variant="lead">Action</Typography>
              <Typography variant="lead">Drama</Typography>
              <Typography variant="lead" className="hover:underline">
                Sci-fi
              </Typography>
              <Typography variant="lead" className="hover:underline">
                Biology
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className="mb-4">
                Language
              </Typography>
              <Typography variant="lead">English</Typography>
              <Typography variant="lead">Tamil</Typography>
              <Typography variant="lead" className="hover:underline">
                Sinhala
              </Typography>
              <Typography variant="lead" className="hover:underline">
                Hindi
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className="mb-4">
                Customers
              </Typography>
              <Typography variant="lead">Join a our telegram group</Typography>
              <Typography variant="lead">subzon@admin.com</Typography>
              <Typography variant="lead" className="hover:underline">
                071-071-7788
              </Typography>
            </div>
          </div>
          <div className=" p-3 mb-5 justify-between hidden md:flex">
            <div className="flex items-end gap-14 ">
              <Typography variant="h2">SUBZON</Typography>
              <Typography variant="h4">Sri lanka</Typography>
            </div>
            <div className="flex gap-4 items-end">
            <FaFacebook size={30}/>
            <FaYoutube size={30}/>
            <AiFillInstagram size={30}/>
            <FaTiktok size={30}/>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-4 px-3">
        <Typography variant="h6">
          Copyright © 2024 Subzon Operating Company. All Rights Reserved.{" "}
        </Typography>
      </div>
    </>
  );
};

export default Footer;
