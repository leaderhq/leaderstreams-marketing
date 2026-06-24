import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon, type MarketingIconName } from '../_marketing/icons';

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
  title: 'For Teams — LeaderStreams',
  description:
    'One content calendar for every rep and one real-time view of every post your organization publishes. Built for MLM downlines, D2D crews, and field sales teams.',
  alternates: { canonical: '/for-teams' },
};

export default function ForTeamsPage() {
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
        <Includes />
        <TeamFits />
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

/* ----------------------------------------------------------------- Hero -- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            For Sales Teams
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            One calendar.
            <br />
            Every rep. Every channel.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Stop chasing your team to post. Load the queue once and every rep
            stays active on every platform — consistent, on-brand, and on
            schedule — without any of them needing to think about it.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-black/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start your team — $18/seat/mo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- What's included -- */

const TEAM_FEATURES = [
  'Unlimited scheduled posts for every team member',
  'Team content calendar — see every post across every rep',
  'Approval workflow — leaders review before anything goes live',
  'Multi-platform publishing: Facebook, Instagram, LinkedIn, X, TikTok, YouTube',
  'Content library — share your best posts with the whole team',
  'Brand voice AI to generate on-brand captions at scale',
  'Analytics dashboard — track performance across every rep and platform',
  'Leader Suite SSO — one login for the whole suite',
  'LeaderSend integration — social posts become email campaigns automatically',
  'Mobile-first — schedule, approve, and publish from your phone',
  'RSS auto-publish — industry news and updates on autopilot',
  'Audit logs for Executive plan accounts',
];

function Includes() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          What the Team plan includes
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-base text-zinc-700">
          {TEAM_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <span
                className="mt-0.5 shrink-0 text-base font-bold text-brand-green"
                aria-hidden
              >
                ✓
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}

/* ---------------------------------------------------------- Team fits -- */

const TEAM_FITS: { icon: MarketingIconName; title: string; body: string }[] = [
  {
    icon: 'handshake',
    title: 'MLM & Direct Sales Organizations',
    body: 'Put your whole downline on LeaderStreams. Load the content calendar once and every rep in your organization posts consistently on every platform — without any individual coordination.',
  },
  {
    icon: 'home',
    title: 'Summer Sales & D2D Companies',
    body: '200 reps on the doors. One content calendar covering all of them. Manager visibility into team publishing activity without a daily check-in or self-reporting system.',
  },
  {
    icon: 'tent',
    title: 'Conference & Trade Show Teams',
    body: 'Every rep at your event posts the same on-brand content on the same schedule. Consistent voice, consistent cadence, consistent visibility — across every member of the team.',
  },
];

function TeamFits() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Built for these teams
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {TEAM_FITS.map((t, i) => (
            <FadeIn
              key={t.title}
              delay={i * 80}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <MarketingIcon name={t.icon} size={24} />
              </div>
              <h3 className="mt-3 text-base font-bold text-brand-navy">
                {t.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{t.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA -- */

function FinalCta() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[1100px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Your team stays visible. Automatically.
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your team&apos;s queue is ready to load.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Start the trial tonight. Your first week of content can be scheduled before morning.
          </p>
          <a
            href={`${APP_URL}/signup?plan=team`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Team trial
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
