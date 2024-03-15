import { Avatar, Button, Input, button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FaRegClock, FaDownload, FaUser, FaComment } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useGetABlogQuery } from "../api/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SinglePage = () => {
  const { id } = useParams();
  const { data: AMovieData, refetch } = useGetABlogQuery(id);
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [replyToggle, setReplyToggle] = useState(-10);


  const userInfo = useSelector((state) => state.auth.userInfo);


  useEffect(() => {
    refetch();
  }, [userInfo, refetch]);

  const yourTokenHere = localStorage.getItem("Bearer");

  const config = {
    headers: {
      Authorization: `Bearer ${yourTokenHere}`,
    },
  };

  const handleLikeBlog = () => {
    if (yourTokenHere) {
      axios
        .put(
          `http://localhost:3000/api/blog/like/${AMovieData?.blog?.slug}`,
          {},
          config
        )
        .then(function (response) {
          toast.success("liked");
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log("liked");
  };

  const handleUnLikeBlog = () => {
    if (yourTokenHere) {
      axios
        .put(
          `http://localhost:3000/api/blog/unlike/${AMovieData?.blog?.slug}`,
          {},
          config
        )
        .then(function (response) {
          toast.success("Unliked");
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log("Unliked");
  };

  const handleReplyComment = (id) => {
    if (yourTokenHere) {
      if (!replyComment) {
        toast.error("empty reply");
        return;
      }
      axios
        .post(
          `http://localhost:3000/api/comment/reply/${id}`,
          {
            comment: replyComment,
          },
          config
        )
        .then(function (response) {
          refetch();
          setReplyToggle(-10);
          toast.success("Reply Post");
        })
        .catch(function (error) {
          console.log(error);
        });
      setComment("");
    } else {
      toast.error("Please login first");
    }
    console.log("Reply Comment Created");
  };


  const handleReplyDeleteComment = (id) => {
    
    if (yourTokenHere) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        
        
        axios
      .delete(`http://localhost:3000/api/comment/reply/${id}`, config)
      .then(() => {
        refetch();
        setReplyToggle(-10);
        toast.success("Reply Deleted"); 
      })
      .catch(function (error) {
        console.error(error); 
      });
    });
    } else {
        toast.error("Please login first");
    }
    console.log("Reply Deleted"); 
};

  const handleComment = (id) => {
    if (yourTokenHere) {

      axios
        .post(
          `http://localhost:3000/api/comment/${AMovieData?.blog?._id}`,
          {
            comment,
          },
          config
        )
        .then(function (response) {
          refetch();
          toast.success("Comment Created");
        })
        .catch(function (error) {
          console.log(error);
        });
      setComment("");
    } else {
      toast.error("Please login first");
    }
    console.log("Comment Created");
  };

  const handleDeleteComment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (yourTokenHere) {
          axios
            .delete(`http://localhost:3000/api/comment/${id}`, config)
            .then(function (response) {
              refetch();
              toast.success("Comment Deleted");
            })
            .catch(function (error) {
              console.log(error);
              toast.error("Something Wrong");
            });
          setComment("");
        } else {
          toast.error("Please login first");
        }
      }
    });

    console.log("Comment Deleted ");
  };

  const handleLikeComment = (id) => {
    if (yourTokenHere) {
      axios
        .post(`http://localhost:3000/api/comment/like/${id}`, {}, config)
        .then(function (response) {
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log(" like Comment");
  };

  const handleRemoveLikeComment = (id) => {
    if (yourTokenHere) {
      axios
        .post(`http://localhost:3000/api/comment/removelike/${id}`, {}, config)
        .then(function (response) {
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log("Removed like Comment");
  };

  const handleDisLikeComment = (id) => {
    if (yourTokenHere) {
      axios
        .post(`http://localhost:3000/api/comment/dislike/${id}`, {}, config)
        .then(function (response) {
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log(" dislike Comment");
  };

  const handleRemoveDisLikeComment = (id) => {
    if (yourTokenHere) {
      axios
        .post(
          `http://localhost:3000/api/comment/removedislike/${id}`,
          {},
          config
        )
        .then(function (response) {
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error("Please login first");
    }
    console.log("Removed Dislike Comment");
  };

  const blogCreateTime = new Date(AMovieData?.blog?.createdAt)
  const currentDate = new Date();
  

  const timeDifferenceInSeconds = Math.floor((currentDate - blogCreateTime) / 1000); 
  let displayTime = '';

if (timeDifferenceInSeconds < 60) {
    displayTime = 'just now';
} else if (timeDifferenceInSeconds < 3600) {
    
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    displayTime = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
} else if (timeDifferenceInSeconds < 86400) {
    
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    displayTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
} else if (timeDifferenceInSeconds < 604800) {
   
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    displayTime = `${days} day${days > 1 ? 's' : ''} ago`;
} else if (timeDifferenceInSeconds < 2592000) {
    
    const weeks = Math.floor(timeDifferenceInSeconds / 604800);
    displayTime = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
} else if (timeDifferenceInSeconds < 31536000) {
   
    const months = Math.floor(timeDifferenceInSeconds / 2592000);
    displayTime = `${months} month${months > 1 ? 's' : ''} ago`;
} else {
    
    const years = Math.floor(timeDifferenceInSeconds / 31536000);
    displayTime = `${years} year${years > 1 ? 's' : ''} ago`;
}
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-5 mt-2">
        <div className="w-full md:col-span-4 col-span-5 md:m-3 shadow-lg p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <FaRegClock size={16} />
            <h1 className="text-[16px] font-medium ">{displayTime}</h1>
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
              <h1 className=" font-normal">
                {AMovieData?.blog?.comments?.length}
              </h1>
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
              <p className="px-2 text-[16px]">
                {AMovieData?.blog?.likes.length}
              </p>
              {AMovieData?.blog?.likes?.includes(userInfo?._id) ? (
                <div
                  as="button"
                  onClick={() => {
                    handleUnLikeBlog();
                  }}
                  className="border-l h-full border-gray-600 bg-blue-700 items-center p-1 px-2 "
                >
                  <BiLike className="text-white" size={18} />
                </div>
              ) : (
                <div
                  as="button"
                  onClick={() => {
                    handleLikeBlog();
                  }}
                  className="border-l h-full  border-gray-600 items-center p-1 px-2 "
                >
                  <BiLike size={18} />
                </div>
              )}
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

          {/* {AMovieData?.blog?.trailer_url && (
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
          )} */}

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
            <Input
              variant="standard"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              label="Add a comment"
            />
            <IoSend
              as="button"
              onClick={() => {
                handleComment();
              }}
              className="opacity-70 cursor-pointer"
              size={24}
            />
          </div>
          {AMovieData?.blog?.comments?.map((data, index) => (
            <div key={index} className="w-full">
              <div key={index} className="w-full flex gap-5 items-center mt-10">
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
                      <div className="cursor-pointer">
                        {data?.like?.includes(userInfo?._id) ? (
                          <AiFillLike
                            as="button"
                            onClick={() => {
                              handleRemoveLikeComment(data?._id);
                            }}
                          />
                        ) : (
                          <BiLike
                            as="button"
                            onClick={() => {
                              handleLikeComment(data?._id);
                            }}
                          />
                        )}
                      </div>
                      <p>
                        {data?.like?.length === 0
                          ? ""
                          : `${data?.like?.length}`}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="cursor-pointer">
                        {data?.dislike?.includes(userInfo?._id) ? (
                          <BiSolidDislike
                            as="button"
                            onClick={() => {
                              handleRemoveDisLikeComment(data?._id);
                            }}
                          />
                        ) : (
                          <BiDislike
                            as="button"
                            onClick={() => {
                              handleDisLikeComment(data?._id);
                            }}
                          />
                        )}
                      </div>

                      <p>
                        {data?.dislike?.length === 0
                          ? ""
                          : `${data?.dislike?.length}`}
                      </p>
                    </div>
                    <p
                      as="button"
                      onClick={() => {
                        setReplyToggle(index);
                        setReplyComment("");
                        // toast.error("Sorry! Not Working Reply funtion");
                      }}
                      className=" cursor-pointer"
                    >
                      Reply
                    </p>
                    {userInfo?._id === data?.author?._id && (
                      <p
                        as="button"
                        onClick={() => {
                          handleDeleteComment(data?._id);
                        }}
                        className="text-red-800 cursor-pointer"
                      >
                        Delete
                      </p>
                    )}
                  </div>
                </div>
              </div>


              {replyToggle === index ? (
                <div className="w-full ml-10  flex gap-5 items-center mt-1 ">
                  <Avatar
                    src={
                      userInfo?.user_image
                        ? userInfo?.user_image
                        : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg"
                    }
                    alt="avatar"
                  />
                  <Input
                    variant="standard"
                    value={replyComment}
                    onChange={(e) => {
                      setReplyComment(e.target.value);
                    }}
                    label="Add a Reply..."
                  />
                  <IoSend
                    as="button"
                    onClick={() => {
                      handleReplyComment(data?._id);
                    }}
                    className="opacity-70 cursor-pointer"
                    size={24}
                  />
                </div>
              ) : (
                ""
              )}

              {data?.reply?.map((reply, index) => (
                <div
                  key={index + 1}
                  className="w-full ml-10 flex gap-5 items-center mt-3"
                >
                  <Avatar
                    size="sm"
                    src={reply?.author?.user_image}
                    alt="avatar"
                  />
                  <div>
                    <div className="flex gap-5">
                      <p className="text-[16px]">
                        @{reply?.author?.firstname}_{reply?.author?.lastname}
                      </p>
                      <p className="opacity-60">6 days ago</p>
                    </div>
                    <p>{reply?.comment}</p>
                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center">
                        <div className="cursor-pointer">
                          {false ? <AiFillLike /> : <BiLike />}
                        </div>
                        <p></p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="cursor-pointer">
                          {false ? <BiSolidDislike /> : <BiDislike />}
                        </div>

                        <p></p>
                      </div>
                      {userInfo?._id === reply?.author?._id && (
                        <p
                          as="button"
                          onClick={() => {
                            handleReplyDeleteComment(reply?._id);
                          }}
                          className="text-red-800 cursor-pointer"
                        >
                          Delete
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
