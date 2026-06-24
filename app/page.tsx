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
    <main className="min-h-screen p-3">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <img
            src="./logo.png"
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />

          <select className="glass rounded-xl px-3 py-2 text-sm">
            <option>کوردی</option>
            <option>العربية</option>
            <option>English</option>
          </select>
        </div>

        <div className="text-center mb-8">
          <img
            src="./logo.png"
            alt="logo"
            className="mx-auto w-24 md:w-48 mb-3"
          />

          <h1 className="text-3xl md:text-7xl font-extrabold text-cyan-400">
            AHMAD
          </h1>

          <h2 className="text-3xl md:text-7xl font-extrabold text-purple-400">
            HAJI SHERZAD
          </h2>

          <p className="tracking-[6px] md:tracking-[12px] text-sm md:text-xl text-gray-300 mt-3">
            EXCHANGE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

          <div className="glass neon-blue rounded-3xl p-4 text-center">
            <div className="text-4xl">🕒</div>
            <div className="text-2xl md:text-4xl font-bold mt-2">
              {time}
            </div>
          </div>

          <div className="glass neon-purple rounded-3xl p-4 text-center">
            <div className="text-4xl">📅</div>
            <div className="text-lg md:text-3xl font-bold mt-2">
              {date}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="glass neon-green rounded-3xl p-4">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
              🇺🇸 USD
            </h3>

            <div className="bg-green-950 rounded-2xl p-3 mb-3">
              <p>BUY</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-3">
              <p>SELL</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

          <div className="glass neon-blue rounded-3xl p-4">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
              🇪🇺 EUR
            </h3>

            <div className="bg-green-950 rounded-2xl p-3 mb-3">
              <p>BUY</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-3">
              <p>SELL</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

          <div className="glass neon-purple rounded-3xl p-4">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-4">
              🇬🇧 GBP
            </h3>

            <div className="bg-green-950 rounded-2xl p-3 mb-3">
              <p>BUY</p>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="bg-red-950 rounded-2xl p-3">
              <p>SELL</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <a
            href="tel:07501003000"
            className="glass neon-blue rounded-3xl p-4 text-center font-bold"
          >
            📞 CALL
            <br />
            0750 100 3000
          </a>

          <a
            href="https://wa.me/9647501003000"
            target="_blank"
            className="glass neon-green rounded-3xl p-4 text-center font-bold"
          >
            🟢 WHATSAPP
            <br />
            0750 100 3000
          </a>

          <a
            href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6"
            target="_blank"
            className="glass neon-purple rounded-3xl p-4 text-center font-bold"
          >
            📍 MAP
          </a>

        </div>

        <div className="glass rounded-3xl p-5 text-center mb-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            ADDRESS
          </h3>

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