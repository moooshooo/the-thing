import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const bgImage = "/src/assets/movie-banner.webp";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loggar in med:", { email, password });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* kort #161614  */}
      <div
        className="relative z-10 w-full max-w-md space-y-8 rounded-2xl p-8 shadow-2xl backdrop-blur-xl border border-white/10"
        style={{ backgroundColor: "#161614f2" }} // f2  transparent
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Välkommen tillbaka
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Eller{" "}
            <Link
              to="/signup"
              className="font-medium text-gray-200 hover:underline"
            >
              skapa ett nytt konto
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-300"
              >
                E-postadress
              </label>
              <input
                id="email-address"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 focus:border-white/30 focus:ring-2 focus:ring-white/20 focus:outline-hidden sm:text-sm"
                placeholder="you@thething.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Lösenord
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 focus:border-white/30 focus:ring-2 focus:ring-white/20 focus:outline-hidden sm:text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/5 text-gray-500 focus:ring-0"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Kom ihåg mig
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-400 hover:text-white transition-colors"
              >
                Glömt lösenord?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-[#161614] transition-all bg-white hover:bg-gray-200 active:scale-95 shadow-lg"
          >
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
