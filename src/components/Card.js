import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6"
      data-aos={"fade-down-right"}
    >
      <div className="px-6">
        <img
          alt="..."
          src={require("assets/img/instructor2.jpg").default}
          className="shadow-lg rounded max-w-full mx-auto"
          style={{ maxWidth: "260px" }}
        />
        <div className="pt-6 text-center text-white">
          <h5 className="text-xl font-bold">#Caption</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Amet aliqua ad quis veniam magna reprehenderit. Laborum enim eiusmod
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
