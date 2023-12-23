"use client";

import React, { useState } from "react";
import { type RawEvent } from "~/types";
import TimelineGrid from "./timeline-grid";
import {
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/outline";
import {
  createEventList,
  enrichTimelineEvents,
  startDateComparison,
} from "./timeline.helpers";

type Props = {
  events: RawEvent[];
};

export default function Timeline({ events }: Props) {
  const [zoomLevel, setZoomLevel] = useState(2);

  const enrichedEvents = enrichTimelineEvents(events).sort(startDateComparison);
  const timelineDays = createEventList(enrichedEvents);

  return (
    <div className="px-12 text-white">
      <Controls zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
      <TimelineGrid days={timelineDays} zoomLevel={zoomLevel} />
    </div>
  );
}

function Controls({
  zoomLevel,
  setZoomLevel,
}: {
  zoomLevel: number;
  setZoomLevel: (level: number) => void;
}) {
  return (
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
  );
}
