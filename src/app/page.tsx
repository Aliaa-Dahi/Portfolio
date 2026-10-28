import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { getAdmin } from "@/lib/admin";

export default async function Home() {
  const profile = await getAdmin();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero profile={profile} />
    </main>
  );
}
