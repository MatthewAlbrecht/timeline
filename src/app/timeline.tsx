"use client";

import React, { useState } from "react";
import { type TimelineDay, type EnrichedEvent, type RawEvent } from "~/types";
import TimelineGrid from "./timeline-grid";
import {
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/outline";
import dayjs, { type Dayjs } from "dayjs";

type Props = {
  events: RawEvent[];
};

export default function Timeline({ events }: Props) {
  const [zoomLevel, setZoomLevel] = useState(2);

  const enrichedEvents = enrichTimelineEvents(events).sort(startDateComparison);
  const timelineDays = createEventList(enrichedEvents);

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
      <TimelineGrid days={timelineDays} zoomLevel={zoomLevel} />
    </div>
  );
}

function enrichTimelineEvents(events: RawEvent[]) {
  return events.map((event) => {
    const startDate = dayjs(event.start);
    const endDate = dayjs(event.end);
    return {
      ...event,
      startDate,
      endDate,
      daySpan: endDate.diff(startDate, "day") + 1,
    };
  });
}

function createEventList(events: EnrichedEvent[]): TimelineDay[] {
  const { earliestDate, latestDate } = getEarliestAndLatestDate(events);

  if (!earliestDate || !latestDate) {
    return [];
  }

  const eventMap = createEventMap(earliestDate, latestDate);

  events.forEach((event) => {
    // push event to all days that it spans

    let currentDate = event.startDate;
    let column = 0;
    while (currentDate.isBefore(event.endDate.add(1, "day"))) {
      const mapValue = eventMap[currentDate.format("YYYY-MM-DD")];
      const isStart = currentDate.isSame(event.startDate);
      if (mapValue) {
        if (isStart) {
          // find the first empty array element and if there isn't one, push
          // a new one
          let idx = 0;
          while (mapValue.events[idx]) {
            idx++;
          }
          column = idx;
          mapValue.events[idx] = {
            ...event,
            isStart,
          };
        } else {
          mapValue.events[column] = {
            ...event,
            isStart,
          };
        }
      }
      currentDate = currentDate.add(1, "day");
    }
  });

  return Object.values(eventMap);
}

function createEventMap(earliestDate: Dayjs, latestDate: Dayjs): EventMap {
  const eventMap: EventMap = {};
  let currentDate = earliestDate;
  while (currentDate.isBefore(latestDate)) {
    eventMap[currentDate.format("YYYY-MM-DD")] = {
      date: currentDate,
      events: [],
    };
    currentDate = currentDate.add(1, "day");
  }
  return eventMap;
}

function getEarliestAndLatestDate(events: EnrichedEvent[]) {
  if (!events[0]) {
    return { earliestDate: undefined, latestDate: undefined };
  }

  // find latest end date
  let latestEndDate = events[0].endDate;
  events.forEach((event) => {
    if (event.endDate.isAfter(latestEndDate)) {
      latestEndDate = event.endDate;
    }
  });

  return { earliestDate: events[0].startDate, latestDate: latestEndDate };
}

function startDateComparison(a: EnrichedEvent, b: EnrichedEvent) {
  return a.startDate.isBefore(b.startDate) ? -1 : 1;
}

type EventMap = Record<
  string,
  {
    date: Dayjs;
    events: EnrichedEvent[];
  }
>;
