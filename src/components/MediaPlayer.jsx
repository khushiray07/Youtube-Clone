"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function MediaPlayer() {
  return (
    <div className="w-full h-[500px]">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_CWcBWSKItk"
        width="100%"
        height="140%"
        controls={true}
      />
    </div>
  );
}
