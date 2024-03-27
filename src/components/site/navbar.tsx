"use client";
import React from "react";
import { Button } from "../ui/button";
import XTwitterIcon from "../icons/x-icon";
import TelegramIcon from "../icons/telegram-icon";

const Navbar = () => {
  return (
    <nav
      className="py-6 px-4 lg:px-20 flex items-center justify-between sticky top-0 z-50
      bg-black
  backdrop-blur-3xl inset-0"
    >
      <section className="flex items-center justify-center gap-5">
        <p className="text-xl font-bold text-white">PANDA PENNY</p>
      </section>

      <div className="flex gap-2">
        <Button
          className="bg-white ease-in-out hover:shadow-2xl p-3 rounded-lg hover:bg-neutral-300 "
          onClick={() => {
            window.open("https://twitter.com/pennypandasol");
          }}
        >
          <XTwitterIcon className="w-5 h-5 " />
        </Button>
        <Button
          className="bg-white ease-in-out hover:shadow-2xl p-3 rounded-lg hover:bg-neutral-300 "
          onClick={() => {}}
        >
          <TelegramIcon className="w-5 h-5 " />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
