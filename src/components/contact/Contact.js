import emailjs from "emailjs-com";
import { useRef } from "react";
import Footer from "../layouts/Footer";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const typeRef = useRef(null);
  const phoneRef = useRef(null);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gn6kijv",
        "template_u1wqucn",
        form.current,
        "CYUnSolfTetOyPd2n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log("handleSubmit ran");
    e.preventDefault();

    // 👇️ clear all input values in the form
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    typeRef.current.value = "";
    phoneRef.current.value = "";
  };
  return (
    <>
      <div className=" isolate bg-white  ">
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-12 mx-auto">
            <div class="text-center">
              <p class="font-medium text-yellow-500 dark:text-yellow-400">
                / contact us
              </p>

              <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Contact Us
              </h1>

              <p class="mt-3 text-gray-500 dark:text-gray-400">
                Our friendly team is always here to chat.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-gray-500 dark:text-yellow-400">
                  exportname@gmail.com
                </p>
              </div>

              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p class="mt-2 text-gray-500 dark:text-yellow-400">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>

              <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p class="mt-2 text-gray-500 dark:text-yellow-400">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className=" md:mx-32 ">
          <div class="py-6 lg:flex    md:py-0 lg:px-20">
            <div class="w-full  px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 class="text-lg font-medium text-gray-700">
                Send your inquiry
              </h1>

              <form class="mt-6" ref={form} onSubmit={sendEmail}>
                <div class="flex-1">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    ref={nameRef}
                    required
                    type="text"
                    name="user_name"
                    placeholder="your name"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    required
                    type="email"
                    name="user_email"
                    placeholder="yourmail@mail.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div class="flex-1 mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone Address
                  </label>
                  <input
                    required
                    ref={phoneRef}
                    type="text"
                    name="phone_no"
                    placeholder="+XXXXXXXXXXXX"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div class="flex-1 mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Product Type
                  </label>

                  <select
                    required
                    name="product_type"
                    ref={typeRef}
                    id="cars"
                    placeholder="product type"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option value="Green banana powder">
                      Green banana powder
                    </option>
                    <option value="Ripe banana powder" selected>
                      Ripe banana powder
                    </option>
                    <option value="Banana chips">Banana chips</option>
                    <option value=" Dried mango ">Dried mango</option>
                    <option value="Dried pineapple">Dried pineapple</option>
                    <option value="Dried Papaya">Dried Papaya</option>
                  </select>
                  {/* <input
                    
                    type="text"
                    
                    
                   
                  /> */}
                </div>

                <div class="w-full mt-6">
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    name="message"
                    class="block w-full h- px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                  send message
                </button>
              </form>
            </div>

            <iframe
              className="w-full h-[40rem]"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Bole,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
