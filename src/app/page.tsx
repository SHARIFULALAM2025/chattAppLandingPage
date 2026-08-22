import HeroConversation from "@/components/HeroConversation";
import { IoMdArrowForward } from 'react-icons/io'
const STEPS = [
  {
    n: "01",
    title: "Sign in with a number",
    body: "No email, no password to forget. Enter a phone number and a name — new numbers are registered on the spot.",
  },
  {
    n: "02",
    title: "Find someone",
    body: "Search by name or number and start a thread instantly, or pull a few people into a group.",
  },
  {
    n: "03",
    title: "Start talking",
    body: "Messages land the moment they're sent — for both of you, on both ends, no refresh involved.",
  },
];

const FEATURES = [
  {
    label: "Instant delivery",
    body: "Every message travels over a live socket connection. What you send, they see — while it's still true.",
  },
  {
    label: "Group threads",
    body: "Name a group, add who belongs, hand off admin when someone leaves. The thread keeps its own history.",
  },
  {
    label: "Never lose your place",
    body: "The thread follows new messages down — until you scroll up to read something older. Then it waits for you.",
  },
  {
    label: "Honest states",
    body: "Loading looks like loading. Empty says so. Errors explain what happened, not just that something did.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="mx-auto max-w-6xl px-6 sm:px-8 pt-7 flex items-center justify-between">
        <div className="font-display font-extrabold tracking-tight text-lg">
          WIRE<span className="text-signal">.</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a
            href="#how"
            className="hover:text-paper transition-colors focus-ring rounded"
          >
            How it works
          </a>
          <a
            href="#features"
            className="hover:text-paper transition-colors focus-ring rounded"
          >
            Features
          </a>
          <a
            href="https://github.com/SHARIFULALAM2025/chatApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors focus-ring rounded"
          >
            Source
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 pt-16 sm:pt-20 pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-signal mb-5 uppercase">
            Real-time messaging, built for the take-home
          </p>
          <h1 className="font-display font-extrabold text-[2.6rem] sm:text-6xl leading-[1.05] tracking-tight text-paper">
            Say it once.
            <br />
            It arrives <span className="text-signal">once</span>,
            <br />
            immediately.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-md leading-relaxed">
            A 1-to-1 and group chat feature with a phone-number login, live
            delivery over sockets, and interface states that actually tell you
            what&apos;s happening — no spinners lying to you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://chat-app-phi-one-54.vercel.app/login"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-signal text-ink font-semibold px-6 py-3 text-sm hover:bg-signal-dim hover:text-paper transition-colors"
            >
              Open the demo
              <IoMdArrowForward aria-hidden="true" />
            </a>
            <a
              href="#how"
              className="focus-ring inline-flex items-center rounded-full border border-ink-line px-6 py-3 text-sm text-paper hover:border-signal transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        <HeroConversation />
      </section>

      {/* How it works — a real sequence, so numbered */}
      <section id="how" className="mx-auto max-w-6xl px-6 sm:px-8 py-20">
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-12 tracking-tight">
          From nothing to a conversation, in three steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.n} className="border-t border-ink-line pt-5">
              <span className="font-display text-signal text-sm">{step.n}</span>
              <h3 className="font-display font-semibold text-lg mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-6 sm:px-8 py-20 border-t border-ink-line"
      >
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-12 tracking-tight max-w-lg">
          The parts that matter most when a conversation is live
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {FEATURES.map((f) => (
            <div key={f.label}>
              <h3 className="font-display font-semibold text-base mb-2 text-paper">
                {f.label}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Group spotlight */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-20 border-t border-ink-line grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-signal mb-4 uppercase">
            Groups
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-5 tracking-tight">
            More than two people, same one thread
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md">
            Name it, add whoever belongs, and let admins manage who stays. Every
            message reaches the whole group the same instant it reaches you — no
            separate code path, no separate delay.
          </p>
        </div>
        <div className="rounded-2xl border border-ink-line bg-ink-raised p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {['S', 'K', 'R'].map((initial, i) => (
                <div
                  key={initial}
                  className="h-8 w-8 rounded-full border-2 border-ink-raised flex items-center justify-center font-display text-xs font-bold"
                  style={{
                    background:
                      i === 0 ? '#37D6C4' : i === 1 ? '#9AA1B2' : '#FF6B57',
                    color: '#14161F',
                  }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">Frontend Team</p>
              <p className="text-[11px] text-muted font-display">3 members</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-white/[0.06] border border-ink-line rounded-xl px-3.5 py-2 text-[13px] max-w-[80%]">
              <p className="text-[11px] text-signal font-display mb-0.5">
                Rafiq
              </p>
              deploy&apos;s green, checking prod now
            </div>
            <div className="bg-signal text-ink rounded-xl px-3.5 py-2 text-[13px] max-w-[80%] ml-auto">
              same here, looks solid
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 py-24 border-t border-ink-line text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6">
          Pick up a phone number.
          <br />
          Start a thread.
        </h2>
        <a
          href="https://chat-app-phi-one-54.vercel.app/login"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-signal text-ink font-semibold px-8 py-3.5 text-sm hover:bg-signal-dim hover:text-paper transition-colors"
        >
          Open the demo

          <IoMdArrowForward aria-hidden="true" />
        </a>
      </section>

      <footer className="mx-auto max-w-6xl px-6 sm:px-8 pb-10 flex items-center justify-between text-xs text-muted font-display">
        <span>WIRE — take-home assignment</span>
        <span>built with Next.js</span>
      </footer>
    </div>
  )
}
