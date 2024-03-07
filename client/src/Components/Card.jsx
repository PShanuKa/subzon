import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaRegClock, FaDownload, FaUser } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-full  p-3 border shadow-md rounded-lg group hover:bg-gray-100 ">
      <div>
        <Link to={props?.data?.slug}>
        <img
          className="rounded-lg object-cover h-[200px] w-full transition-all group-hover:scale-[102%] group-hover:opacity-80 duration-75"
          src={props?.data?.thumbnail}
          alt=""
          />
        </Link>
        <div>
          <div className="flex items-center gap-1 mt-2 opacity-70">
            <FaRegClock size={10} />
            <h1 className="text-[10px] font-medium ">22 Hours ago</h1>
          </div>
          <h1 className=" text-[16px] font-bold ">
            {props?.data?.title} |
            <span className="font-sinhala"> ඩන්කි සිංහල උපසිරැසි සමග</span>
          </h1>
          <div className="flex  gap-3 font-semibold text-[12px] ">
            {props?.data?.category?.map((data, index) => (
              <p key={index}>{data.title}</p>
            ))}
          </div>
          <div className="flex mt-1 gap-2 opacity-70">
            <div className="flex flex-row gap-3 text-[12px] font-light ">
              <h1 className="text-[10px] font-medium ">Imdb {props?.data?.imdb}</h1>
              <div className="flex items-center gap-1">
                <FaDownload size={10} />
                <h1 className="text-[10px] font-medium">1322</h1>
              </div>
              <div className="flex items-center gap-1">
                <FaUser size={10} />
                <h1 className="text-[10px] font-medium">Harsha Dayananda</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button size="sm" color="green" className="mt-2 flex gap-1"><IoMdDownload size={15}/>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
