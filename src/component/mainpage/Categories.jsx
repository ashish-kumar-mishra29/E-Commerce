import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Keyboard",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Mouse",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cooling Fans",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Headphones",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Mouse Pads",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Chairs",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Tables",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Controllers",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: " Room setups",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Microphone",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Headphone Stand",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
