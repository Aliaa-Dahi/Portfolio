export default function Hero() {
  return (
    <section id="home" className="flex min-h-[80vh] items-center px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 font-medium tracking-widest text-cyan-400 uppercase">
          Hello, I'm a developer
        </p>

        <h1 className="max-w-4xl text-5xl leading-tight font-bold text-white sm:text-7xl">
          I build modern web experiences.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I create responsive, user-friendly applications using modern web
          technologies and thoughtful design.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View my projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
