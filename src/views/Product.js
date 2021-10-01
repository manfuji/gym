import React from "react";

function Product({ title, description }) {
  return (
    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            <i className="fas fa-award"></i>
          </div>
          <span className="text-xl font-bold text-center text-teal-800">
            {" "}
            {title}
          </span>
          <p className="mt-2 mb-4 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default Product;
