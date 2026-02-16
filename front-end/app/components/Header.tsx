"use client";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { Inter } from "next/font/google";
export const Header = () => {
  return (
    <div className="flex justify-center items-center ">
      <header className="w-[1440px] font px-[88px] flex justify-between  items-center h-17 bg-[#18181B] ">
        {/* Logo */}
        <div>
          <Link href="/" className="h-[38px] gap-[12px] w-[46px] flex">
            <img src="/foodlogo.png" className="h-full w-full object-contain" />
            <div>
              <p className="text-white font-semibold">
                Nom<span className="text-red-400">Nom</span>
              </p>
              <p className="text-white text-xs w-26">Swift delivery</p>
            </div>
          </Link>
        </div>

        {/* Center */}
        <div className="flex gap-[12.81]">
          <div className="w-[251px] h-[36px] bg-white rounded-full"></div>
          <div className="w-[36px] h-[36px] bg-white rounded-full"></div>
          <div className="w-[36px] h-[36px] bg-[#EF4444] rounded-full"></div>
        </div>
      </header>
    </div>
  );
};
