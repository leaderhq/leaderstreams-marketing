import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

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
  title: 'About — LeaderStreams',
  description:
    'LeaderStreams is part of the Leader Suite — social scheduling built by people who understand the pace and demands of field leadership.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    icon: 'handshake',
    title: 'Consistency over heroics',
    body: "The leaders who win aren't posting the most clever content — they're the ones who never disappear. LeaderStreams exists to make consistency effortless for every rep on your team.",
  },
  {
    icon: 'bolt',
    title: 'Batch once, publish everywhere',
    body: "Twenty minutes on Monday morning should cover the entire week. We built LeaderStreams so field leaders can front-load the work and let the system handle the cadence.",
  },
  {
    icon: 'gift',
    title: 'Team-first by design',
    body: "Most social tools are built for solo creators. LeaderStreams is built for the network marketing team structure — one leader, dozens of reps, one content strategy that keeps everyone visible.",
  },
] as const;

export default function AboutPage() {
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
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#06163E' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                we lived the problem.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderStreams is part of the Leader Suite — a set of tools built
                for the people who lead, sell, and build in the real world. Not
                the conference room. The conference floor, the expo hall, the
                door, and everywhere in between.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Field leaders in network marketing and direct sales share one
              problem: staying visible is a full-time job on top of an already
              full-time job. You&apos;re recruiting, coaching, selling, and running
              events — and you&apos;re expected to post consistently on five social
              platforms while doing all of it.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderStreams was built to close the gap between the content you
              know you should be creating and the content that actually goes out.
              Not with a complicated social media tool that requires a marketing
              degree to operate. With a simple queue you load once a week and a
              system that handles the rest — for you and for every rep on your
              team.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We&apos;re part of the Leader Suite of software products and tools
              for leaders. LeaderStreams is where your content strategy becomes
              consistent. The rest of the suite is built around everything else
              that comes before and after.
            </p>
            <div className="mt-10">
              <a
                href="https://leaderhq.io"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Visit LeaderHQ — the full suite →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderStreams is one product in a growing suite of tools for
              leaders, sales professionals, and the organizations they build.
              Visit LeaderHQ to see everything we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Visit LeaderHQ
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="Streams"
        wordmarkSrc={WORDMARK_SRC}
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}
