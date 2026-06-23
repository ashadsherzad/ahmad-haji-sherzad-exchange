"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 mb-4">
        AHMAD HAJI SHERZAD
      </h1>

      <p className="text-2xl tracking-[8px] text-gray-300 mb-10">
        EXCHANGE
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl px-6">

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

    </main>
  );
}