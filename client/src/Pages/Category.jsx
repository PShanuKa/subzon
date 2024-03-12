import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import Title from "../Components/Title";
import Card from "../Components/Card";
import { useGetAllLanguageQuery } from "../api/languageSlice";
import { useGetAllCategoryQuery } from "../api/categorySlice";

const Category = () => {
  const { data: categoryCData, isLoading:categoryCLoading } = useGetAllCategoryQuery();
  const { data: languageCData,  isLoading:languageCLoading  } = useGetAllLanguageQuery();

  return (
    <div className="">
      <div className="border-b border-black">
        <h1 className="text-[24px] mt-5 font-bold max-w-7xl px-3 mx-auto">Movies</h1>
      </div>

      <div className="flex-wrap flex gap-3 max-w-7xl mx-auto m-3 px-3">
        <Button variant="outlined" className="text-[16px]  normal-case py-1">
          Movies
        </Button>
        <Button variant="outlined" className="text-[16px] normal-case py-1">
          Tv Show
        </Button>
        <Button variant="outlined" className="text-[16px] normal-case py-1">
          Most Download
        </Button>
        <Button variant="outlined" className="text-[16px] normal-case py-1">
          Movie Collection
        </Button>
      </div>

      <div className="flex max-w-7xl mx-auto  mt-3 px-5  ">
        <div className="md:flex grid gap-3 md:gap-10">
        <div className="flex items-center gap-4 ">
          <p className="text-[18px] font-sinhala">භාෂාව:</p>
        {(languageCLoading && !languageCData?.language) ? "" : (
          <Select variant="outlined" className="" label="Language" >
            {languageCData?.language?.map((data, index)=>(
            <Option className=" font-sinhala" key={index}>{data?.title} ({data?.sinhalaTitle})</Option>
            ))}
          </Select>
        )}

        </div>
        <div className="flex items-center gap-4">
          <p className="text-[18px]">Category:</p>
          {(categoryCLoading && !categoryCData?.categories) ? "" : (
          <Select variant="outlined" label="Category" >
            {categoryCData?.categories?.map((data, index)=>(
          <Option key={index} className=" font-sinhala">{data?.title} ({data?.sinhalaTitle})</Option>
            ))}
          </Select>
        )}
        </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-3 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Category;
