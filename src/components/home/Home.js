import { Link } from "react-router-dom";
import * as te from "tw-elements";
import banana1 from "../../img/bananaa1.jpg";
import banana2 from "../../img/bananaa2.jpg";
import banana3 from "../../img/bananaa3.jpg";
import banana4 from "../../img/banana4.jpeg";
import banana5 from "../../img/bananaa5.jpg";
import Content from "./Content";
import HomeContact from "./HomeContact";
import Footer from "../layouts/Footer";
import Services from "./Service";

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="isolate bg-white ">
        <main>
          <div
            id="carouselExampleControls"
            class="relative   "
            data-te-carousel-init
            data-te-carousel-slide
            interval="1000"
          >
            <div class="relative  w-full   overflow-hidden after:clear-both after:block after:content-['']">
              <div
                class="relative h-full   float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active
              >
                <img
                  src={banana1}
                  class="block w-full  h-full w-full object-cover lg:h-[40rem] md:h-[32rem]  h-[28rem] filter sepia-96  w-full  brightness-50  "
                  alt="Wild Landscape"
                  width={400}
                  height={700}
                />
              </div>
              <div
                class="relative  h-full   float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  src={banana2}
                  class="block w-full object-cover lg:h-[40rem] md:h-[32rem]  h-[28rem] h-full w-full  filter sepia-96   w-full  brightness-50 "
                  alt="Camera"
                  width={400}
                  height={700}
                />
              </div>
              <div
                class="relative h-full   float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <img
                  src={banana3}
                  class="block w-full object-cover lg:h-[40rem] md:h-[32rem]  h-[28rem] h-full w-full  filter sepia-96   w-full  brightness-50 "
                  alt="Exotic Fruits"
                  width={400}
                  height={700}
                />
              </div>
            </div>

            <button
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleControls"
              data-te-slide="prev"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleControls"
              data-te-slide="next"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
          <div
            class="absolute inset-x-[15%] lg:-mt-[48rem]  md:-mt-[40rem]  sm:-mt-[32rem] -mt-[24rem]  md:-mt-[48rem] py-5 text-center text-white "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div class="relative px-6 lg:px-8">
              <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div class="relative rounded-full py-1 px-3 text-sm hidden md:block leading-6 text-white-600 ring-1 ring-white hover:ring-white-900/20">
                    Our priority is customer satisfaction{" "}
                    <Link href="/about" class="font-semibold text-yellow-600">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div class="text-center">
                  <h1 class="text-3xl  font-bold tracking-tight text-white-900 md:text-5xl lg:text-6xl sm:text-4xl">
                    Delivering organic powders
                  </h1>
                  <p class="mt-6 text-lg leading-8 hidden lg:block text-white-600">
                    For a healthy, balanced,accessible and affordable lifestyle.
                  </p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/products"
                      class="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                    >
                      Our products
                    </Link>
                    <Link
                      href="/contact"
                      class="items-center block  lg:px-8 px-3.5 py-2.5 text-sm font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9089FC" />
                      <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <Services />

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="container px-6 py-16 mx-auto text-center"
          >
            <div class="max-w-lg mx-auto">
              <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Nutritious and healthy fruit products
              </h1>
              <p class="mt-6 mb-4 text-gray-500 dark:text-gray-300">
                We aim to deliver each of our prodcuts with quality, excellence
                and consistency with the help of our experienced team.
              </p>
              <Link
                to="/products"
                class="px-5  py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-yellow-600 rounded-lg hover:bg-yellow-500 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Our products
              </Link>
              <p class="mt-3 text-sm text-gray-400 "> A Healthy Lifestyle</p>
            </div>
          </div>
          <Content />

          <HomeContact />
        </main>
        <Footer />
      </div>
    </>
  );
}
