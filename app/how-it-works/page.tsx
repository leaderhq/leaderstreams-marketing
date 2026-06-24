import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://streams.leaderhq.io';
const WORDMARK_SRC = '/brand/LeaderStreams_wordmark.svg';

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
  title: 'How It Works — LeaderStreams',
  description:
    'Batch your content once a week and LeaderStreams publishes to every platform for your whole team. Four steps, under 20 minutes to set up.',
  alternates: { canonical: '/how-it-works' },
};

const STEPS: { n: number; title: string; body: React.ReactNode }[] = [
  {
    n: 1,
    title: 'Connect your social channels.',
    body: 'Link Facebook, Instagram, LinkedIn, X, TikTok, and YouTube in under five minutes. One-time setup covers every platform — done.',
  },
  {
    n: 2,
    title: 'Load the queue.',
    body: 'Batch your content once a week. Write posts, import from your content library, or let the Brand Voice AI draft them. Set the schedule and LeaderStreams lines them up across your whole team.',
  },
  {
    n: 3,
    title: 'Approve and publish.',
    body: 'Leaders review and approve team content before anything goes live. Reps get notified when their posts are ready. No chasing, no micromanaging — just a clean approval flow.',
  },
  {
    n: 4,
    title: 'Track what works.',
    body: 'See which posts drive engagement, your best publishing times, and platform-by-platform breakdowns. Refine the strategy each week without ever leaving LeaderStreams.',
  },
];

const FAQS = [
  {
    q: 'Does each rep need to log in to post?',
    a: "No. Once you load the queue and approve the content, LeaderStreams publishes automatically on schedule. Reps can stay hands-off all week — the posts go out whether they're at an event, on the doors, or asleep.",
  },
  {
    q: "Can I publish to accounts I don't personally own?",
    a: "Yes — that's the core team feature. You connect your reps' accounts (or they connect them themselves during onboarding) and you schedule for their channels from the team calendar. Each rep's content goes to their own accounts on their schedule.",
  },
  {
    q: 'What social platforms does LeaderStreams support?',
    a: 'Facebook, Instagram, LinkedIn, X (Twitter), TikTok, and YouTube. Native integrations for all six — no third-party bridges required.',
  },
  {
    q: 'How does the Brand Voice AI work?',
    a: "You give LeaderStreams a few examples of your best posts and describe your brand voice. It learns the style and drafts new posts you can approve, edit, and schedule. It's a starting point that saves the blank-page problem — not a replacement for your judgment.",
  },
  {
    q: 'Does it connect to the rest of the Leader Suite?',
    a: 'Yes. Leader Suite SSO means one login covers LeaderStreams, LeaderLeads, LeaderCal, LeaderSend, and all other suite products. And LeaderSend integration lets you automatically turn your best social posts into email campaigns.',
  },
];

export default function HowItWorksPage() {
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
        <Steps />
        <Faqs />
        <CtaBand />
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
      className="text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Batch once.
            <br />
            Publish all week.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Four steps. Under 20 minutes to set up. Your whole team stays
            visible on every platform — automatically, all week.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
      <ol className="space-y-10">
        {STEPS.map((step, i) => (
          <FadeIn as="li" key={step.n} delay={i * 60}>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white shadow-md shadow-brand-green/30">
                {step.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{step.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}

function Faqs() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Questions we hear every time
          </h2>
        </FadeIn>
        <dl className="mt-12 space-y-6">
          {FAQS.map((faq, i) => (
            <FadeIn
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
            >
              <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to see it in action?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Twenty minutes. All week covered.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Set up your queue Monday morning and every rep on your team posts
            consistently all week without thinking about it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See Pricing →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
