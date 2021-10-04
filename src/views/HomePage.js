import React, { useEffect } from "react";
import cover from "../assets/img/cover.jpg";
import about from "../assets/img/others.jpg";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Landing() {
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
      <main className="bg-black">
        <div
          className="relative pt-16 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage: `url(${cover})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>

          {/* caption on cover image */}
          <div className="container relative mx-auto" data-aos={"fade-left"}>
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl capitalize text-teal-800">
                    Power Up your muscles
                  </h1>
                  <p className="mt-4 text-xl text-gray-300">
                    Once You see results, it become an addition. You are worth
                    it keep going{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div
                className="w-full md:w-5/12 px-4 mr-auto ml-auto "
                data-aos={"fade-left"}
              >
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-dumbbell text-xl"></i>
                </div>
                <h3 className="text-4xl mb-2 font-semibold text-teal-800 leading-normal inline ml-4">
                  About Us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                  Amet occaecat ipsum laboris ex in.Est qui qui ut deserunt.
                  Aliqua irure aliqua exercitation do dolor fugiat esse eu et.
                  Nisi ut deserunt excepteur do cupidatat sunt sit minim sit.
                  Occaecat esse cupidatat dolore dolore esse minim. Elit eiusmod
                  magna ullamco adipisicing amet enim dolore deserunt occaecat
                  ....
                </p>

                <a href="/about" className="font-bold mt-8 text-gray-100">
                  Read More
                </a>
              </div>

              <div
                className="w-full md:w-4/12 px-4 mr-auto ml-auto "
                data-aos={"flip-right"}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-100">
                  <img
                    alt=".About us"
                    src={about}
                    height="300"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-black-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-teal-800">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-600">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
            {/* offers we give you */}

            <h1 className="text-4xl font-bold text-white text-center mt-10">
              {" "}
              Our Offers
            </h1>
            <div
              className="flex flex-wrap justify-center"
              data-aos={"fade-down-right"}
            >
              <Product
                title="Daily"
                description=" Pariatur ipsum enim dolore et Lorem. Pariatur ipsum enim dolore et Lorem."
              />
              <Product
                title="Weekly"
                description=" Pariatur ipsum enim dolore et Lorem. Pariatur ipsum enim dolore et Lorem."
              />
              <Product
                title="Monthly"
                description=" Pariatur ipsum enim dolore et Lorem. Pariatur ipsum enim dolore et Lorem."
              />
              <Product
                title="Yearly"
                description=" Pariatur ipsum enim dolore et Lorem. Pariatur ipsum enim dolore et Lorem."
              />
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos={"fade-down"}
            data-aos-easing={"linear"}
            data-aos-duration={"1500"}
          >
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("assets/img/us.jpg").default}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-map text-xl text-gray-600"></i>
                  </div>
                  <h3 className="text-2xl font-semibold inline ml-4 text-teal-800">
                    Our Activities And Location
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                    Amet occaecat ipsum laboris ex in.Est qui qui ut deserunt.
                    Aliqua irure aliqua exercitation do dolor fugiat esse eu et.
                    Nisi ut deserunt excepteur do cupidatat sunt sit minim sit.
                    Occaecat esse cupidatat dolore dolore esse minim. Elit
                    eiusmod magna ullamco adipisicing amet enim dolore deserunt
                    occaecat ....
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-white mr-3">
                            <i className="fas fa-map-marker text-gray-600"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white">
                            Locate Us At Poly Junction
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24 text-white">
              <div
                className="w-full lg:w-6/12 px-4"
                data-aos={"fade-up"}
                data-aos-anchor-placement={"top-center"}
              >
                <h2 className="text-4xl font-semibold ">
                  Here are our Instructors
                </h2>
                <p className="text-lg leading-relaxed m-4">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div
              className="flex flex-wrap"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/instructor1.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "220px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ama Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Kpa Kpa Kpa
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/instructor 2.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "220px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">James Bor</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Ogbo Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/instructor 2.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "220px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Harry Fish</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Man Power
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/instructor1.jpg").default}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "220px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Aku</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Power Bell
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-black">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div
                className="w-full lg:w-6/12 px-4"
                data-aos={"fade-up"}
                data-aos-anchor-placement={"up-center"}
              >
                <h2 className="text-4xl font-semibold text-white">
                  Conntact Us
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
                  Sit Lorem velit eiusmod quis voluptate occaecat magna proident
                  consequat mollit esse ipsum do. Et officia aliqua eu Lorem
                  reprehenderit duis duis nulla esse laborum nulla. Commodo enim
                  in consequat dolore Lorem. Exercitation enim culpa sint et.
                  Consectetur excepteur qui est qui minim voluptate laborum.
                  Cupidatat quis eiusmod fugiat eiusmod nostrud tempor tempor
                  sunt sunt enim sit proident id veniam. Anim minim nulla ea
                  occaecat proident tempor cupidatat aute.
                </p>
              </div>
            </div>
            <div
              className="flex flex-wrap mt-12 justify-center"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-100">
                  SExercitation enim culpa sint et. Consectetur excepteur qui
                  est qui minim voluptate
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your Muscles
                </h5>
                <p className="mt-2 mb-4 text-gray-100">
                  Exercitation enim culpa sint et. Consectetur excepteur qui est
                  qui minim voluptate.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Become sharper
                </h5>
                <p className="mt-2 mb-4 text-gray-100">
                  Exercitation enim culpa sint et. Consectetur excepteur qui est
                  qui minim voluptate
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative block py-24 lg:pt-0 bg-black"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="container mx-auto px-4 mt-10">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to Contact Us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
