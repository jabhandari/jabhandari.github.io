export default function Hero() {
    return (
        <section id="top" className="relative flex h-[68vh] min-h-[460px] w-full items-center md:h-[74vh]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-950/75 to-slate-950/90" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                        Juhi Bhandari
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        I build full-stack applications — most recently Franco, a French-learning
                        app for TCF Canada with AI-powered reading and speaking practice.
                        I enjoy modern web technologies, clean architecture, and backend
                        systems that scale.
                    </p>
                </div>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <a
                        href="https://72013728.franco-dsh.pages.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        See Franco
                    </a>
                    <a
                        href="https://www.linkedin.com/in/juhi-bhandari-4baa61261/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/jabhandari"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:juhibhandari774@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        Email
                    </a>
                    <a
                        href="/Juhi Bhandari.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-300/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
