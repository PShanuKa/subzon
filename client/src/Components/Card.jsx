import React from "react";
import { FaRegClock, FaDownload } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-full  p-3 border shadow-md rounded-xl">
      <div>
        <img className="rounded-xl object-fill h-[200px] w-full"
          src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
         
          <h1 className=" text-[16px] font-bold mt-2">
            Dunki (2023) Sinhala Subtitles | <span className="font-sinhala"> ඩන්කි  සිංහල උපසිරැසි සමග</span>
          </h1>
          <h1 className="text-[16px] font-bold font-sinhala">
            
          </h1>
         
          <div className="flex gap-2">
            <div className="flex flex-row gap-3 text-[12px] font-light ">
                <div className="flex items-center gap-1">
                <FaRegClock size={10}/>
              <h1 className="text-[10px] font-medium ">22 Hours ago</h1>
                </div>
                <div className="flex items-center gap-1">
                
                <FaDownload size={10}/>
              <h1 className="text-[10px] font-medium">1322</h1>
            
                </div>
              <h1 className="text-[10px] font-medium ">Imdb 7.8</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
