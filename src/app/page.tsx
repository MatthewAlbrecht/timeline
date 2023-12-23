import { api } from "~/trpc/server";
import Timeline from "./timeline";

export default async function Home() {
  const events = await api.event.getAll.query();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#090D15] py-10 text-white">
      <Timeline events={events} />
    </main>
  );
}
