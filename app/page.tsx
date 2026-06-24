import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { PostQueueMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leaderstreams.io';
const APP_URL = 'https://streams.leaderhq.io';
const WORDMARK_SRC = '/brand/LeaderStreams_wordmark.svg';

const STREAMS_PHRASES = [
  'your whole network.',
  'every platform.',
  'field leaders.',
  'your entire team.',
  'top producers.',
] as const;

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
  metadataBase: new URL(SITE_URL),
  title: 'LeaderStreams — Social publishing for your entire network',
  description:
    'Schedule and publish to every social channel for your whole team from one calendar. Built for field leaders in network marketing.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'LeaderStreams',
    title: 'LeaderStreams — Every post, scheduled and published.',
    description:
      'Social publishing built for field leaders — schedule and publish to every channel for your whole team from one calendar.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeaderStreams — Every post, scheduled and published.',
    description:
      'Social publishing built for field leaders — schedule and publish to every channel for your whole team from one calendar.',
  },
};

export default function HomePage() {
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
        <TrustBand />
        <FeaturesGrid />
        <TeamPublishingSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
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
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)',
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
        <FadeIn>
          <TypewriterHeadline
            staticPrefix="Social publishing for"
            phrases={STREAMS_PHRASES}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            Schedule and publish to every social channel for your whole team
            from one calendar. Load a week of content in 20 minutes — then
            LeaderStreams handles the rest.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              See How It Works →
            </Link>
          </div>
          <p className="mt-5 text-sm text-zinc-500">
            Free to start. No credit card required.{' '}
            <strong className="font-semibold text-zinc-700">
              Connects to your entire Leader Suite.
            </strong>
          </p>
        </FadeIn>
        <FadeIn delay={120} className="flex justify-center lg:justify-end">
          <PostQueueMock />
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Trust Band -- */

const TRUST_ORGS = ['Summit', 'Northwind', 'Apex', 'Vertex', 'Beacon'];

function TrustBand() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60">
      <div className="mx-auto max-w-5xl px-4 py-7 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Trusted by
          </p>
          {TRUST_ORGS.map((org) => (
            <span key={org} className="text-sm font-bold tracking-wide text-zinc-400">
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Features -- */

interface Feature {
  title: string;
  body: string;
  icon: MarketingIconName;
}

const FEATURES: Feature[] = [
  {
    title: 'Team content calendar.',
    body: 'One calendar for your entire downline. See and schedule every post across every team member from a single view.',
    icon: 'calendar',
  },
  {
    title: 'Multi-platform publishing.',
    body: 'Facebook, Instagram, LinkedIn, X, TikTok, YouTube — publish to every channel your team uses without switching tabs.',
    icon: 'share',
  },
  {
    title: 'Content queue.',
    body: 'Load a week of posts in 20 minutes. LeaderStreams drips them out on your schedule so you stay consistent without being online 24/7.',
    icon: 'clipboard',
  },
  {
    title: 'Approval workflow.',
    body: 'Leaders review and approve content before it goes live. Keep the brand voice on point across every rep on the team.',
    icon: 'check-circle',
  },
  {
    title: 'Analytics dashboard.',
    body: 'See what\'s driving engagement across the team. Best times, top posts, and platform breakdowns — all in one place.',
    icon: 'bar-chart',
  },
  {
    title: 'Content library.',
    body: 'Save your best-performing posts and reuse them. Build a library of proven content your whole team can pull from.',
    icon: 'building',
  },
  {
    title: 'Brand voice AI.',
    body: 'Generate on-brand captions in seconds. Train LeaderStreams on your voice and let it draft posts your team can approve and send.',
    icon: 'target',
  },
  {
    title: 'Social templates.',
    body: 'Proven post formats for network marketers — prospecting, recognition, announcements, and more. Start from a template, not a blank page.',
    icon: 'users',
  },
  {
    title: 'Leader Suite SSO.',
    body: 'One login across the whole suite. If you\'re in LeaderLeads or LeaderCal, you\'re already in LeaderStreams. No extra password.',
    icon: 'link',
  },
  {
    title: 'LeaderSend integration.',
    body: 'Turn your best social posts into email campaigns automatically. One piece of content, two channels, zero extra work.',
    icon: 'bell',
  },
  {
    title: 'Mobile-first.',
    body: 'Schedule, approve, and publish from your phone. Full feature parity on mobile — no compromises for field leaders on the go.',
    icon: 'trophy',
  },
  {
    title: 'RSS & auto-publish.',
    body: 'Connect any RSS feed and LeaderStreams auto-queues the content. Industry news, company updates, and team wins — on autopilot.',
    icon: 'clock',
  },
];

function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Everything your team needs to stay visible.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Built for the pace of field leadership — batch once, publish everywhere, all week long.
          </p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FadeIn
            key={f.title}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <MarketingIcon name={f.icon} size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-brand-navy">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------- Team Publishing Section -- */

function TeamPublishingSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            LeaderStreams + Your Whole Team
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            One calendar.
            <br />
            Every rep. Every channel.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Stop chasing your team to post. Load the queue once and every rep
            stays active on every platform — consistent, on-brand, and on
            schedule — without any of them needing to think about it.
          </p>
          <p className="mt-6 border-l-2 border-brand-green pl-4 text-base font-medium text-zinc-200">
            The only social publishing tool built for the network marketing
            team structure. One leader, dozens of reps, one content strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-5 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start for free →
            </a>
            <Link
              href="/for-teams"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See team features
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <div className="relative w-full max-w-[320px] space-y-3">
            {[
              { platform: 'LinkedIn', time: 'Today 9:00 AM', text: 'Excited to welcome three new leaders to the Summit team this week! 🎉', status: 'scheduled' },
              { platform: 'Facebook', time: 'Today 12:00 PM', text: 'What does success look like in network marketing? It looks like consistency.', status: 'scheduled' },
              { platform: 'Instagram', time: 'Tomorrow 8:00 AM', text: 'Behind the scenes of our Monday team call. This is what momentum looks like.', status: 'draft' },
            ].map((post) => (
              <div
                key={post.platform}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-brand-green">{post.platform}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      background: post.status === 'scheduled' ? 'rgba(92,172,35,0.18)' : 'rgba(255,255,255,0.08)',
                      color: post.status === 'scheduled' ? '#5CAC23' : '#a1a1aa',
                    }}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-300">{post.text}</p>
                <p className="mt-2 text-[10px] text-zinc-500">{post.time}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- How It Works -- */

const STEPS = [
  {
    step: '01',
    title: 'Connect your channels.',
    body: 'Link Facebook, Instagram, LinkedIn, X, TikTok, and YouTube. One setup, every platform — done in under five minutes.',
  },
  {
    step: '02',
    title: 'Load the queue.',
    body: 'Batch your content once a week. Write or import posts, set the schedule, and LeaderStreams lines them up across your team.',
  },
  {
    step: '03',
    title: 'Approve and publish.',
    body: 'Leaders approve team content before it goes live. Reps get notified when posts are ready. No chasing, no micromanaging.',
  },
  {
    step: '04',
    title: 'Track performance.',
    body: 'See what\'s working — top posts, best times, platform breakdowns. Refine the strategy without leaving LeaderStreams.',
  },
];

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Batch once. Publish all week.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Twenty minutes on Monday keeps your whole team visible every day of the week.
          </p>
        </div>
      </FadeIn>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <FadeIn key={s.step} delay={i * 80} className="relative">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-base font-black text-brand-green">
              {s.step}
            </div>
            <h3 className="text-base font-bold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Integrations -- */

const INTEGRATIONS = [
  'Facebook', 'Instagram', 'LinkedIn', 'X / Twitter',
  'TikTok', 'YouTube', 'LeaderLeads', 'LeaderSend',
  'LeaderTask', 'LeaderCal', 'Zapier', 'RSS Feeds',
];

function IntegrationsSection() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Every channel. Every tool. One place.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-600">
            Native Leader Suite integration plus every social platform your team is already on.
          </p>
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((name, i) => (
            <FadeIn key={name} delay={i * 40}>
              <span className="inline-block rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Pricing -- */

const TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For solo leaders getting started.',
    features: [
      'Up to 10 scheduled posts / mo',
      '3 connected social accounts',
      'Content queue',
      'Basic analytics',
      'Leader Suite SSO',
    ],
    cta: 'Start for free',
    href: `${APP_URL}/signup`,
    featured: false,
  },
  {
    name: 'Team',
    price: '$18',
    period: 'per user / mo',
    description: 'For growing field-leader teams.',
    features: [
      'Unlimited scheduled posts',
      'Unlimited social accounts',
      'Team content calendar',
      'Approval workflow',
      'Analytics dashboard',
      'Content library',
      'All Leader Suite integrations',
    ],
    cta: 'Start Team trial',
    href: `${APP_URL}/signup?plan=team`,
    featured: true,
  },
  {
    name: 'Executive',
    price: '$39',
    period: 'per user / mo',
    description: 'For organizations that run on content.',
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
    href: '/contact',
    featured: false,
  },
];

function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Straightforward pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Start free. Upgrade when your team is ready to scale.
          </p>
        </div>
      </FadeIn>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 80}>
            <div
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm h-full ${
                tier.featured
                  ? 'border-brand-green shadow-brand-green/15 shadow-lg'
                  : 'border-zinc-200 bg-white'
              }`}
              style={tier.featured ? { background: 'color-mix(in srgb, #5CAC23 5%, #fff)' } : {}}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-green px-4 py-1 text-xs font-bold text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-zinc-500">{tier.name}</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black text-brand-navy">{tier.price}</span>
                  <span className="mb-1 text-sm text-zinc-400">{tier.period}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[10px] font-bold text-brand-green">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-brand-green text-white shadow-md shadow-brand-green/25 hover:brightness-110 focus-visible:outline-brand-navy'
                    : 'border border-zinc-200 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-navy'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Final CTA -- */

function FinalCta() {
  return (
    <section className="bg-brand-navy py-20 text-center text-white md:py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Stop going dark between events.
          <br />
          Stay visible every single day.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
          LeaderStreams keeps your team posting consistently — batch once,
          publish everywhere, never miss a day.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-brand-green/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started free
          </a>
          <Link
            href="/how-it-works"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-zinc-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See how it works
          </Link>
        </div>
        <p className="mt-5 text-sm text-zinc-400">
          Free to start. Part of the Leader Suite.
        </p>
      </FadeIn>
    </section>
  );
}
