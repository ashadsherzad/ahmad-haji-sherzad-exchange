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
          second: "2-digit",
        })
      );

      setDate(now.toLocaleDateString("en-GB"));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <img
            src="./logo.png"
            alt="logo"
            className="w-16 h-16 object-contain"
          />

          <select className="glass rounded-xl px-4 py-2">
            <option>کوردی</option>
            <option>العربية</option>
            <option>English</option>
          </select>
        </div>

        <div className="text-center mb-12">
          <img
            src="./logo.png"
            alt="logo"
            className="mx-auto w-40 md:w-56 mb-4"
          />

          <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
            AHMAD
          </h1>

          <h2 className="text-5xl md:text-7xl font-extrabold text-purple-400">
            HAJI SHERZAD
          </h2>

          <p className="tracking-[10px] text-gray-300 mt-4 text-xl">
            EXCHANGE
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="glass neon-blue rounded-3xl p-6 text-center">
            <div className="text-5xl mb-3">🕒</div>
            <div className="text-4xl font-bold">{time}</div>
            <p className="text-cyan-300 mt-2">TIME</p>
          </div>

          <div className="glass neon-purple rounded-3xl p-6 text-center">
            <div className="text-5xl mb-3">📅</div>
            <div className="text-3xl font-bold">{date}</div>
            <p className="text-purple-300 mt-2">DATE</p>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="glass neon-green card-hover rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-center mb-5">
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

          <div className="glass neon-blue card-hover rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-center mb-5">
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

          <div className="glass neon-purple card-hover rounded-3xl p-6">
            <h3 className="text-4xl font-bold text-center mb-5">
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

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <a
            href="tel:07501003000"
            className="glass neon-blue rounded-3xl p-6 text-center font-bold text-xl"
          >
            📞 CALL
            <br />
            0750 100 3000
          </a>

          <a
            href="https://wa.me/9647501003000"
            target="_blank"
            className="glass neon-green rounded-3xl p-6 text-center font-bold text-xl"
          >
            🟢 WHATSAPP
            <br />
            0750 100 3000
          </a>

          <a
            href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6"
            target="_blank"
            className="glass neon-purple rounded-3xl p-6 text-center font-bold text-xl"
          >
            📍 MAP
          </a>

        </div>

        <div className="glass rounded-3xl p-8 text-center mb-10">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            ADDRESS
          </h3>

          <p className="text-xl">
            شەقامی ١٢٠ مەتری
            <br />
            خوار شوقەکانی جیهان ستی
            <br />
            ناو بەنزین خانەی حاجی شێرزاد
          </p>
        </div>

        <footer className="text-center py-8 border-t border-cyan-500">
          <p className="text-gray-400">
            © 2025 Ahmad Haji Sherzad Exchange
          </p>
        </footer>

      </div>
    </main>
  );
}