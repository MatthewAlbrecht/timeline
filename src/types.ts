import { type inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "./server/api/root";
import { type Dayjs } from "dayjs";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType[number];

type RouterOutput = inferRouterOutputs<AppRouter>;
export type getAllEventsOutput = RouterOutput["event"]["getAll"];
export type RawEvent = ArrayElement<getAllEventsOutput>;

export type EnrichedEvent = RawEvent & {
  daySpan: number;
  startDate: Dayjs;
  endDate: Dayjs;
  isStart?: boolean;
};

export type TimelineDay = {
  date: Dayjs;
  events: EnrichedEvent[];
};
