"use client";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { Inter } from "next/font/google";
export const Header = () => {
  return (
    <div className="flex justify-center items-center ">
      <header className="w-[1440px] font flex justify-center items-center h-17 bg-[#18181B] ">
        {/* Logo */}
        <Link href="/" className="h-[38px] w-[46px] flex">
          <img src="/foodlogo.png" className="h-full w-full object-contain" />
          <div>
            <p className="text-white ">
              Nom<span className="text-red-400">Nom</span>
            </p>
            <p className="text-white w-26">Swift delivery</p>
          </div>
        </Link>

        {/* Center */}
      </header>{" "}
    </div>
  );
};
