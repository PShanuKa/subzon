import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import Title from "../Components/Title";
import Card from "../Components/Card";

const Category = () => {
  return (
    <div>
        <div className="border-b border-black">
            <h1 className="text-[24px] mt-5 font-bold max-w-7xl mx-auto">Movies</h1>
        </div>
        
      <div className="flex gap-3 max-w-7xl mx-auto m-3">
        <Button variant="outlined" className="text-[16px] normal-case py-1">
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
      
     
      <div className="flex max-w-7xl mx-auto mt-3 gap-10">
        <div className="flex items-center gap-4">
        <p className="text-[18px]">Language:</p>
        <Select variant="outlined" label="Language">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>

        </div>
        <div className="flex items-center gap-4">
        <p className="text-[18px]">Category:</p>
        <Select variant="outlined" label="Category">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>

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
