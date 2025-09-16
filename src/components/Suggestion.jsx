"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const videos = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/watch?v=_CWcBWSKItk",
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/watch?v=ThIvYuCFDoQ",
  },
  {
    title: "Video 3",
    url: "https://www.youtube.com/watch?v=ThIvYuCFDoQ",
  },
  {
    title: "Video 4",
    url: "https://www.youtube.com/watch?v=ThIvYuCFDoQ",
  },
];

export default function Suggestion() {
  return (
    <div className="p-2">
      <h2 className="text-lg font-bold mb-2">Suggested Videos</h2>
      <ul className="space-y-4">
        {videos.map((video, index) => (
          <li key={index} className="border-b pb-2">
            <h3 className="text-sm font-semibold mb-1">{video.title}</h3>
            <ReactPlayer
              url={video.url}
              width="100%"
              height="110px"
              controls={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
