"use client";

import React, { useState } from "react";
import { type TimelineEvent } from "~/types";
import TimelineGrid from "./timeline-grid";
import {
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/outline";

type Props = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: Props) {
  const [zoomLevel, setZoomLevel] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="mb-6 flex items-center justify-center space-x-2">
        <button
          onClick={() => setZoomLevel(zoomLevel > 4 ? 5 : zoomLevel + 1)}
          disabled={zoomLevel >= 5}
        >
          <MagnifyingGlassPlusIcon className="h-6 w-6 transition hover:scale-110" />
        </button>
        <button
          onClick={() => setZoomLevel(zoomLevel < 2 ? 1 : zoomLevel - 1)}
          disabled={zoomLevel <= 1}
        >
          <MagnifyingGlassMinusIcon className="h-6 w-6 transition hover:scale-110" />
        </button>
      </div>
      <TimelineGrid events={events} zoomLevel={zoomLevel} />
    </div>
  );
}
