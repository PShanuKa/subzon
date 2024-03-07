import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Card from "../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { getAllBlog } from "../features/blogSlice";
import CardSkeleton from "../Components/CardSkeleton";
import { useGetAllBlogsQuery } from "../api/blogSlice";
const Home = () => {
    const { data: movieData, isLoading: movieIsLoading } = useGetAllBlogsQuery()

  return (
    <>
      <Header />

      <Title title="Movies(චිත්‍රපට)" />
      <div className="max-w-7xl min-h-[400px] mx-auto px-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-3 mb-10">
        {movieIsLoading  ? (
          <>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          <CardSkeleton/>
          </>
          ) : (
            movieData?.blogs?.map((data, index) => <Card key={index} data={data} />)
        )}
      </div>
      <Title title="TV SHOW" />
      <div className="max-w-7xl mx-auto px-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
        <Card />
      </div>
    </>
  );
};

export default Home;
