import React from "react";
import { AllTopBar } from "../../Components/AllDropdown/AllDropdownHover";
import { AllNavBar, NavBottom } from "../../Components/AllNavbar/AllNavBar";
import SubscribePhoto from "../../Components/SubscribePhoto";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import ShopJsonSlide from "./ShopJsonSlide";
import Slider from "react-slick";
import P5Slider from "./Sliders/P5Slider";
import ScrollToTopButton from "../../Components/ScrollToTopButton";

const ProductV5 = () => {
  let slider;
  const handlePrev = () => {
    slider.slickPrev();
  };

  const handleNext = () => {
    slider.slickNext();
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div>
        <div>
          <ScrollToTopButton />
        </div>

        <section className="SHOP-DROPDOWN">
          <AllTopBar />
        </section>

        <section className="SHOP-NAVBAR sticky top-0 z-20 ">
          <AllNavBar />
        </section>

        <section className="SHOP-NAV-BOTTOM">
          <NavBottom />
        </section>

        <section className="IMAGES-AND-DISCRIPTION ">
          <div className="px-24">
            <div className="grid grid-cols-2 gap-20 pt-[100px]">
              <div>
                <P5Slider />
              </div>

              <div className="main-div-details ">
                <h1 className="font-bold text-4xl text-[#292930] tracking-wide mb-8">
                  Wooden Sofa Chair
                </h1>
                <div className="flex items-center mb-5">
                  <h1 className="font-semibold text-2xl text-[#292930] mr-6">
                    $155.00
                  </h1>
                  <h1 className="font-semibold text-2xl text-gray-500 mr-6">
                    <del>$155.00</del>
                  </h1>
                  <button className="bg-[#E76458] px-5 py-3 rounded-full text-white font-semibold">
                    20% OFF
                  </button>
                </div>
                <div className="flex border-b-2 border-gray-200">
                  <span className="text-[#FFA800]">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-line"></i>
                  </span>
                  <p className="text-gray-500 hover:text-[#292930] duration-500 ml-2 pb-5 ">
                    (2 customer reviews)
                  </p>
                </div>
                <ul className="text-[#417EF0] text-lg pt-5 mb-7">
                  <li>
                    <i class="ri-check-line mr-3"></i>In stock
                  </li>
                  <li>
                    <i class="ri-check-line mr-3"></i>Free delivery available
                  </li>
                  <li>
                    <i class="ri-check-line mr-3"></i>Sales 30% Off Use Code:
                    MOTIVE30
                  </li>
                </ul>
                <p className="text-gray-500 mb-10">
                  In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                  Integer ante est, hendrerit in rutrum quis, elementum eget
                  magna. Pellentesque sagittis dictum libero, eu dignissim
                  tellus.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <Link
                        to="/Cart"
                        href="#"
                        className='relative z-10 font-bold bg-[#3577F0] text-white px-24 py-5 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '
                      >
                        Buy on Amazon
                      </Link>
                    </div>

                    <div className="flex mx-5">
                      <Link
                        to="/Wishlist"
                        href="#"
                        className="relative z-10 px-1 py-3 border-2 rounded-md
                                                before:absolute 
                                                before:h-[100%]
                                                before:w-[100%]
                                                before:rounded-md
                                                before:bg-[#3577F0]
                                                before:scale-0 
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:top-0
                                                before:bottom-0
                                                before:left-0
                                                before:right-0
                                                "
                      >
                        <i class="ri-heart-line text-2xl px-4 py-4  text-gray-600 hover:border-none hover:text-white duration-300"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="BOTTOM-DISCRIPTION bg-[#F9F3F0] py-[100px]">
            <div className="px-24">
              <h1 className=" text-2xl font-semibold">Description</h1>
              <div className="grid grid-cols-2 gap-10 mt-12">
                <div>
                  <div>
                    <h1 className="font-bold text-xl text-[#292930] mb-7">
                      Specifications:
                    </h1>
                    <p className="text-gray-500 mb-14">
                      We’ve created a full-stack structure for our working
                      workflow processes, were from the funny the century
                      initial all the made, have spare to negatives. But the
                      structure was from the funny the century rather, initial
                      all the made, have spare to negatives.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="mr-10">
                      <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5">
                        <img
                          className="h-8"
                          src="./src/assets/shop/p5/asset 9.png"
                          alt=""
                        />
                      </div>
                      <h1 className="font-semibold text-xl text-[#292930]">
                        Easy Returns
                      </h1>
                    </div>
                    <div className="mr-10">
                      <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5">
                        <img
                          className="h-8"
                          src="./src/assets/shop/p5/asset 10.png"
                          alt=""
                        />
                      </div>
                      <h1 className="font-semibold text-xl text-[#292930]">
                        Quality Service
                      </h1>
                    </div>
                    <div>
                      <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full mb-5">
                        <img
                          className="h-8"
                          src="./src/assets/shop/p5/asset 11.png"
                          alt=""
                        />
                      </div>
                      <h1 className="font-semibold text-xl text-[#292930]">
                        Original Product
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-bold text-xl text-[#292930] mb-7">
                      Care & Maintenance:
                    </h1>
                    <p className="text-gray-500">
                      Use warm water to describe us as a product team that
                      creates amazing UI/UX experiences, by crafting top-notch
                      user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="TABLE mt-[70px]">
                <h1 className=" text-2xl font-bold mb-[60px]">
                  Additional Information
                </h1>
                <div className="bg-white rounded-md p-12">
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Stand Up</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Folded (W/O Wheels)
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      32.5″L x 18.5″W x 16.5″H
                    </h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Folded (W/ Wheels)
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      32.5″L x 24″W x 18.5″H
                    </h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Door Pass Through
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">24</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Frame</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      Aluminum
                    </h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Weight (W/O Wheels)
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      20 LBS
                    </h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Weight Capacity
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      60 LBS
                    </h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Width</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">24″</h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">
                      Handle Height (Ground To Handle)
                    </h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      37-45″
                    </h1>
                  </div>
                  <div className="py-5 flex  text-[#292930]">
                    <h1 className="w-[500px]  font-semibold px-8">Wheels</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      Aluminum
                    </h1>
                  </div>
                  <div className="py-5 flex bg-[#F6F7FB] text-[#292930] ">
                    <h1 className="w-[500px]  font-semibold px-8">Size</h1>
                    <h1 className="text-gray-400  font-semibold ml-24">
                      {" "}
                      S, M, X, XL
                    </h1>
                  </div>
                </div>
              </div>

              <div className="REVIEWS mt-[70px]">
                <h1 className=" text-2xl font-bold mb-[60px]">Reviews</h1>
                <div className="FORM grid grid-cols-2 gap-20">
                  <div className="pr-14">
                    <div className="mb-7">
                      <h1 className="font-bold text-lg text-[#292930] mb-10">
                        01 Review for this product
                      </h1>
                      <div className="flex">
                        <div>
                          <img
                            className="w-28"
                            src="./src/assets/shop/p5/asset 12.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-5">
                          <div className="flex justify-between ">
                            <h1 className="font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2">
                              Eleanor Pena
                            </h1>
                            <span className="text-[#FFA800]">
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill text-gray-300"></i>
                            </span>
                          </div>
                          <p className="text-gray-500 leading-7">
                            “We’ve created a full-stack structure for our
                            working workflow processes, were from the funny the
                            century initial all the made, have spare to
                            negatives. ”
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-7">
                      <div className="flex">
                        <div>
                          <img
                            className="w-28"
                            src="./src/assets/shop/p5/asset 12.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-5">
                          <div className="flex justify-between ">
                            <h1 className="font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2">
                              Courtney Henry
                            </h1>
                            <span className="text-[#FFA800]">
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill    "></i>
                            </span>
                          </div>
                          <p className="text-gray-500 leading-7">
                            “We’ve created a full-stack structure for our
                            working workflow processes, were from the funny the
                            century initial all the made, have spare to
                            negatives. ”
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex">
                        <div>
                          <img
                            className="w-28"
                            src="./src/assets/shop/p5/asset 13.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-5">
                          <div className="flex justify-between ">
                            <h1 className="font-semibold text-lg text-[#292930] hover:text-[#3577F0] duration-500 mb-2">
                              Devon Lane
                            </h1>
                            <span className="text-[#FFA800]">
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <p className="text-gray-500 leading-7">
                            “We’ve created a full-stack structure for our
                            working workflow processes, were from the funny the
                            century initial all the made, have spare to
                            negatives. ”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-500">
                    <h1 className="font-bold text-lg text-[#292930] mb-5">
                      Add a Review
                    </h1>
                    <p className="mb-7">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="flex mb-5">
                      <h1 className="mb-5 mr-3">
                        Your Rating <span className="text-[#E76458]">*</span>
                      </h1>
                      <span className="text-gray-500 text-lg">
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                        <i class="ri-star-line hover:text-[#3577F0] duration-300 mr-[2px]"></i>
                      </span>
                    </div>
                    <div className="relative text-gray-500 mb-5">
                      <label className="absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm">
                        Other Notes (optional)
                      </label>
                      <textarea
                        className="w-full resize-none border bg-[#F9F3F0] border-gray-300 rounded-md font-normal focus:outline-blue-400 placeholder:text-sm placeholder:text-gray-500
                                        px-9 py-5"
                        cols=""
                        rows="5"
                        placeholder="Your Comment"
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="relative text-gray-500 ">
                        <label className="absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm">
                          Name<span className="text-[#E76458] ml-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-[#F9F3F0] border border-gray-300  px-14 py-3 rounded-md font-normal focus:outline-blue-400"
                        />
                      </div>
                      <div className="relative text-gray-500">
                        <label className="absolute -top-3 left-7 bg-[#F9F3F0] px-2 font-semibold text-sm">
                          E-mail<span className="text-[#E76458] ml-1">*</span>
                        </label>
                        <input
                          type="email"
                          className="w-full bg-[#F9F3F0] border border-gray-300  px-14 py-3 rounded-md font-normal focus:outline-blue-400"
                        />
                      </div>
                    </div>
                    <div className="mt-12">
                      <a
                        href="#"
                        className=" relative z-10 px-12 py-5  rounded-md font-semibold  text-white bg-[#3577F0] 
                                        before:absolute 
                                        before:content-[''] 
                                        before:w-[200px] 
                                        before:rounded-md 
                                        before:left-0 
                                        before:right-0 
                                        before:top-0 
                                        before:bottom-0 
                                        before:bg-[#3577F0]  
                                        before:-z-10 
                                        before:hover:scale-110  
                                        before:duration-300
                                        "
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="JSONDATA">
          <ShopJsonSlide />
        </section>

        <section className="SHOP-FOOTER">
          <SubscribePhoto />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default ProductV5;
