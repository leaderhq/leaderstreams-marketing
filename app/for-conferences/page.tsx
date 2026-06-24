import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://streams.leaderhq.io';
const WORDMARK_SRC = '/brand/LeaderStreams_wordmark.png';

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Teams', href: '/for-teams' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'For Teams', href: '/for-teams' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Sales Teams', href: '/for-teams' },
      { label: 'Field Leaders', href: '/for-teams' },
      { label: 'Network Marketing', href: '/for-teams' },
      { label: 'Blog & Resources', href: '/blog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About LeaderHQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

export const metadata: Metadata = {
  title: 'For Conferences & Events — LeaderStreams',
  description:
    'Keep your team visible before, during, and after every conference. Schedule content for the full event cycle and stay top-of-mind with every contact you make.',
  alternates: { canonical: '/for-conferences' },
};

const CONFERENCE_PHASES = [
  {
    phase: 'Before',
    title: 'Build anticipation before you arrive.',
    items: [
      'Schedule a full week of pre-event posts for your whole team in one sitting',
      'Announce your presence at the conference across every platform simultaneously',
      'Warm up your audience before doors even open',
    ],
  },
  {
    phase: 'During',
    title: 'Stay visible while you work the room.',
    items: [
      'Pre-scheduled posts publish automatically while you focus on conversations',
      'Mobile approval workflow lets leaders greenlight real-time content from the floor',
      'Your team posts on schedule even when no one has time to think about it',
    ],
  },
  {
    phase: 'After',
    title: 'Stay top-of-mind through the warm window.',
    items: [
      'Follow-up content was already scheduled before you left home',
      'Recognition posts, recap content, and re-engagement go out automatically',
      'The 24-hour warm window closes — your posts keep you visible through it',
    ],
  },
];

export default function ForConferencesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="Streams"
        wordmarkSrc={WORDMARK_SRC}
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <PhaseSection />
        <ContentBand />
        <FinalCta />
      </main>
      <SiteFooter
        productSuffix="Streams"
        wordmarkSrc={WORDMARK_SRC}
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            For Conferences &amp; Events
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Your team stays visible
            <br />
            before, during, and after.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Conference content doesn&apos;t write itself and it doesn&apos;t post
            itself. LeaderStreams lets you schedule the entire event content
            cycle in advance — so while you&apos;re on the floor working the
            room, your social presence handles itself.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-black/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              How it works →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function PhaseSection() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          The full event content cycle — handled.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-zinc-600">
          Load it all before you leave. LeaderStreams publishes on schedule so
          you can focus on the conversations that matter.
        </p>
      </FadeIn>
      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {CONFERENCE_PHASES.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 80} className="relative">
            <div className="mb-4 inline-flex items-center rounded-full bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
              {phase.phase}
            </div>
            <h3 className="text-lg font-bold text-brand-navy">{phase.title}</h3>
            <ul className="mt-4 space-y-3">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ContentBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Batch once. Publish everywhere.
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Twenty minutes before the event.
            <br />
            All week handled.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-zinc-300">
            Load a week of conference content in one sitting —
            anticipation posts, live updates, follow-up recognition, recap content.
            LeaderStreams drips it all out on schedule while you work the floor.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      className="border-t border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Your next conference is your best content test.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Schedule the full event cycle before you leave. Show up present.
            Let the system keep you visible.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            Start for Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
