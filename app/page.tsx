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
    <main className="min-h-screen bg-black text-white p-3">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <img
            src="/logo.png"
            alt="logo"
            className="w-14 h-14 md:w-20 md:h-20"
          />

          <button className="border border-purple-500 rounded-full px-4 py-2">
            کوردی
          </button>
        </div>

        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="logo"
            className="w-28 md:w-56 mx-auto mb-3"
          />

          <h1 className="text-3xl md:text-7xl font-bold text-cyan-400">
            AHMAD
          </h1>

          <h1 className="text-3xl md:text-7xl font-bold text-purple-400">
            HAJI SHERZAD
          </h1>

          <p className="tracking-[6px] md:tracking-[12px] text-gray-300">
            EXCHANGE
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="border border-cyan-500 rounded-3xl p-4 text-center">
            <div className="text-3xl">🕒</div>
            <h2 className="text-lg md:text-4xl font-bold text-cyan-400">
              {time}
            </h2>
          </div>

          <div className="border border-purple-500 rounded-3xl p-4 text-center">
            <div className="text-3xl">📅</div>
            <h2 className="text-lg md:text-4xl font-bold text-purple-400">
              {date}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">

          <div className="border border-green-500 rounded-3xl p-3">
            <h3 className="text-center text-lg md:text-3xl font-bold">
              🇺🇸 USD
            </h3>

            <div className="bg-green-950 p-2 rounded-xl mt-2">
              BUY
              <div className="font-bold">0</div>
            </div>

            <div className="bg-red-950 p-2 rounded-xl mt-2">
              SELL
              <div className="font-bold">0</div>
            </div>
          </div>

          <div className="border border-cyan-500 rounded-3xl p-3">
            <h3 className="text-center text-lg md:text-3xl font-bold">
              🇪🇺 EUR
            </h3>

            <div className="bg-green-950 p-2 rounded-xl mt-2">
              BUY
              <div className="font-bold">0</div>
            </div>

            <div className="bg-red-950 p-2 rounded-xl mt-2">
              SELL
              <div className="font-bold">0</div>
            </div>
          </div>

          <div className="border border-purple-500 rounded-3xl p-3">
            <h3 className="text-center text-lg md:text-3xl font-bold">
              🇬🇧 GBP
            </h3>

            <div className="bg-green-950 p-2 rounded-xl mt-2">
              BUY
              <div className="font-bold">0</div>
            </div>

            <div className="bg-red-950 p-2 rounded-xl mt-2">
              SELL
              <div className="font-bold">0</div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">

          <a
            href="tel:07501003000"
            className="border border-cyan-500 rounded-2xl p-3 text-center"
          >
            📞
            <br />
            CALL
          </a>

          <a
            href="https://wa.me/9647501003000"
            className="border border-green-500 rounded-2xl p-3 text-center"
          >
            🟢
            <br />
            WHATSAPP
          </a>

          <a
            href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6"
            className="border border-purple-500 rounded-2xl p-3 text-center"
          >
            📍
            <br />
            MAP
          </a>

        </div>

        <div className="border border-cyan-500 rounded-3xl p-5 text-center mb-6">
          <h2 className="text-xl font-bold mb-3">
            ADDRESS
          </h2>

          <p>
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
}