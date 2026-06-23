"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [usdBuy, setUsdBuy] = useState("156500");
  const [usdSell, setUsdSell] = useState("158500");

  const [eurBuy, setEurBuy] = useState("180000");
  const [eurSell, setEurSell] = useState("182000");

  const [gbpBuy, setGbpBuy] = useState("210000");
  const [gbpSell, setGbpSell] = useState("212000");

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

    setUsdBuy(localStorage.getItem("usdBuy") || "156500");
    setUsdSell(localStorage.getItem("usdSell") || "158500");

    setEurBuy(localStorage.getItem("eurBuy") || "180000");
    setEurSell(localStorage.getItem("eurSell") || "182000");

    setGbpBuy(localStorage.getItem("gbpBuy") || "210000");
    setGbpSell(localStorage.getItem("gbpSell") || "212000");

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

          <div className="border border-cyan-500 rounded-3xl p-6">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              USD
            </h2>

            <p>BUY: {usdBuy}</p>
            <p>SELL: {usdSell}</p>
          </div>

          <div className="border border-yellow-500 rounded-3xl p-6">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              EUR
            </h2>

            <p>BUY: {eurBuy}</p>
            <p>SELL: {eurSell}</p>
          </div>

          <div className="border border-purple-500 rounded-3xl p-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              GBP
            </h2>

            <p>BUY: {gbpBuy}</p>
            <p>SELL: {gbpSell}</p>
          </div>

        </div>
      </div>
    </main>
  );
}