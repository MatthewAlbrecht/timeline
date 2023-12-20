import React from "react";
import { type TimelineEvent } from "~/types";
import { clsx } from "clsx";
type Props = {
  events: TimelineEvent[];
  zoomLevel: number;
};

export default function TimelinGrid({ events, zoomLevel }: Props) {
  const rowHeightClass = getRowHeightClass(zoomLevel);
  return (
    <div className="grid-cols-timeline grid gap-x-2">
      {events.map((event) => (
        <>
          <div
            className={clsx(
              "relative w-full border-e border-gray-700",
              rowHeightClass,
            )}
          >
            <span className="mb-3 block text-sm font-normal leading-none text-gray-400">
              {event.start}
            </span>
            <div className="absolute -end-1.5 top-0 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          </div>
          <div></div>
          <div className="w-full bg-white">lane 1</div>
          <div className="w-full bg-white">lane 2</div>
          <div className="w-full bg-white">lane 3</div>
        </>
      ))}
    </div>
  );
}

function getRowHeightClass(zoomLevel: number) {
  switch (zoomLevel) {
    case 1:
      return "h-[100px]";
    case 2:
      return "h-[150px]";
    case 3:
      return "h-[200px]";
    case 4:
      return "h-[250px]";
    case 5:
      return "h-[300px]";
    default:
      return "h-[100px]";
  }
}
