import React from "react";
import { type EnrichedEvent, type TimelineDay } from "~/types";
import { clsx } from "clsx";
import { compareEventLength } from "./timeline.helpers";
type Props = {
  days: TimelineDay[];
  zoomLevel: number;
};

export default function TimelinGrid({ days, zoomLevel }: Props) {
  const totalColumnsNeeded = days.reduce(compareEventLength, 0);
  const rowHeightClass = getRowHeightClass(zoomLevel);
  const gridColumnsClass = getGridColumnsClass(totalColumnsNeeded);
  return (
    <div className={`grid ${gridColumnsClass}`}>
      {days.map((day, idx) => (
        <TimelineGridRow
          day={day}
          key={day.date.valueOf()}
          idx={idx}
          rowHeightClass={rowHeightClass}
          totalColumnsNeeded={totalColumnsNeeded}
        />
      ))}
    </div>
  );
}

function TimelineGridRow({
  day: { date, events },
  rowHeightClass,
  totalColumnsNeeded,
}: {
  day: TimelineDay;
  idx: number;
  rowHeightClass: string;
  totalColumnsNeeded: number;
}) {
  return (
    <>
      <div
        className={clsx(
          "relative w-full border-e border-gray-700 transition-height",
          rowHeightClass,
        )}
      >
        <span className="mb-3 block text-sm font-normal italic leading-none text-gray-400">
          {date.format("MMM D, YYYY")}
        </span>
        <div className="absolute -end-1.5 top-0 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      </div>
      <div></div>

      {Array.from({ length: totalColumnsNeeded }, (_, index) => (
        <TimelineGridItem key={index} event={events[index]} />
      ))}
    </>
  );
}

function TimelineGridItem({ event }: { event: EnrichedEvent | undefined }) {
  if (event) {
    return Boolean(event.isStart) ? (
      <div
        className={clsx(
          "w-full px-3 pb-1 pt-4",
          rowSpanClasses[event.daySpan - 1],
        )}
      >
        <div className="h-full w-full rounded bg-gray-100 px-2 pt-4">
          <h2 className="text-center font-semibold leading-none text-gray-900">
            {event.name}
          </h2>
        </div>
      </div>
    ) : (
      <></>
    );
  }
  return <div className={`w-full`} />;
}

function getGridColumnsClass(totalColumnsNeeded: number) {
  switch (totalColumnsNeeded) {
    case 3: {
      return "grid-cols-timeline3";
    }
    case 4: {
      return "grid-cols-timeline4";
    }
    case 5: {
      return "grid-cols-timeline5";
    }
    case 6: {
      return "grid-cols-timeline6";
    }
    case 7: {
      return "grid-cols-timeline7";
    }
    default: {
      return "grid-cols-timeline7";
    }
  }
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

// this is a hack. Tailwind isn't a runtime solution, so all classes
// that may exist need to be written as strings in the codebase. Not ideal.
const rowSpanClasses = [
  "row-span-1",
  "row-span-2",
  "row-span-3",
  "row-span-4",
  "row-span-5",
  "row-span-6",
  "row-span-7",
  "row-span-8",
  "row-span-9",
  "row-span-10",
  "row-span-11",
  "row-span-12",
  "row-span-13",
  "row-span-14",
  "row-span-15",
  "row-span-16",
  "row-span-17",
  "row-span-18",
  "row-span-19",
  "row-span-20",
  "row-span-21",
  "row-span-22",
  "row-span-23",
  "row-span-24",
  "row-span-25",
  "row-span-26",
  "row-span-27",
  "row-span-28",
  "row-span-29",
  "row-span-30",
  "row-span-31",
  "row-span-32",
  "row-span-33",
  "row-span-34",
  "row-span-35",
  "row-span-36",
  "row-span-37",
  "row-span-38",
  "row-span-39",
  "row-span-40",
  "row-span-41",
  "row-span-42",
  "row-span-43",
  "row-span-44",
  "row-span-45",
  "row-span-46",
  "row-span-47",
  "row-span-48",
  "row-span-49",
  "row-span-50",
  "row-span-51",
  "row-span-52",
  "row-span-53",
  "row-span-54",
  "row-span-55",
  "row-span-56",
  "row-span-57",
  "row-span-58",
  "row-span-59",
  "row-span-60",
  "row-span-61",
  "row-span-62",
  "row-span-63",
  "row-span-64",
  "row-span-65",
  "row-span-66",
  "row-span-67",
  "row-span-68",
  "row-span-69",
  "row-span-70",
  "row-span-71",
  "row-span-72",
  "row-span-73",
  "row-span-74",
  "row-span-75",
  "row-span-76",
  "row-span-77",
  "row-span-78",
  "row-span-79",
  "row-span-80",
  "row-span-81",
  "row-span-82",
  "row-span-83",
  "row-span-84",
  "row-span-85",
  "row-span-86",
  "row-span-87",
  "row-span-88",
  "row-span-89",
  "row-span-90",
  "row-span-91",
  "row-span-92",
  "row-span-93",
  "row-span-94",
  "row-span-95",
  "row-span-96",
  "row-span-97",
  "row-span-98",
  "row-span-99",
  "row-span-100",
];
