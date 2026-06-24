"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setDate(now.toLocaleDateString("en-GB"));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-4">

        <div className="flex justify-between items-center mb-8">
          <img
            src="/logo.png"
            alt="logo"
            className="w-16 h-16 md:w-24 md:h-24"
          />

          <button className="border border-purple-500 rounded-full px-4 py-2">
            کوردی 🌐
          </button>
        </div>

        <div className="text-center mb-10">
          <img
            src="/logo.png"
            alt="logo"
            className="w-40 md:w-64 mx-auto mb-4"
          />

          <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
            AHMAD
          </h1>

          <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400">
            HAJI SHERZAD
          </h1>

          <p className="tracking-[10px] text-gray-300 mt-3">
            EXCHANGE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          <div className="border border-cyan-500 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-2">🕒</div>
            <h2 className="text-4xl font-bold text-cyan-400">
              {time}
            </h2>
          </div>

          <div className="border border-purple-500 rounded-3xl p-6 text-center">
            <div className="text-5xl mb-2">📅</div>
            <h2 className="text-3xl font-bold text-purple-400">
              {date}
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <div className="border border-green-500 rounded-3xl p-5">
            <h3 className="text-3xl font-bold text-center mb-4">
              🇺🇸 USD
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-3">
              <p>BUY</p>
              <p className="text-3xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p>SELL</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>

          <div className="border border-cyan-500 rounded-3xl p-5">
            <h3 className="text-3xl font-bold text-center mb-4">
              🇪🇺 EUR
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-3">
              <p>BUY</p>
              <p className="text-3xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p>SELL</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>

          <div className="border border-purple-500 rounded-3xl p-5">
            <h3 className="text-3xl font-bold text-center mb-4">
              🇬🇧 GBP
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-3">
              <p>BUY</p>
              <p className="text-3xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p>SELL</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <a
            href="tel:07501003000"
            className="border border-cyan-500 rounded-3xl p-5 text-center"
          >
            📞
            <br />
            0750 100 3000
          </a>

          <a
            href="https://wa.me/9647501003000"
            className="border border-green-500 rounded-3xl p-5 text-center"
          >
            🟢
            <br />
            0750 100 3000
          </a>

          <a
            href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6"
            className="border border-purple-500 rounded-3xl p-5 text-center"
          >
            📍
            <br />
            MAP
          </a>

        </div>

        <div className="border border-cyan-500 rounded-3xl p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ADDRESS
          </h2>

          <p className="text-xl">
            شەقامی ١٢٠ مەتری
            <br />
            خوار شوقەکانی جیهان ستی
            <br />
            ناو بەنزین خانەی حاجی شێرزاد
          </p>
        </div>

      </div>
    </main>
  );