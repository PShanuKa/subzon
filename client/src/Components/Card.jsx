import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FaRegClock, FaDownload, FaUser } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Card = () => {
  return (
    <div className="w-full  p-3 border shadow-md rounded-lg group hover:bg-gray-100 ">
      <div>
        <img
          className="rounded-lg object-cover h-[200px] w-full transition-all group-hover:scale-[102%] group-hover:opacity-80 duration-75"
          src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
        <div className="flex items-center gap-1 mt-2 opacity-70">
                <FaRegClock size={10} />
                <h1 className="text-[10px] font-medium ">22 Hours ago</h1>
              </div>
          <h1 className=" text-[16px] font-bold ">
            Dunki (2023) Sinhala Subtitles |{" "}
            <span className="font-sinhala"> ඩන්කි සිංහල උපසිරැසි සමග</span>
          </h1>
          <div className="flex  gap-3 font-semibold text-[12px] ">
            <p>Action</p>
            <p>Drama</p>
            <p>Sci-fi</p>
          </div>
         

          <div className="flex mt-1 gap-2 opacity-70">
            <div className="flex flex-row gap-3 text-[12px] font-light ">
              <h1 className="text-[10px] font-medium ">Imdb 7.8</h1>
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
