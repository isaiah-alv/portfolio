// src/components/Contact.jsx

import React from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending…");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_EMAILKEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await res.json();

    if (data.success) {
      Swal.fire({ title: "Thank You!", text: "Message Sent", icon: "success" });
      setResult("");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-slate-200 dark:bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <form
        onSubmit={onSubmit}
        className="space-y-6 font-roboto"
      >
        <h2 className="text-2xl font-rubik text-center text-stone-900 dark:text-stone-100">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 text-sm bg-slate-100 dark:bg-slate-700 text-stone-900 dark:text-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-red-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 text-sm bg-slate-100 dark:bg-slate-700 text-stone-900 dark:text-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-red-500"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 text-sm bg-slate-100 dark:bg-slate-700 text-stone-900 dark:text-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-red-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 text-sm bg-slate-100 dark:bg-slate-700 text-stone-900 dark:text-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 dark:focus:ring-red-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 text-sm font-roboto text-black bg-lime-500 dark:bg-red-400 rounded-md shadow hover:opacity-90 transition"
        >
          send message
        </button>
        {result && (
          <p className="text-center text-sm text-black dark:text-white">
            {result}
          </p>
        )}
      </form>
    </div>
  );
}
