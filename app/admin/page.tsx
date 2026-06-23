"use client";

import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [usdBuy, setUsdBuy] = useState("156500");
  const [usdSell, setUsdSell] = useState("158500");

  const [eurBuy, setEurBuy] = useState("180000");
  const [eurSell, setEurSell] = useState("182000");

  const [gbpBuy, setGbpBuy] = useState("210000");
  const [gbpSell, setGbpSell] = useState("212000");

  const handleLogin = () => {
    if (
      username === "Ahmadhajisherzad" &&
      password === "Ahmad1234@"
    ) {
      setLoggedIn(true);
    } else {
      alert("Wrong Username or Password");
    }
  };

  const saveRates = () => {
    localStorage.setItem("usdBuy", usdBuy);
    localStorage.setItem("usdSell", usdSell);

    localStorage.setItem("eurBuy", eurBuy);
    localStorage.setItem("eurSell", eurSell);

    localStorage.setItem("gbpBuy", gbpBuy);
    localStorage.setItem("gbpSell", gbpSell);

    alert("Rates Saved Successfully");
  };

  if (loggedIn) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          Admin Dashboard
        </h1>

        <div className="max-w-2xl space-y-4">
          <input value={usdBuy} onChange={(e) => setUsdBuy(e.target.value)} />
          <input value={usdSell} onChange={(e) => setUsdSell(e.target.value)} />

          <input value={eurBuy} onChange={(e) => setEurBuy(e.target.value)} />
          <input value={eurSell} onChange={(e) => setEurSell(e.target.value)} />

          <input value={gbpBuy} onChange={(e) => setGbpBuy(e.target.value)} />
          <input value={gbpSell} onChange={(e) => setGbpSell(e.target.value)} />

          <button
            onClick={saveRates}
            className="w-full bg-cyan-500 text-black py-4 rounded-xl font-bold"
          >
            SAVE RATES
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md w-full p-8">
      <div className="flex justify-between items-center mb-8">
  <h1 className="text-5xl font-bold text-cyan-400">
    Admin Dashboard
  </h1>

  <button
    onClick={() => setLoggedIn(false)}
    className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold"
  >
    LOGOUT
  </button>
</div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 text-black py-4 rounded-xl mt-4"
        >
          LOGIN
        </button>
      </div>
    </main>
  );
}