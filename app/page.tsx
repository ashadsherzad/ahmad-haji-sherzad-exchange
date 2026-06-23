"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
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

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-6 items-center mb-10">

          <div className="border border-cyan-500 rounded-3xl p-6 text-center">
            <div className="text-5xl">🕒</div>
            <div className="text-3xl font-bold mt-3">{time}</div>
            <div className="text-cyan-400 mt-2">TIME</div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
              AHMAD HAJI SHERZAD
            </h1>

            <p className="tracking-[10px] text-gray-300 mt-3 text-xl">
              EXCHANGE
            </p>
          </div>

          <div className="border border-fuchsia-500 rounded-3xl p-6 text-center">
            <div className="text-5xl">📅</div>
            <div className="text-3xl font-bold mt-3">{date}</div>
            <div className="text-fuchsia-400 mt-2">DATE</div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-green-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              USD
            </h2>

            <p className="text-xl">BUY: 156500</p>
            <p className="text-xl">SELL: 158500</p>
          </div>

          <div className="border border-yellow-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              EUR
            </h2>

            <p className="text-xl">BUY: 180000</p>
            <p className="text-xl">SELL: 182000</p>
          </div>

          <div className="border border-purple-500 rounded-3xl p-6 text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              GBP
            </h2>

            <p className="text-xl">BUY: 210000</p>
            <p className="text-xl">SELL: 212000</p>
          </div>

        </div>

      </div>
    </main>
  );
}