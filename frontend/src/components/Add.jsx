import React from "react";

const Add = () => {
  return (
    <div className="text-[#000300] flex flex-col">
      <div className="w-[90%] mx-auto my-20 px-12 pb-10 text-center shadow-2xl border-4 border-b-yellow-300 rounded-2xl hover:scale-105  duration-200 ">
        <h1 className="font-bold text-3xl py-10  border-b-4 w-auto  ">
          What is GENRIFY? {"🧐"}
        </h1>
        <p className="font-medium text-3xl py-14 ">
          {" "}
          GENRIFY is website which classifies ,to what genre your music belongs
          to . It is developed using Machine Learning and trained with data
          available on kaggle.{" "}
        </p>
      </div>

      <div className="w-[90%] mx-auto my-20 px-12 pb-10 text-center shadow-2xl border-4 border-b-yellow-300 rounded-2xl hover:scale-105  duration-200 ">
        <h1 className="font-bold text-3xl py-10  border-b-4  w-auto   ">
          Why GENRIFY? {"🤔"}
        </h1>
        <p className="font-medium text-3xl py-14 ">
          {" "}
          People in music profession deals with tons of music/beats. Genre of
          song plays high role to target right audience and artists.By using
          GENRIFY it'll be easier to tackle this problem.{" "}
        </p>
      </div>

      <div className="w-[90%] mx-auto my-20 px-12 pb-10 text-center shadow-2xl border-4 border-b-yellow-300 rounded-2xl hover:scale-105  duration-200 ">
        <h1 className="font-bold text-3xl py-10  border-b-4  w-auto   ">
          For? {"😎"}
        </h1>
        <p className="font-medium text-3xl py-14 ">
          {" "}
          GENRIFY is great tool for artists to find genre of there music and
          mainly for music producers, As every artist work in specific genre,
          producers can have a idea about which genre there bewat falls into. So
          that they can target artist with specific genre and grow there
          bussiness.{" "}
        </p>
      </div>
    </div>
  );
};

export default Add;
