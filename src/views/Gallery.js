import Card from "components/Card";
import Navbar from "components/Navbar";
import React, { useEffect } from "react";
import cover from "../assets/img/others.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "components/Footer";

function Gallery() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <Navbar transparent />
      <div
        className="relative pt-16 flex content-center items-center justify-center "
        style={{
          minHeight: "50vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
      </div>
      <div className=" h-16 bg-black py-16">
        <h1 className="text-3xl font-bold text-white uppercase text-center tracking-widest">
          Muscle Up
        </h1>
      </div>
      <div className="h-full w-full bg-black ">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap text-center justify-center text-white">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
