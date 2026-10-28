import type { Admin } from "@/lib/admin";

type HeroProps = {
  profile: Admin;
};

export default function Hero({ profile }: HeroProps) {
  console.log(profile);
  return (
    <section id="home" className="flex min-h-[80vh] items-center px-6 py-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Profile information */}
        <div>
          <p className="mb-5 font-medium uppercase tracking-widest text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            {profile.title}
          </h2>

          <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-8 text-slate-400">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View my projects
            </a>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View resume
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-5">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>
            )}

            {profile.linkedIn && (
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Profile image */}
        {profile.profileImage && (
          <div className="mx-auto w-full max-w-sm">
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}`}
              className="aspect-square w-full rounded-full border border-white/10 object-cover shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
