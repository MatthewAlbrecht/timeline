import dayjs, { type Dayjs } from "dayjs";
import { type RawEvent, type EnrichedEvent, type TimelineDay } from "~/types";

export function enrichTimelineEvents(events: RawEvent[]) {
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

export function createEventList(events: EnrichedEvent[]): TimelineDay[] {
  const { earliestDate, latestDate } = getEarliestAndLatestDate(events);

  if (!earliestDate || !latestDate) {
    return [];
  }

  const eventMap = createEventMap(earliestDate, latestDate);

  // push each event to all days that it spans
  events.forEach((event) => {
    let currentDate = event.startDate;
    let firstEmptyIndex = 0;
    while (currentDate.isBefore(event.endDate.add(1, "day"))) {
      const currentMapValue = eventMap[currentDate.format("YYYY-MM-DD")];
      const isStart = currentDate.isSame(event.startDate);
      if (currentMapValue) {
        if (isStart) {
          firstEmptyIndex = findFirstEmptyIndex(currentMapValue.events);
        }
        currentMapValue.events[firstEmptyIndex] = {
          ...event,
          isStart,
        };
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

export function startDateComparison(a: EnrichedEvent, b: EnrichedEvent) {
  return a.startDate.isBefore(b.startDate) ? -1 : 1;
}

function findFirstEmptyIndex(arr: unknown[]) {
  let idx = 0;
  while (arr[idx]) {
    idx++;
  }
  return idx;
}

export function compareEventLength(control: number, day: TimelineDay) {
  return control > day.events.length ? control : day.events.length;
}

type EventMap = Record<
  string,
  {
    date: Dayjs;
    events: EnrichedEvent[];
  }
>;
