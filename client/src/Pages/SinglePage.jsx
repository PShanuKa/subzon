import { Button } from "@material-tailwind/react";
import React from "react";
import { FaRegClock, FaDownload, FaUser, FaComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";

const SinglePage = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-5 mt-2">
      <div className="w-full md:col-span-4 col-span-5 md:m-3 shadow-lg p-3 rounded-lg">
        <div className="flex items-center gap-1">
          <FaRegClock size={16} />
          <h1 className="text-[16px] font-medium ">22 Hours ago</h1>
        </div>
        <h1 className=" text-[24px] font-medium ">
          Dunki (2023) Sinhala Subtitles |{" "}
          <span className="font-sinhala"> ඩන්කි සිංහල උපසිරැසි සමග</span>
        </h1>
        <div className="flex gap-5 mt-1 items-center opacity-70">
          <div className="flex flex-wrap items-center gap-1 text-[12px] md:text-[16px]">
            <FaUser  />
            <h1 className=" font-normal">Harsha Dayananda</h1>
          </div>
          <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
            <FaDownload  />
            <h1 className=" font-normal">1322</h1>
            <h1 className=" font-normal">Download</h1>
          </div>
          <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
            <FaComment  />
            <h1 className=" font-normal">1322</h1>
            <h1 className=" font-normal">Comment</h1>
          </div>
        </div>
        <div className="flex gap-4 my-3">
          <Button
            variant="outlined"
            className="py-0 px-4 normal-case text-[16px]"
          >
            Action
          </Button>
          <Button
            variant="outlined"
            className="py-0 px-4 normal-case text-[16px]"
          >
            Drama
          </Button>
          <Button
            variant="outlined"
            className="py-0 px-4 normal-case text-[16px]"
          >
            Sci-fi
          </Button>
        </div>

        <img
          className="object-cover rounded-lg  w-full"
          src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296"
          alt=""
        />
        <div className="flex justify-end mt-3">
          <div className="border border-gray-600 rounded-md flex items-center">
            <p className="px-2 text-[16px]">182</p>
            <div className="border-l h-full border-gray-600 items-center p-1 px-2 ">
              <BiLike size={18} />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <p className="font-semibold text-[18px] md:text-[22px]">
            Year : <span className="font-normal">December 22,2023 (USA)</span>
          </p>
          <p className="font-semibold text-[18px] md:text-[22px]">
            Imdb : <span className="font-normal">8.9/10</span>
          </p>
          <p className="font-semibold text-[18px] md:text-[22px]">
            Starting :{" "}
            <span className="font-normal">
              Amber Heard, Jason Momoa, Patrick Wilson
            </span>
          </p>
          <p className="font-semibold text-[18px] md:text-[22px]">
            Language : <span className="font-normal">English</span>
          </p>
          <p className="font-semibold text-[18px] md:text-[22px]">
            Director : <span className="font-normal">James Wan</span>
          </p>
        </div>
        <div className="mt-3">
          <p className="font-semibold text-[22px]">Movie Trailer</p>
          <div>
            <iframe
              className="md:w-[500px] w-full md:h-[300px] h-[250px] mt-3 rounded-lg"
              src="https://www.youtube.com/embed/ByAn8DF8Ykk?si=aVDX1MpwqODmIfba"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="mt-4 ">
          <p className="text-[21px] font-normal ">
            Physical space is often conceived in three linear dimensions,
            although modern physicists usually con Physical space is often
            conceived in three linear dimensions, although modern physicists
            usually con Physical space is often conceived in three linear <br/> <br/>
            dimensions, although modern physicists usually con Physical space is
            often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            <br/><br/>
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually<br/><br/> con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually conPhysical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although <br/><br/>modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three <br/><br/>linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern <br/><br/> physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern <br/><br/> physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con Physical space is often conceived in three
            linear dimensions, although modern physicists usually con Physical
            space is often conceived in three linear dimensions, although modern
            physicists usually con
          </p>
        </div>
        {/* Download Section  */}
        <div className="justify-center w-full grid my-10">
            
            <h1 className=" text-[32px] underline font-semibold text-center">Direct Download</h1>
            
          <div className="text-center mt-5">
            <h1 className="text-[22px]   font-semibold text-center">HDRIP | x265 | 720p | 1.4GB</h1>
            <Button  className="text-[22px] mx-auto bg-[#2c7725] text-white py-5 px-10 mt-3 flex items-center gap-3"><IoMdDownload size={30}/>Download</Button>
          </div>
          <div className="text-center mt-5 ">
            <h1 className="text-[22px]   font-semibold text-center">HDRIP | x265 | 1080p | 3.4GB</h1>
            <Button  className="text-[22px] mx-auto bg-[#2c7725] text-white py-5 px-10 mt-3 flex items-center gap-3"><IoMdDownload size={30}/>Download</Button>
          </div>
          

        </div>

        <div className="justify-center w-full grid my-10">
            
            <h1 className=" text-[32px] underline font-semibold text-center">Sinhala Subtitles</h1>
            
          <div className="text-center mt-5">
         
            <Button  className="text-[34px] mx-auto bg-[#2c7725] text-white py-5 px-10 mt-3 flex items-center gap-3"><IoMdDownload size={35}/>Download</Button>
          </div>
        
          

        </div>
        {/* Download Section  */}
      </div>
    </div>
  );
};

export default SinglePage;
