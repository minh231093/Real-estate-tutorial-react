import React from "react";

import Image from "../assets/img/house-banner.png";

import Search from "../components/Search";

const Banner = () => {
  return (
    <section
      className="h-full max-h-[640px] mb-8
    xl:mb-24"
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:ml-8 xl:ml-[135px]
        flex flex-col items-center lg:items-start
        text-center lg:text-left justify-center 
        flex-1 px-4 lg:px-0"
        >
          <h1
            className="text-4xl lg:text-[58px] 
          font-semibold leading-none mb-6"
          >
            <span className="text-violet-700">Rent</span> Your Dream Home with
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            porttitor nibh eget ante tempor egestas. Aliquam aliquam, massa non
            tincidunt venenatis, lacus odio cursus velit, a condimentum ex justo
            nec velit. Aenean dui libero, lobortis et dignissim vitae, aliquam
            nec velit. Nam mi ante, venenatis at congue a, bibendum sed eros.
            Integer et nisl in enim ultrices efficitur. Quisque nec tristique
            nisl. Proin lectus dui, interdum in aliquam quis, rhoncus in velit.
          </p>
        </div>
        <div
          className="hiddenflex-1 lg:flex 
        justify-end items-end"
        >
          <img src={Image} alt="House" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
