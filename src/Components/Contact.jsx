import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0A1526] back flex flex-col items-center">
      <h1>Hi there,</h1>className="font-semibold text-xl"
      <img
        className="w-[60%] my-[1%] mx-[27%] z-10"
        src="../public/Deadpool.png"
        alt=""
      />
      <div className="w-[90vh]  bg-[rgba(63,63,70,.9)] text-zinc-100  p-7 h-[90vh] absolute z-10 rounded-md top-10">
        <h3 className="text-2xl font-semibold underline">Contact Us</h3>
        <form action="" className="mx-2 flex flex-col gap-2 my-3">
          <label className="font-semibold text-xl"  for="name">
            Name:
          </label>
          <input
            className="text-black rounded-md font-semibold p-2"
            type="text"
            placeholder="name"
            name="name"
            id="name"
          />
          <label className="font-semibold text-xl" for="subject">
            Subject:
          </label>
          <input
            className="text-black rounded-md font-semibold p-2"
            type="text"
            placeholder="subject"
            name="subject"
            id="subject"
          />
          <label className="font-semibold text-xl" for="email">
            Email:
          </label>
          <input
            className="text-black rounded-md font-semibold p-2"
            type="email"
            placeholder="email"
            name="email"
            id="email"
          />
          <label className="font-semibold text-xl" for="content">
            Content:
          </label>
          <textarea
            className="text-black  rounded-md font-semibold p-2"
            placeholder="type your msg here..."
            cols="40"
            rows="7"
          ></textarea>
          <button className="bg-[#6556CD] p-2 text-end w-fit rounded-md  my-3">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
