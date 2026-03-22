import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import { Mail, MapPin, Phone } from "lucide-react";

const LAST_UPDATED = "March 22, 2026";
const CONTACT_EMAIL = "support@washandwow.in";
const CONTACT_PHONE = "9318387705";
const CONTACT_ADDRESS = "123, Location Here";

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#E8DFD6] pt-8 first:border-0 first:pt-0"
    >
      <h2
        className="mb-4 text-xl font-semibold text-[#33302E] sm:text-2xl"
        style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
      >
        <span className="font-bold tabular-nums text-orange">{number}</span>
        <span className="ml-2">{title}</span>
      </h2>
      <div className="space-y-4 text-[18px] leading-relaxed text-[#5E5450]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ml-1 space-y-2 border-l-2 border-[#E8DFD6] pl-4">
      {items.map((item) => (
        <li key={item} className="relative">
          <span className="absolute -left-[21px] top-2 h-1.5 w-1.5 rounded-full bg-orange" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Subheading({ label, title }: { label: string; title: string }) {
  return (
    <h3 className="text-[18px] font-semibold text-[#33302E]">
      <span className="text-orange">{label}</span> {title}
    </h3>
  );
}

function PermissionCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-3 rounded-xl border border-[#E8DFD6] bg-[#FBF6F2]/80 p-4 transition-colors hover:bg-[#FBF6F2]">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg shadow-sm"
        aria-hidden
      >
        {emoji}
      </span>
      <div>
        <p className="text-[18px] font-semibold text-[#33302E]">{title}</p>
        <p className="mt-1 text-[18px] leading-relaxed text-[#5E5450]">
          {description}
        </p>
      </div>
    </li>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      className="text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
    >
      {value}
    </a>
  ) : (
    <span className="text-[#33302E]">{value}</span>
  );
  return (
    <div className="flex gap-3 rounded-xl border border-[#E8DFD6] bg-white p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FBF6F2] text-orange">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-[#91776C]">
          {label}
        </p>
        <p className="mt-1 text-[18px]">{content}</p>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <Container
        isMaxWidth={true}
        className="mt-[70px] px-[20px] pb-6 pt-10 md:pb-8 md:pt-14 min-h-[calc(70svh-70px)] flex items-center justify-center"
      >
        <div className="max-w-5xl text-center">
          <h1
            className="text-3xl font-semibold text-[#33302E] sm:text-4xl"
            style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
          >
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm font-medium text-[#91776C]">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-4 text-[18px] leading-relaxed text-dark-blue">
            We treat your data with the same care as your clothes — securely and
            responsibly.
          </p>
        </div>
      </Container>

      <Container isMaxWidth={true} className="px-[20px] pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-[18px] leading-relaxed text-[#5E5450]">
            Welcome to Wash &amp; Wow (&quot;Company&quot;, &quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains
            how we collect, use, disclose, and protect your information when
            you:
          </p>
          <ul className="mt-4 space-y-2 text-[18px] text-[#5E5450]">
            <li className="flex gap-2">
              <span className="font-semibold text-orange">•</span>
              <span>
                Visit our website{" "}
                <a
                  href="https://washandwow.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
                >
                  washandwow.in
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-orange">•</span>
              <span>Use our mobile application (&quot;App&quot;)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-orange">•</span>
              <span>Access our laundry and dry-cleaning services</span>
            </li>
          </ul>

          <div className="mt-10 space-y-10">
            <PolicySection id="scope" number="1." title="Scope of This Policy">
              <p>
                Our website is primarily informational and does not directly
                process service orders.
              </p>
              <p>
                All service bookings, order management, and user interactions
                are handled through our mobile application.
              </p>
              <p>
                This Privacy Policy therefore applies mainly to data collected
                via our App.
              </p>
            </PolicySection>

            <PolicySection
              id="collect"
              number="2."
              title="Information We Collect"
            >
              <Subheading label="a." title="Personal Information" />
              <p>When you use our App, we may collect:</p>
              <BulletList
                items={[
                  "Full Name",
                  "Phone Number",
                  "Email Address",
                  "Pickup & Delivery Address",
                  "Account login details",
                ]}
              />

              <Subheading label="b." title="Order & Service Data" />
              <BulletList
                items={[
                  "Laundry preferences",
                  "Service types (washing, dry cleaning, ironing)",
                  "Order history",
                  "Special instructions",
                ]}
              />

              <Subheading label="c." title="Device & Technical Information" />
              <BulletList
                items={[
                  "Device type and OS",
                  "IP address",
                  "App usage data",
                  "Crash logs and performance data",
                ]}
              />

              <Subheading label="d." title="Payment Information" />
              <p>
                Payments are processed via secure third-party payment gateways.
                We do not store your full card or banking details.
              </p>
            </PolicySection>

            <PolicySection
              id="use"
              number="3."
              title="How We Use Your Information"
            >
              <p>We use your data to:</p>
              <BulletList
                items={[
                  "Enable pickup and delivery services",
                  "Process and manage orders",
                  "Provide real-time updates and notifications",
                  "Improve app performance and user experience",
                  "Offer customer support",
                  "Prevent fraud and misuse",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="sharing"
              number="4."
              title="Sharing Your Information"
            >
              <p>We may share your data with:</p>
              <BulletList
                items={[
                  "Delivery personnel and logistics partners",
                  "Laundry processing partners",
                  "Payment gateway providers",
                  "Technology service providers",
                ]}
              />
              <p className="rounded-xl border border-orange/25 bg-orange/5 px-4 py-3 font-medium text-[#33302E]">
                We do not sell your personal information.
              </p>
            </PolicySection>

            <PolicySection id="permissions" number="5." title="App Permissions">
              <p>Depending on features used, our App may request:</p>
              <ul className="space-y-3">
                <PermissionCard
                  emoji="📍"
                  title="Location access"
                  description="For pickup and delivery accuracy."
                />
                <PermissionCard
                  emoji="📞"
                  title="Phone access"
                  description="For account verification."
                />
                <PermissionCard
                  emoji="🔔"
                  title="Notifications"
                  description="For order updates."
                />
              </ul>
              <p>
                You can control these permissions through your device settings.
              </p>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="6."
              title="Cookies & Website Tracking"
            >
              <p>Our website may use cookies for:</p>
              <BulletList
                items={["Basic analytics", "Improving user experience"]}
              />
              <p>
                However, no major personal data collection occurs on the website
                itself.
              </p>
            </PolicySection>

            <PolicySection id="security" number="7." title="Data Security">
              <p>We implement reasonable security practices, including:</p>
              <BulletList
                items={[
                  "HTTPS encryption",
                  "Secure backend infrastructure",
                  "Restricted access to user data",
                ]}
              />
              <p>Despite this, no digital system is completely secure.</p>
            </PolicySection>

            <PolicySection id="retention" number="8." title="Data Retention">
              <p>We retain your data:</p>
              <BulletList
                items={[
                  "As long as your account is active",
                  "As needed to provide services",
                  "As required by applicable laws",
                ]}
              />
            </PolicySection>

            <PolicySection id="rights" number="9." title="Your Rights">
              <p>You have the right to:</p>
              <BulletList
                items={[
                  "Access your data",
                  "Request corrections",
                  "Delete your account",
                  "Opt-out of promotional communication",
                ]}
              />
              <p>
                Contact:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </PolicySection>

            <PolicySection
              id="third-party"
              number="10."
              title="Third-Party Services"
            >
              <p>Our App may integrate with third-party services such as:</p>
              <BulletList items={["Payment gateways", "Analytics tools"]} />
              <p>These services have their own privacy policies.</p>
            </PolicySection>

            <PolicySection
              id="children"
              number="11."
              title="Children’s Privacy"
            >
              <p>
                Our services are not intended for individuals under 18. We do
                not knowingly collect data from minors.
              </p>
            </PolicySection>

            <PolicySection
              id="changes"
              number="12."
              title="Changes to This Policy"
            >
              <p>
                We may update this Privacy Policy periodically. Updates will be
                reflected with a revised &quot;Last Updated&quot; date.
              </p>
            </PolicySection>

            <PolicySection id="contact" number="13." title="Contact Us">
              <div className="grid gap-3 sm:grid-cols-1">
                <ContactRow
                  icon={<Mail className="h-5 w-5" aria-hidden />}
                  label="Email"
                  value={CONTACT_EMAIL}
                  href={`mailto:${CONTACT_EMAIL}`}
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5" aria-hidden />}
                  label="Phone"
                  value={CONTACT_PHONE}
                  href={`tel:${CONTACT_PHONE}`}
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" aria-hidden />}
                  label="Address"
                  value={CONTACT_ADDRESS}
                />
              </div>
            </PolicySection>

            <PolicySection id="consent" number="14." title="Consent">
              <p>
                By using our App or Website, you agree to this Privacy Policy.
              </p>
            </PolicySection>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
