import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter } from '@leader/marketing-ui';

export const metadata: Metadata = {
  title: 'Terms & Conditions — LeaderStreams',
  description:
    'The terms that govern your use of LeaderStreams, a product of LeaderHQ.',
  alternates: { canonical: '/terms' },
};

const LAST_UPDATED = 'June 2026';

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

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl="https://streams.leaderhq.io" />
      <SiteNav
        productSuffix="Streams"
        wordmarkSrc={WORDMARK_SRC}
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref="https://streams.leaderhq.io/signup"
        loginHref="https://streams.leaderhq.io/login"
      />
      <main className="flex-1">
        <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16">
          <header className="mb-10 border-b border-zinc-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="mt-4 rounded-lg bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-600">
              This is a general template provided for transparency and is not
              legal advice. It describes the standard terms under which we offer
              the service and may be updated as the product evolves. If you have
              questions, contact us at{' '}
              <a
                href="mailto:support@leaderhq.io"
                className="font-medium text-brand-blue hover:underline"
              >
                support@leaderhq.io
              </a>
              .
            </p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-zinc-700">
            <section>
              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
                access to and use of LeaderStreams (&ldquo;LeaderStreams,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a
                product of LeaderHQ, a division of Know Freedom Technologies. By
                creating an account or using the service, you agree to these
                Terms. If you do not agree, do not use LeaderStreams.
              </p>
            </section>

            <Section title="Acceptable use">
              <p>
                You agree to use LeaderStreams only for lawful purposes and in
                accordance with these Terms. You will not use the service to
                schedule, publish, or distribute content that is illegal,
                infringing, deceptive, harassing, or harmful, and you will comply
                with all applicable laws, including those governing electronic
                communications and the social platforms you connect.
              </p>
            </Section>

            <Section title="Account responsibilities">
              <p>
                You are responsible for the activity that occurs under your
                account and for keeping your sign-in credentials secure. You must
                provide accurate information, promptly update it as needed, and
                notify us of any unauthorized use of your account. You are
                responsible for the content you schedule and for having any
                necessary permission to publish it on connected platforms.
              </p>
            </Section>

            <Section title="Connected social accounts">
              <p>
                By connecting a social account to LeaderStreams, you authorize us
                to publish content on your behalf using that account. You remain
                responsible for compliance with each platform&apos;s own terms of
                service. We are not responsible for actions taken by social
                platforms, including content removal, account suspension, or
                policy enforcement.
              </p>
            </Section>

            <Section title="Billing and subscriptions">
              <p>
                Paid plans are billed through Stripe, our payment processor. By
                subscribing, you authorize us and Stripe to charge your payment
                method on a recurring basis according to the plan you select.
                Subscriptions renew automatically until canceled. You may cancel
                at any time; cancellation takes effect at the end of the current
                billing period. Except where required by law, fees already paid
                are non-refundable.
              </p>
            </Section>

            <Section title="No misuse">
              <p>
                You will not attempt to interfere with, disrupt, reverse
                engineer, or gain unauthorized access to the service or its
                systems, and you will not use the service to send spam, scrape
                data without authorization, or otherwise abuse the platform or
                other users. We may suspend or limit access to protect the
                service and its users.
              </p>
            </Section>

            <Section title="Disclaimer of warranties">
              <p>
                LeaderStreams is provided &ldquo;as is&rdquo; and &ldquo;as
                available,&rdquo; without warranties of any kind, whether
                express or implied, including any implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that the service will be
                uninterrupted, error-free, or secure.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, LeaderHQ and Know Freedom
                Technologies will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or for any loss of
                profits, data, or goodwill arising out of or related to your use
                of the service. Our total liability for any claim relating to the
                service will not exceed the amount you paid us in the twelve
                months preceding the claim.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                You may stop using LeaderStreams and close your account at any
                time. We may suspend or terminate your access if you violate these
                Terms or if we discontinue the service. Upon termination, your
                right to use the service ends, and we may delete your data as
                described in our Privacy Policy.
              </p>
            </Section>

            <Section title="Changes to these Terms">
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the &ldquo;Last updated&rdquo; date above. Continued use of
                LeaderStreams after a change constitutes acceptance of the updated
                Terms.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These Terms are governed by the laws of the State of Wyoming,
                without regard to its conflict-of-laws principles. Any dispute
                arising under these Terms will be subject to the exclusive
                jurisdiction of the state and federal courts located in Wyoming.
              </p>
            </Section>

            <Section title="Contact us">
              <p>If you have questions about these Terms, reach out to:</p>
              <address className="mt-3 not-italic leading-relaxed text-zinc-600">
                LeaderHQ
                <br />
                30 N. Gould Street, Suite N
                <br />
                Sheridan, WY 82801
                <br />
                <a
                  href="mailto:support@leaderhq.io"
                  className="font-medium text-brand-blue hover:underline"
                >
                  support@leaderhq.io
                </a>
              </address>
            </Section>
          </div>
        </article>
      </main>
      <SiteFooter
        productSuffix="Streams"
        wordmarkSrc={WORDMARK_SRC}
        columns={FOOTER_COLUMNS}
      />
    </div>
  );
}

/* --------------------------------------------------------------- Shared -- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-brand-navy">
        {title}
      </h2>
      {children}
    </section>
  );
}
