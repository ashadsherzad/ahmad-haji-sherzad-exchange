"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
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

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-6 items-center mb-10">

          <div className="border border-cyan-400 rounded-3xl p-6 text-center">
            <div className="text-5xl">🕒</div>
            <div className="text-4xl font-bold mt-3">{time}</div>
            <div className="text-cyan-400 mt-2">TIME</div>
          </div>

          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={160}
              className="mx-auto"
            />

            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 text-cyan-400">
              AHMAD HAJI SHERZAD
            </h1>

            <p className="tracking-[10px] text-gray-300 mt-3 text-xl">
              EXCHANGE
            </p>
          </div>

          <div className="border border-fuchsia-500 rounded-3xl p-6 text-center">
            <div className="text-5xl">📅</div>
            <div className="text-4xl font-bold mt-3">{date}</div>
            <div className="text-fuchsia-400 mt-2">DATE</div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-green-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              💵 USD
            </h2>

            <p className="text-xl">BUY: 156500</p>
            <p className="text-xl">SELL: 158500</p>
          </div>

          <div className="border border-yellow-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              💶 EUR
            </h2>

            <p className="text-xl">BUY: 180000</p>
            <p className="text-xl">SELL: 182000</p>
          </div>

          <div className="border border-purple-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              💷 GBP
            </h2>

            <p className="text-xl">BUY: 210000</p>
            <p className="text-xl">SELL: 212000</p>
          </div>

        </div>

        <footer className="mt-16 border-t border-cyan-500 pt-8 text-center">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            CONTACT US
          </h3>

          <p className="text-lg mb-2">
            📞 0750 100 3000
          </p>

          <p className="text-lg mb-2">
            🟢 WhatsApp: 07501003000
          </p>

          <p className="text-lg mb-6">
            📍 شەقامی ١٢٠ مەتری ناو بەنزین خانەی حاجی شێرزاد ١
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <a
              href="tel:07501003000"
              className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"
            >
              📞 CALL NOW
            </a>

            <a
              href="https://wa.me/9647501003000"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold"
            >
              🟢 WHATSAPP
            </a>

            <a
              href="https://maps.app.goo.gl/xkP9pux7bMExpHeq6?g_st=ic"
              target="_blank"
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
            >
              📍 OPEN MAP
            </a>

          </div>

        </footer>

      </div>
    </main>
  );
}