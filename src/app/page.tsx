"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const onSubmit = async (e: FormDataEvent) => {
    e.preventDefault();
    const body = { message };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="Text to send"
            placeholder="Message to send"
            required
          />
          <button
            type="submit"
            className="w-full rounded p-2 bg-blue-600 text-white"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
