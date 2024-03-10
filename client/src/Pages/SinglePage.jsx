import { Avatar, Button, Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { FaRegClock, FaDownload, FaUser, FaComment } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useGetABlogQuery } from "../api/blogSlice";
import { useSelector } from "react-redux";
import { AiFillLike } from "react-icons/ai";

const SinglePage = () => {
  const { id } = useParams();
  const { data: AMovieData, refetch } = useGetABlogQuery(id);

  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    refetch();
  }, [userInfo, refetch]);

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-5 mt-2">
        <div className="w-full md:col-span-4 col-span-5 md:m-3 shadow-lg p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <FaRegClock size={16} />
            <h1 className="text-[16px] font-medium ">22 Hours ago</h1>
          </div>
          <h1 className=" text-[24px] font-medium ">
            {AMovieData?.blog?.title} |
            <span className="font-sinhala">
              {" "}
              {AMovieData?.blog?.sinhalaTitle}
            </span>
          </h1>
          <div className="flex gap-5 mt-1 items-center opacity-70">
            <div className="flex flex-wrap items-center gap-1 text-[12px] md:text-[16px]">
              <FaUser />
              <h1 className=" font-normal">
                {AMovieData?.blog?.creator?.firstname}{" "}
                {AMovieData?.blog?.creator?.lastname}
              </h1>
            </div>
            <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
              <FaDownload />
              <h1 className=" font-normal">
                {AMovieData?.blog?.downloadCount}
              </h1>
              <h1 className=" font-normal">Download</h1>
            </div>
            <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
              <FaComment />
              <h1 className=" font-normal">1322</h1>
              <h1 className=" font-normal">Comment</h1>
            </div>
          </div>
          <div className="flex gap-4 my-3">
            {AMovieData?.blog?.category?.map((data, index) => (
              <Button
                key={index}
                variant="outlined"
                className="py-0 px-4 normal-case text-[16px]"
              >
                {data.title}
              </Button>
            ))}
          </div>

          <img
            className="object-cover rounded-lg  w-full"
            src={AMovieData?.blog?.thumbnail}
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
            {AMovieData?.blog?.other?.map((data, index) => (
              <p
                key={index}
                className="font-semibold text-[18px] md:text-[22px]"
              >
                {data?.title} :{" "}
                <span className="font-normal">{data?.description}</span>
              </p>
            ))}
          </div>

          {AMovieData?.blog?.trailer_url && (
            <div className="mt-3">
              <p className="font-semibold text-[22px]">Movie Trailer</p>
              <div>
                <iframe
                  className="md:w-[500px] w-full md:h-[300px] h-[250px] mt-3 rounded-lg"
                  src={AMovieData?.blog?.trailer_url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="mt-4 ">
            <p className="text-[21px] font-normal ">{AMovieData?.blog?.blog}</p>
          </div>

          <div className="justify-center w-full grid my-10">
            {AMovieData?.blog?.video_links && (
              <h1 className=" text-[32px] underline font-semibold text-center">
                Direct Download
              </h1>
            )}

            {AMovieData?.blog?.video_links?.map((data, index) => (
              <div key={index} className="text-center mt-5">
                <h1 className="text-[22px]   font-semibold text-center">
                  {data.title}
                </h1>
                <Button className="text-[22px] mx-auto bg-[#2c7725] text-white py-5 px-10 mt-3 flex items-center gap-3">
                  <IoMdDownload size={30} />
                  Download
                </Button>
              </div>
            ))}
          </div>

          <div className="justify-center w-full grid my-10">
            <h1 className=" text-[32px] underline font-semibold text-center">
              Sinhala Subtitles
            </h1>

            <div className="text-center mt-5">
              <Button className="text-[34px] mx-auto bg-[#2c7725] text-white py-5 px-10 mt-3 flex items-center gap-3">
                <IoMdDownload size={35} />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-5 mt-2">
        <div className="w-full md:col-span-4 col-span-5 md:m-3   p-3 ">
          <h1 className="text-[22px]">
            {AMovieData?.blog?.comments?.length} Comments
          </h1>
          <div className="w-full flex gap-5 items-center mt-5 ">
            <Avatar
              src={
                userInfo?.user_image
                  ? userInfo?.user_image
                  : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg"
              }
              alt="avatar"
            />
            <Input variant="standard" label="Add a comment" />
            <IoSend className="opacity-70 " size={24} />
          </div>
          {AMovieData?.blog?.comments?.map((data, index) => (
            <div className="w-full flex gap-5 items-center mt-10">
              <Avatar src={data?.author?.user_image} alt="avatar" />
              <div>
                <div className="flex gap-5">
                  <p>
                    @{data?.author?.firstname}_{data?.author?.lastname}
                  </p>
                  <p className="opacity-60">6 days ago</p>
                </div>
                <p>{data?.comment}</p>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <div>
                      {data?.like?.includes(userInfo?._id) ? (
                        <AiFillLike />
                      ) : (
                        <BiLike />
                      )}
                    </div>
                    <p>
                      {data?.like?.length === 0 ? "" : `${data?.like?.length}`}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BiDislike />

                    <p>
                      {data?.dislike?.length === 0
                        ? ""
                        : `${data?.dislike?.length}`}
                    </p>
                  </div>
                  <p>Reply</p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex gap-5 items-center mt-10">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
            <div>
              <div className="flex gap-5">
                <p>@susa35</p>
                <p className="opacity-60">6 days ago</p>
              </div>
              <p>dgvasgv gdajsg vgdvagv gjhavdv jav ghdva</p>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <div>
                    <BiLike />
                  </div>
                  <p>221</p>
                </div>
                <div className="flex gap-2 items-center">
                  <BiDislike />
                  <p></p>
                </div>
                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
