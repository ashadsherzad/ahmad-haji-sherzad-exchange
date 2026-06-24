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

      setDate(
        now.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      <div
        className="fixed inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514565131-fce0801e5785')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto p-4">

        <div className="flex justify-between items-center mb-10">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="logo"
              className="w-20 h-20"
            />

            <div>
              <h1 className="font-bold text-2xl">
                AHMAD
              </h1>

              <h2 className="font-bold text-2xl text-purple-400">
                HAJI SHERZAD
              </h2>
            </div>

          </div>

          <button className="border border-purple-500 rounded-full px-5 py-2">
            کوردی 🌐
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">

          <div className="border border-cyan-500 rounded-3xl p-6 backdrop-blur-md bg-black/40">

            <p className="text-gray-300 mb-4">
              LOCAL TIME
            </p>

            <h2 className="text-5xl font-bold text-purple-400">
              {time}
            </h2>

            <p className="mt-4 text-gray-400">
              Kurdistan Time (GMT +3)
            </p>

          </div><div className="text-center">

            <img
              src="/logo.png"
              alt="logo"
              className="w-48 md:w-64 mx-auto mb-6"
            />

            <h1 className="text-5xl md:text-8xl font-extrabold text-cyan-400">
              AHMAD
            </h1>

            <h1 className="text-5xl md:text-8xl font-extrabold text-purple-400">
              HAJI SHERZAD
            </h1>

            <p className="tracking-[10px] text-gray-300 mt-4 text-xl">
              EXCHANGE
            </p>

          </div>

          <div className="border border-purple-500 rounded-3xl p-6 backdrop-blur-md bg-black/40">

            <p className="text-gray-300 mb-4">
              TODAY DATE
            </p>

            <h2 className="text-4xl font-bold text-cyan-400">
              {date}
            </h2>

            <p className="mt-4 text-gray-400">
              Kurdistan Region
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="border border-green-500 rounded-3xl p-6 bg-black/40 backdrop-blur-md">

            <h3 className="text-4xl font-bold text-center mb-6">
              🇺🇸 USD
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-4">
              <p className="text-green-400">BUY</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p className="text-red-400">SELL</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

          </div>

          <div className="border border-cyan-500 rounded-3xl p-6 bg-black/40 backdrop-blur-md">

            <h3 className="text-4xl font-bold text-center mb-6">
              🇪🇺 EUR
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-4">
              <p className="text-green-400">BUY</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p className="text-red-400">SELL</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

          </div>

          <div className="border border-purple-500 rounded-3xl p-6 bg-black/40 backdrop-blur-md">

            <h3 className="text-4xl font-bold text-center mb-6">
              🇬🇧 GBP
            </h3>

            <div className="bg-green-950 rounded-2xl p-4 mb-4">
              <p className="text-green-400">BUY</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

            <div className="bg-red-950 rounded-2xl p-4">
              <p className="text-red-400">SELL</p>
              <h4 className="text-3xl font-bold">0</h4>
            </div>

          </div>

        </div><div className="grid md:grid-cols-3 gap-6 mb-12">

          <a
            href="tel:07501003000"
            className="border border-cyan-500 rounded-3xl p-6 text-center bg-black/40 backdrop-blur-md hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">📞</div>
            <h3 className="text-2xl font-bold">
              CALL NOW
            </h3>
            <p className="mt-2">
              0750 100 3000
            </p>
          </a>

          <a
            href="https://wa.me/9647501003000"
            target="_blank"
            className="border border-green-500 rounded-3xl p-6 text-center bg-black/40 backdrop-blur-md hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">🟢</div>
            <h3 className="text-2xl font-bold">
              WHATSAPP
            </h3>
            <p className="mt-2">
              0750 100 3000
            </p>
          </a>

          <a
            href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6"
            target="_blank"
            className="border border-purple-500 rounded-3xl p-6 text-center bg-black/40 backdrop-blur-md hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">📍</div>
            <h3 className="text-2xl font-bold">
              OPEN MAP
            </h3>
            <p className="mt-2">
              Location
            </p>
          </a>

        </div>

        <div className="border border-cyan-500 rounded-3xl p-8 bg-black/40 backdrop-blur-md mb-10 text-center">

          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            ADDRESS
          </h2>

          <p className="text-xl leading-10">
            شەقامی ١٢٠ مەتری
            <br />
            خوار شوقەکانی جیهان ستی
            <br />
            ناو بەنزین خانەی حاجی شێرزاد
          </p>

        </div>

        <footer className="border-t border-cyan-500 pt-8 text-center">

          <img
            src="/logo.png"
            alt="logo"
            className="w-24 mx-auto mb-4"
          />

          <h3 className="text-2xl font-bold mb-2">
            AHMAD HAJI SHERZAD EXCHANGE
          </h3>

          <p className="text-gray-400 mb-4">
            Currency Exchange Services
          </p>

          <p className="text-gray-500">
            © 2025 All Rights Reserved
          </p>

        </footer>

      </div>
    </main>
  );
}