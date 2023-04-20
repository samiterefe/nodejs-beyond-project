import Footer from "../layouts/Footer";
import React, { Component } from "react";
import Contact from "./Contact";
import axios from "axios";

const url = "https://api.beyondfooditems.com";
const axiosInstance = axios.create({ url });

class Contact2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      productType: "",
      message: "",
      sent: false,
    };
  }

  // hundale inputs
  handleName = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  };

  handlePhone = (e) => {
    this.setState({
      ...this.state,
      phone: e.target.value,
    });
  };

  handleProductType = (e) => {
    this.setState({
      ...this.state,
      productType: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      ...this.state,
      message: e.target.value,
    });
  };

  //end of handle inputs

  //formSubmit

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    axiosInstance
      .post(`${url}/api/forma`, this.state)
      .then((res) => {
        this.setState({
          sent: true,
        });
        this.resetForm();
      })
      .catch(() => {
        console.log("message  not sent");
      });
  };
  /// for reseting initial

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      productType: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 10000);
  };

  render() {
    return (
      <>
        <div className=" isolate bg-white  ">
          <section class="bg-white ">
            <div class="container px-6 py-12 mx-auto">
              <div class="text-center">
                <p class="font-medium text-yellow-500 ">/ contact us 2</p>

                <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
                  Contact Us
                </h1>

                <p class="mt-3 text-gray-500 ">
                  Our friendly team is always here to chat.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div class="flex flex-col items-center justify-center text-center">
                  <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 ">
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

                  <h2 class="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                  <p class="mt-2 text-gray-500 ">
                    Our friendly team is here to help.
                  </p>
                  <p class="mt-2 text-gray-500 ">info@beyondfooditems.com</p>
                </div>

                <div class="flex flex-col items-center justify-center text-center">
                  <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 ">
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

                  <h2 class="mt-4 text-lg font-medium text-gray-800 ">
                    Office
                  </h2>
                  <p class="mt-2 text-gray-500 ">
                    Come say hello at our office HQ.
                  </p>
                  <p class="mt-2 text-gray-500 ">Bole Addis Ababa Ethiopia</p>
                </div>

                <div class="flex flex-col items-center justify-center text-center">
                  <span class="p-3 text-gray-500 rounded-full bg-yellow-100/80 ">
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

                  <h2 class="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                  <p class="mt-2 text-gray-500 ">Mon-sunday 24/7.</p>
                  <p class="mt-2 text-gray-500 ">+251 911 24 23 83</p>
                </div>
              </div>
            </div>
          </section>

          <div className=" md:mx-32 ">
            <div class="py-6 lg:flex    md:py-0 lg:px-20">
              <div class="w-full  px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50 ">
                <h1 class="text-lg font-medium text-gray-700">
                  Send your inquiry
                </h1>
                {this.state.sent && (
                  <div className="bg-green-50 py-3 px-4 rounded text-green-600 ">
                    Your messsage has sent successfully
                  </div>
                )}
                <form class="mt-6" onSubmit={this.formSubmit}>
                  <div class="flex-1">
                    <label class="block mb-2 text-sm text-gray-600 ">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="your name"
                      value={this.state.name}
                      onChange={this.handleName}
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-yellow-400  focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-gray-600 ">
                      Email address
                    </label>
                    <input
                      requiyellow
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleEmail}
                      placeholder="yourmail@mail.com"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-yellow-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-gray-600 ">
                      Phone Address
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder="+XXXXXXXXXXXX"
                      value={this.state.phone}
                      onChange={this.handlePhone}
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-gray-600 ">
                      Product Type
                    </label>

                    <select
                      required
                      name="productType"
                      id="cars"
                      placeholder="product type"
                      value={this.state.productType}
                      onChange={this.handleProductType}
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    <label class="block mb-2 text-sm text-gray-600 ">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={this.state.message}
                      onChange={this.handleMessage}
                      class="block w-full h- px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32   focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
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
          {/* <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Successful Sent.
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition> */}
        </div>
        <Footer />
      </>
    );
  }
}
export default Contact2;
