"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

// interface FeedbackFormProps {}

const FeedbackForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);

      const urlSearchParams = new URLSearchParams();
      formData.forEach((value, key) => {
        urlSearchParams.append(key, value as string);
      });

      const res = await fetch("./form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlSearchParams.toString(),
      });

      if (res.status === 200) {
        setStatus("ok");
        setEmail("");
        setMsg("");
        setName("");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
        setEmail("");
        setMsg("");
        setName("");
      }
    } catch (e: any) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <div className="">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered"
        />
        <input
          name="message"
          type="text"
          placeholder="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          className="bg-slate-900 w-full rounded-lg px-3 py-2 input input-bordered"
        />
        <button
          type="submit"
          disabled={status === "pending"}
          className="bg-purple hover:bg-violet-800 px-5 py-1 rounded-lg text-gray-300 flex justify-center items-center gap-2 "
        >
          Send
          <FaLocationArrow />
        </button>
        <div className="flex justify-center w-full ">
          {status === "ok" && (
            <p className="alert alert-success text-violet-500 ">
              Submitted! thanks for connecting <span>🤝</span>
            </p>
          )}
          {status === "error" && (
            <p className="alert alert-error text-violet-500 ">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
