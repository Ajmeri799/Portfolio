"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const FeedbackForm = () => {
  const [status, setStatus] = useState<"idle" | "pending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("pending");
    setError(null);

    // Retrieve Web3Forms Key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError("Missing Web3Forms access key!");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("ok");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4  sm:mt-20">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center pb-12">
          <span className="text-green-800">Contact</span> Me
        </h1>
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 bg-black md:bg-transparent border border-green-700 p-6 md:p-10 rounded-3xl shadow-lg shadow-green-900">
            <div className="md:w-8/12 mx-auto text-center">
              <h1 className="text-2xl ">Get in Touch </h1>
              <form
                name="feedback"
                onSubmit={handleFormSubmit}
                className="mt-8 flex flex-col justify-center items-end gap-y-4"
              >
                <input type="hidden" name="form-name" value="feedback" />
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered"
                />
                <textarea
                  rows={2}
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered text-start"
                ></textarea>
                <button
                  type="submit"
                  disabled={status === "pending"}
                  className="bg-green-900 hover:bg-green-600 px-5 py-1 rounded-lg text-gray-300 flex justify-center items-center gap-2"
                >
                  Send
                  <FaLocationArrow />
                </button>
                <div className="flex justify-center w-full">
                  {status === "ok" && (
                    <p className="alert alert-success text-violet-500">
                      Submitted! Thanks for connecting 🤝
                    </p>
                  )}
                  {status === "error" && (
                    <p className="alert alert-error text-violet-500">{error}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
