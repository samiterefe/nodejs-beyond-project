import banana4 from "../../img/banana4.jpeg";
import banana5 from "../../img/bananaa5.jpg";
import banana1 from "../../img/bananaa1.jpg";
import banana2 from "../../img/bananaa2.jpg";
import banana3 from "../../img/bananaa3.jpg";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div
          className="relative lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src={banana5}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
        >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-600 uppercase rounded-full bg-yellow-6ccent-400">
              Putting our
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Customers First
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Beyond Fruits</span> is dedicated to
            bringing you the finest quality in a hard-to-find whole, all natural
            and organic foods. We pride ourselves on quick shipping and
            top-notch customer service
          </p>
          <div className="flex items-center">
            <Link
              href="/products"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              More about
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
    </div>
  );
}
