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
  title: 'Pricing — LeaderStreams',
  description:
    'Simple pricing for social scheduling. Free to start — upgrade when your team is ready to scale. Built for field leaders in network marketing.',
  alternates: { canonical: '/pricing' },
};

interface Plan {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
  ctaStyle: 'outline' | 'green' | 'dark';
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    desc: 'For solo leaders getting started with social scheduling.',
    features: [
      'Up to 10 scheduled posts / mo',
      '3 connected social accounts',
      'Content queue',
      'Basic analytics',
      'Leader Suite SSO',
    ],
    cta: 'Start for free',
    ctaHref: `${APP_URL}/signup`,
    ctaStyle: 'outline',
  },
  {
    name: 'Team',
    price: '$18',
    cadence: 'per user / mo',
    desc: 'For growing field-leader teams.',
    features: [
      'Unlimited scheduled posts',
      'Unlimited social accounts',
      'Team content calendar',
      'Approval workflow',
      'Analytics dashboard',
      'Content library',
      'All Leader Suite integrations',
    ],
    highlighted: true,
    cta: 'Start Team trial',
    ctaHref: `${APP_URL}/signup?plan=team`,
    ctaStyle: 'green',
  },
  {
    name: 'Executive',
    price: '$39',
    cadence: 'per user / mo',
    desc: 'For organizations that run on content.',
    features: [
      'Everything in Team',
      'Brand voice AI',
      'RSS auto-publish',
      'Priority support',
      'Audit logs',
      'SSO enforcement',
      'Dedicated onboarding',
    ],
    cta: 'Contact sales',
    ctaHref: '/contact',
    ctaStyle: 'dark',
  },
];

const FAQS = [
  {
    q: 'Is the free plan actually free forever?',
    a: 'Yes. No credit card required. No trial that expires. Your queue, scheduling, and basic analytics are free permanently. We believe every field leader deserves a real scheduling tool regardless of budget — and the free plan is a functional tool, not a stripped preview.',
  },
  {
    q: 'How does Team plan billing work?',
    a: 'The Team plan is $18 per seat per month. You can add or remove seats at any time — billing adjusts at the start of your next cycle. No per-post fees, no usage-based surprises, no hidden charges.',
  },
  {
    q: 'What is Brand Voice AI?',
    a: 'Brand Voice AI is an Executive plan feature. You give LeaderStreams examples of your best posts and describe your style. It learns your voice and drafts new posts your team can approve, edit, and schedule — saving the blank-page problem at scale.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes, at any time. Upgrade from Free to Team instantly. Add or remove seats on the Team plan whenever needed. Downgrade or cancel at the end of your billing period. No lock-in, no penalty.',
  },
  {
    q: 'Do you offer discounts for large organizations?',
    a: 'For teams larger than 50 seats — large MLM downlines, summer sales organizations, enterprise teams — reach out at support@leaderhq.io with "Team Plan" in the subject line. We offer custom pricing for organizations at scale.',
  },
  {
    q: 'What happens when someone on my team leaves?',
    a: "You can reassign their seat to a new team member instantly. Their content queue and channel connections transfer to the new seat. No gap in coverage, no wasted budget during the transition.",
  },
];

export default function PricingPage() {
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
        <PlansGrid />
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
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Straightforward pricing.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Start free. Upgrade when your team is ready to scale.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function PlansGrid() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-stretch gap-5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 80}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
                plan.highlighted
                  ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20'
                  : 'border-zinc-100 shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-zinc-500">{plan.name}</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black text-brand-navy">{plan.price}</span>
                  <span className="mb-1 text-sm text-zinc-400">{plan.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{plan.desc}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.ctaStyle === 'green'
                    ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-navy'
                    : plan.ctaStyle === 'dark'
                      ? 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                      : 'border border-zinc-200 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-navy'
                }`}
              >
                {plan.cta}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          Pricing questions, answered.
        </h2>
      </FadeIn>
      <dl className="mt-12 space-y-6">
        {FAQS.map((faq, i) => (
          <FadeIn
            key={faq.q}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to stop going dark between events?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            No credit card. No time limit. Load your first week of content and
            see how it feels to be consistent without thinking about it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See How It Works →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
