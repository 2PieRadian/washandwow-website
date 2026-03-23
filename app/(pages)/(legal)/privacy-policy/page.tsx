import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/sections/Footer";
import { SatoshiFont, WixMadeForDisplayFont } from "@/app/fonts";
import {
  Mail,
  MapPin,
  Phone,
  Shield,
  Database,
  Eye,
  Share2,
  Smartphone,
  Cookie,
  Lock,
  Clock,
  UserCheck,
  Link2,
  Users,
  RefreshCw,
  CheckCircle2,
  Globe,
  Shirt,
  MapPinned,
  Bell,
} from "lucide-react";
import type { Metadata } from "next";
import {
  PageHeroAnimation,
  PageSectionsAnimation,
} from "@/app/components/animations/PageAnimations";

export const metadata: Metadata = {
  title: "Privacy Policy | Wash & Wow",
  description:
    "How Wash & Wow collects, uses, and protects your data across our website and app.",
};

const LAST_UPDATED = "March 22, 2026";
const CONTACT_EMAIL = "support@washandwow.in";
const CONTACT_PHONE = "9318387705";
const CONTACT_ADDRESS = "123, Location Here";

const sectionIcons: Record<string, React.ReactNode> = {
  scope: <Eye className="h-5 w-5" />,
  collect: <Database className="h-5 w-5" />,
  use: <Shield className="h-5 w-5" />,
  sharing: <Share2 className="h-5 w-5" />,
  permissions: <Smartphone className="h-5 w-5" />,
  cookies: <Cookie className="h-5 w-5" />,
  security: <Lock className="h-5 w-5" />,
  retention: <Clock className="h-5 w-5" />,
  rights: <UserCheck className="h-5 w-5" />,
  "third-party": <Link2 className="h-5 w-5" />,
  children: <Users className="h-5 w-5" />,
  changes: <RefreshCw className="h-5 w-5" />,
  contact: <Mail className="h-5 w-5" />,
  consent: <CheckCircle2 className="h-5 w-5" />,
};

const sectionGradients: Record<
  string,
  { from: string; to: string; shadow: string; bg: string }
> = {
  scope: {
    from: "#FFAB5C",
    to: "#FF7700",
    shadow: "rgba(255,119,0,0.25)",
    bg: "rgba(255,171,92,0.08)",
  },
  collect: {
    from: "#98BCD6",
    to: "#6A9BC3",
    shadow: "rgba(106,155,195,0.25)",
    bg: "rgba(152,188,214,0.08)",
  },
  use: {
    from: "#D4B8AD",
    to: "#A68B7B",
    shadow: "rgba(166,139,123,0.25)",
    bg: "rgba(212,184,173,0.08)",
  },
  sharing: {
    from: "#E6C29E",
    to: "#D4A574",
    shadow: "rgba(212,165,116,0.25)",
    bg: "rgba(230,194,158,0.08)",
  },
  permissions: {
    from: "#FFAB5C",
    to: "#FF7700",
    shadow: "rgba(255,119,0,0.25)",
    bg: "rgba(255,171,92,0.08)",
  },
  cookies: {
    from: "#C5AEA5",
    to: "#A68B7B",
    shadow: "rgba(166,139,123,0.25)",
    bg: "rgba(197,174,165,0.08)",
  },
  security: {
    from: "#98BCD6",
    to: "#6A9BC3",
    shadow: "rgba(106,155,195,0.25)",
    bg: "rgba(152,188,214,0.08)",
  },
  retention: {
    from: "#D4B8AD",
    to: "#A68B7B",
    shadow: "rgba(166,139,123,0.25)",
    bg: "rgba(212,184,173,0.08)",
  },
  rights: {
    from: "#FFAB5C",
    to: "#FF7700",
    shadow: "rgba(255,119,0,0.25)",
    bg: "rgba(255,171,92,0.08)",
  },
  "third-party": {
    from: "#E6C29E",
    to: "#D4A574",
    shadow: "rgba(212,165,116,0.25)",
    bg: "rgba(230,194,158,0.08)",
  },
  children: {
    from: "#98BCD6",
    to: "#6A9BC3",
    shadow: "rgba(106,155,195,0.25)",
    bg: "rgba(152,188,214,0.08)",
  },
  changes: {
    from: "#C5AEA5",
    to: "#A68B7B",
    shadow: "rgba(166,139,123,0.25)",
    bg: "rgba(197,174,165,0.08)",
  },
  contact: {
    from: "#FFAB5C",
    to: "#FF7700",
    shadow: "rgba(255,119,0,0.25)",
    bg: "rgba(255,171,92,0.08)",
  },
  consent: {
    from: "#D4B8AD",
    to: "#A68B7B",
    shadow: "rgba(166,139,123,0.25)",
    bg: "rgba(212,184,173,0.08)",
  },
};

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
  const gradient = sectionGradients[id] || sectionGradients.scope;
  const icon = sectionIcons[id];

  return (
    <section
      id={id}
      className="page-section gsap-animate scroll-mt-28 opacity-0"
    >
      <div
        className="group relative overflow-hidden rounded-[20px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] transition-all duration-300 hover:shadow-[8px_8px_20px_rgba(209,199,189,0.5),-8px_-8px_20px_rgba(255,255,255,0.95),inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(209,199,189,0.2)] sm:rounded-[28px] sm:p-8"
        style={{ backgroundColor: gradient.bg }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
          }}
        />

        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-lg sm:h-11 sm:w-11"
              style={{
                background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
                boxShadow: `0 4px 14px ${gradient.shadow}, inset 0 1px 1px rgba(255,255,255,0.3)`,
              }}
            >
              {icon}
            </span>
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-wider sm:text-sm"
                style={{ color: gradient.to }}
              >
                Section {number.replace(".", "")}
              </span>
              <h2
                className="text-lg font-semibold text-[#33302E] sm:text-xl md:text-2xl"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                {title}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-[16px] leading-relaxed text-[#5E5450] sm:text-[17px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 sm:gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] px-4 py-3 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)] transition-all duration-200 hover:shadow-[4px_4px_10px_rgba(209,199,189,0.4),-4px_-4px_10px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.7)]"
        >
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-orange to-[#FF7700] shadow-[0_2px_4px_rgba(255,119,0,0.3)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Subheading({ label, title }: { label: string; title: string }) {
  return (
    <h3 className="flex items-center gap-2 text-[16px] font-semibold text-[#33302E] sm:text-[17px]">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-orange/20 to-orange/10 text-xs font-bold text-orange">
        {label.replace(".", "")}
      </span>
      <span>{title}</span>
    </h3>
  );
}

function PermissionCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: { from: string; to: string; shadow: string };
}) {
  return (
    <li className="group/card flex gap-4 rounded-2xl border border-[#E8DFD6]/40 bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] p-5 shadow-[5px_5px_12px_rgba(209,199,189,0.4),-5px_-5px_12px_rgba(255,255,255,0.88),inset_1px_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 hover:shadow-[6px_6px_14px_rgba(209,199,189,0.45),-6px_-6px_14px_rgba(255,255,255,0.92),inset_1px_1px_2px_rgba(255,255,255,0.8)]">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover/card:scale-110"
        style={{
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          boxShadow: `4px_4px_10px ${gradient.shadow}, -2px_-2px_6px rgba(255,255,255,0.6), inset 1px 1px 2px rgba(255,255,255,0.4)`,
        }}
        aria-hidden
      >
        {icon}
      </span>
      <div>
        <p className="text-[16px] font-semibold text-[#33302E] sm:text-[17px]">
          {title}
        </p>
        <p className="mt-1 text-[15px] leading-relaxed text-[#5E5450] sm:text-[16px]">
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
  gradient,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  gradient: { from: string; to: string; shadow: string };
}) {
  const content = href ? (
    <a
      href={href}
      className="font-medium text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange break-all"
    >
      {value}
    </a>
  ) : (
    <span className="font-medium text-[#33302E] break-words">{value}</span>
  );
  return (
    <div className="group/contact flex gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-[#E8DFD6]/40 bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] p-3 sm:p-4 md:p-5 shadow-[5px_5px_12px_rgba(209,199,189,0.4),-5px_-5px_12px_rgba(255,255,255,0.88),inset_1px_1px_2px_rgba(255,255,255,0.7)] transition-all duration-300 hover:shadow-[6px_6px_14px_rgba(209,199,189,0.45),-6px_-6px_14px_rgba(255,255,255,0.92),inset_1px_1px_2px_rgba(255,255,255,0.8)]">
      <span
        className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-white transition-transform duration-300 group-hover/contact:scale-110 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-4.5 sm:[&>svg]:w-4.5 md:[&>svg]:h-5 md:[&>svg]:w-5"
        style={{
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
          boxShadow: `4px 4px 10px ${gradient.shadow}, -2px -2px 6px rgba(255,255,255,0.6), inset 1px 1px 2px rgba(255,255,255,0.4)`,
        }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#91776C]">
          {label}
        </p>
        <p className="mt-0.5 sm:mt-1 text-[13px] sm:text-[14px] md:text-[15px]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div style={{ fontFamily: SatoshiFont.style.fontFamily }}>
      <Navbar />

      <PageHeroAnimation variant="centered">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFFBF6] via-[#FDF9F5] to-white" />
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-gradient-to-bl from-[#98BCD6]/10 to-transparent blur-3xl" />

          <Container
            isMaxWidth={true}
            className="relative mt-[70px] flex min-h-[calc(55svh-70px)] items-center justify-center px-[20px] pb-8 pt-12 md:pb-12 md:pt-16"
          >
            <div className="max-w-3xl text-center">
              <h1
                className="page-hero-title gsap-animate text-3xl font-bold text-[#33302E] opacity-0 sm:text-4xl md:text-5xl"
                style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
              >
                Privacy Policy
              </h1>

              <p className="page-hero-meta gsap-animate mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-[#5E5450] opacity-0 sm:text-[18px]">
                We treat your data with the same care as your clothes — securely
                and responsibly.
              </p>

              <div className="page-hero-subtitle gsap-animate mt-6 flex items-center justify-center gap-2 opacity-0">
                <Clock className="h-4 w-4 text-[#91776C]" />
                <span className="text-sm font-medium text-[#91776C]">
                  Last updated: {LAST_UPDATED}
                </span>
              </div>
            </div>
          </Container>
        </div>
      </PageHeroAnimation>

      <PageSectionsAnimation>
        <Container isMaxWidth={true} className="px-[20px] pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="page-section gsap-animate mb-10 overflow-hidden rounded-[24px] border border-[#E8DFD6]/50 bg-gradient-to-br from-[#FEFEFE] to-[#F8F5F2] p-6 shadow-[6px_6px_16px_rgba(209,199,189,0.45),-6px_-6px_16px_rgba(255,255,255,0.9),inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(209,199,189,0.15)] opacity-0 sm:rounded-[28px] sm:p-8">
              <p className="text-[16px] leading-relaxed text-[#5E5450] sm:text-[17px]">
                Welcome to{" "}
                <span className="font-semibold text-[#33302E]">
                  Wash &amp; Wow
                </span>{" "}
                (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or
                &quot;us&quot;). This Privacy Policy explains how we collect,
                use, disclose, and protect your information when you:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] px-4 py-3 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange/20 to-orange/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]">
                    <Globe className="h-4 w-4 text-orange" />
                  </span>
                  <span className="text-[15px] text-[#5E5450]">
                    Visit{" "}
                    <a
                      href="https://washandwow.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#33302E] underline decoration-[#DDD2C8] underline-offset-2 transition-colors hover:text-orange hover:decoration-orange"
                    >
                      washandwow.in
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] px-4 py-3 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#98BCD6]/20 to-[#98BCD6]/10 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]">
                    <Smartphone className="h-4 w-4 text-[#6A9BC3]" />
                  </span>
                  <span className="text-[15px] text-[#5E5450]">
                    Use our mobile app
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#FEFEFE] to-[#F6F3F0] px-4 py-3 shadow-[3px_3px_8px_rgba(209,199,189,0.35),-3px_-3px_8px_rgba(255,255,255,0.85),inset_1px_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#D4B8AD]/30 to-[#D4B8AD]/15 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]">
                    <Shirt className="h-4 w-4 text-[#A68B7B]" />
                  </span>
                  <span className="text-[15px] text-[#5E5450]">
                    Access our services
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:gap-8">
              <PolicySection
                id="scope"
                number="1."
                title="Scope of This Policy"
              >
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
                  Payments are processed via secure third-party payment
                  gateways. We do not store your full card or banking details.
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
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50/80 to-emerald-50/40 px-5 py-4 shadow-[0_2px_12px_-4px_rgba(16,185,129,0.1)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_4px_12px_rgba(16,185,129,0.3)]">
                    <Shield className="h-5 w-5" />
                  </span>
                  <p className="font-semibold text-emerald-800">
                    We do not sell your personal information.
                  </p>
                </div>
              </PolicySection>

              <PolicySection
                id="permissions"
                number="5."
                title="App Permissions"
              >
                <p>Depending on features used, our App may request:</p>
                <ul className="space-y-3">
                  <PermissionCard
                    icon={<MapPinned className="h-5 w-5" />}
                    title="Location access"
                    description="For pickup and delivery accuracy."
                    gradient={{
                      from: "#FFAB5C",
                      to: "#FF7700",
                      shadow: "rgba(255,119,0,0.25)",
                    }}
                  />
                  <PermissionCard
                    icon={<Phone className="h-5 w-5" />}
                    title="Phone access"
                    description="For account verification."
                    gradient={{
                      from: "#98BCD6",
                      to: "#6A9BC3",
                      shadow: "rgba(106,155,195,0.25)",
                    }}
                  />
                  <PermissionCard
                    icon={<Bell className="h-5 w-5" />}
                    title="Notifications"
                    description="For order updates."
                    gradient={{
                      from: "#D4B8AD",
                      to: "#A68B7B",
                      shadow: "rgba(166,139,123,0.25)",
                    }}
                  />
                </ul>
                <p>
                  You can control these permissions through your device
                  settings.
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
                  However, no major personal data collection occurs on the
                  website itself.
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
                  We may update this Privacy Policy periodically. Updates will
                  be reflected with a revised &quot;Last Updated&quot; date.
                </p>
              </PolicySection>

              <PolicySection id="contact" number="13." title="Contact Us">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  <ContactRow
                    icon={<Mail className="h-5 w-5" aria-hidden />}
                    label="Email"
                    value={CONTACT_EMAIL}
                    href={`mailto:${CONTACT_EMAIL}`}
                    gradient={{
                      from: "#FFAB5C",
                      to: "#FF7700",
                      shadow: "rgba(255,119,0,0.25)",
                    }}
                  />
                  <ContactRow
                    icon={<Phone className="h-5 w-5" aria-hidden />}
                    label="Phone"
                    value={CONTACT_PHONE}
                    href={`tel:${CONTACT_PHONE}`}
                    gradient={{
                      from: "#98BCD6",
                      to: "#6A9BC3",
                      shadow: "rgba(106,155,195,0.25)",
                    }}
                  />
                  <ContactRow
                    icon={<MapPin className="h-5 w-5" aria-hidden />}
                    label="Address"
                    value={CONTACT_ADDRESS}
                    gradient={{
                      from: "#D4B8AD",
                      to: "#A68B7B",
                      shadow: "rgba(166,139,123,0.25)",
                    }}
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
      </PageSectionsAnimation>

      <Footer />
    </div>
  );
}
