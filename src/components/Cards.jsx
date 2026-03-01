import React from "react";

function Cards({ img, title }) {
  return (
   
      <div className=" flex items-center w-[564px] h-[86px] bg-surface rounded-3xl">
        <button className="w-full h-full flex items-center justify-start">
          <img className="ml-5 object-contain" src={img} alt={title} />
          <h2 className="ml-5 text-text-main font-bold text-[17px] tracking-wide">
            {title}
          </h2>
        </button>
      </div>
   
  );
}

export default Cards;
