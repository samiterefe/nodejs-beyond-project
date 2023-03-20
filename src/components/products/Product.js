import Navbar from "../navbar/Navbar";

import product1 from "../../img/product1.png";
import product2 from "../../img/product2.jpg";
import product3 from "../../img/product3.jpg";
import product4 from "../../img/product4.jpg";
import product5 from "../../img/product5.jpg";
import product6 from "../../img/product6.jpg";
import banana9 from "../../img/banana9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Products() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="isolate bg-white ">
        {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

        <main>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="text-center mb-4">
              <p class="font-bold text-yellow-500 dark:text-yellow-400">
                / Products
              </p>

              {/* <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Minoo Nutritional Banana Flour
                <br />
                Our products Minoo Nutritional Banana Flour
              </h1> */}

              <h2 className="max-w-lg   mt-4  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Our</span>
                </span>{" "}
                Products
              </h2>

              <p class="mt-2 text-gray-500 dark:text-gray-400">
                Our priority is customer satisfaction
              </p>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              {/* <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                  <span className="inline-block mb-1 sm:mb-4">
                    There is no must in art
                    <br className="hidden md:block" />
                    because art is free.
                  </span>
                  <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                </h2>
                <p className="text-gray-700 lg:text-sm lg:max-w-md">
                  "Class is dead", says Foucault; however, according to Reicher,
                  it is not so much class that is dead, but rather the
                  absurdity, and some would say the paradigm, of class. However,
                  the subject is interpolated into a postpatriarchialist
                  dialectic theory that includes consciousness as a totality.
                </p>
              </div> */}
              <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product1}
                      alt=""
                    />

                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Organic Banana
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        Banana Fruit Powder gives you the delicious flavor,
                        energy, and nutritional benefits of ripe, organic
                        bananas in a convenient powder form providing a tasty
                        way to add potassium, magnesium, and vitamins to your
                        diet.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product2}
                      alt=""
                    />
                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Green banana powder
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        Green banana powder has many potential benefits for
                        digestive health, including reducing inflammation and
                        improving gut motility. Studies have shown that this
                        powder can also help improve overall digestion,
                        absorption of nutrients, and reduce digestive issues
                        like gas and bloating.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product3}
                      alt=""
                    />

                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Dried pineapple
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        Dried pineapple is a good source of calcium, potassium,
                        manganese, fiber, as well as vitamins A, B and C and
                        effective drug for acne. This fruit helps to get rid of
                        resistant pimples, gives younger skin, prevents hair
                        loss, Scalp inflammation and common cold. It supports
                        bone strength and improves gum health.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product4}
                      alt=""
                    />

                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Dried Mango
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        Dried mango is a healthy and convenient snack. It&apos;s
                        a good source of vitamins and plant bioactive compounds
                        such as antioxidants, which may protect against
                        anti-inflammatory diseases.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product5}
                      alt="product5"
                    />

                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Dried Papaya
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        It is naturally rich in dietary fiber, antioxidants, and
                        beta-carotene. These dried papaya spears are a great way
                        to satisfy a sweet craving, while providing the body
                        with an energizing source of nutrients.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/"
                  aria-label="View Item"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={product6}
                      alt=""
                    />

                    <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-4 text-lg font-bold text-gray-100">
                        Banana chips(Coming soon)
                      </p>
                      <p className="text-sm tracking-wide text-gray-300">
                        Dried Banana Chips provides magnesium, vitamin A, iron,
                        phosphorus, and potassium. These nutrients benefit your
                        eyes and may prevent high blood pressure. This snack
                        supplies your body with the energy it needs.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  View gallery
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
