import { type inferRouterOutputs } from "@trpc/server";
import { type AppRouter } from "./server/api/root";

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType[number];

type RouterOutput = inferRouterOutputs<AppRouter>;
export type getAllEventsOutput = RouterOutput["event"]["getAll"];
export type TimelineEvent = ArrayElement<getAllEventsOutput>;
