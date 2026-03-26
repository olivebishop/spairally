import { RadarArcs } from "@/app/svg/radar-arcs";
import GrainOverlay from "@/app/shared/grain";

export default function PrivacyPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#080808] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 font-[var(--font-inter),system-ui,sans-serif]">
      <GrainOverlay position="absolute" />

      <RadarArcs variant="legal-bottom-left" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px] leading-[1.12]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[14px] text-white/40">Last Updated: February 2026</p>

        <div className="legal-content mt-10 space-y-10">
          <Section num="1" title="Introduction">
            <p>
              Spairally (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you use
              our concealed weapon detection system and related services.
            </p>
          </Section>

          <Section num="2" title="Information We Collect">
            <h4>2.1 Information You Provide Directly</h4>
            <ul>
              <li>Account information (name, email, organization)</li>
              <li>Contact and communication data</li>
              <li>Device and technical information</li>
              <li>Usage and interaction data with our platform</li>
            </ul>

            <h4>2.2 Information Collected Automatically</h4>
            <ul>
              <li>Detection logs and system analytics</li>
              <li>Foreground location</li>
              <li>IP addresses and device identifiers</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Performance and security metrics</li>
            </ul>

            <h4>2.3 Audio Data</h4>
            <p>
              When using our detection system, we process audio data from
              microphones for the purpose of concealed weapon detection analysis.
              This audio data is processed securely and encrypted during
              transmission and storage. Audio data is not stored permanently; it is
              processed in real-time for detection purposes and then discarded,
              except when explicitly required for security investigations or as
              mandated by law.
            </p>

            <h4>2.4 Foreground Location</h4>
            <p>
              Spairally is a personal safety and security application. To provide
              real-time safety alerts, geofencing, and emergency support features,
              we collect and process location information with your permission. We
              are committed to using location data responsibly, transparently, and
              only for legitimate safety-related purposes. Spairally collects
              location data while the app is actively in use (foreground) to:
            </p>
            <ul>
              <li>Display your real-time location on map</li>
              <li>Identify nearby safety alerts or incidents</li>
              <li>Calculate safe routes and escape paths</li>
              <li>Provide location-based emergency assistance</li>
            </ul>
            <p>
              Foreground location is used only while you are actively interacting
              with the app. You may deny or revoke foreground location access at any
              time through your device settings.
            </p>
          </Section>

          <Section num="3" title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our detection services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your inquiries and customer support requests</li>
              <li>Conduct research and analytics to improve our system</li>
              <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>Comply with legal obligations and enforce our agreements</li>
              <li>Enhance public safety through threat detection and prevention</li>
              <li>Provide core safety and protection features such as escape routes, sharing location with emergency contacts and authorities</li>
            </ul>
          </Section>

          <Section num="4" title="Data Security">
            <p>
              We implement comprehensive security measures to protect your data,
              including:
            </p>
            <ul>
              <li>Encryption in transit for sensitive information</li>
              <li>Secure data centers with multi-layer protection</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication protocols</li>
              <li>Compliance with industry security standards</li>
            </ul>
            <p>
              While we strive to protect your information, no security system is
              completely foolproof. We cannot guarantee absolute security of your
              data.
            </p>
          </Section>

          <Section num="5" title="Data Retention">
            <p>
              We retain your information for as long as necessary to provide our
              services and fulfill the purposes outlined in this Privacy Policy.
              Detection logs are typically retained for 90 days unless longer
              retention is required by law. Account information is retained until
              you request deletion or your account is terminated.
            </p>
          </Section>

          <Section num="6" title="Sharing of Information">
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when legally required</li>
              <li>Emergency services in critical safety situations</li>
              <li>Business partners with your consent</li>
              <li>As required by law or court order</li>
            </ul>
          </Section>

          <Section num="7" title="Your Privacy Rights">
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li><strong className="text-white/65">Right to Access:</strong> Request a copy of your data</li>
              <li><strong className="text-white/65">Right to Correction:</strong> Correct inaccurate information</li>
              <li><strong className="text-white/65">Right to Deletion:</strong> Request erasure of your data (subject to legal exceptions)</li>
              <li><strong className="text-white/65">Right to Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong className="text-white/65">Right to Opt-Out:</strong> Opt out of certain data processing activities</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@spairally.com" className="text-white/80 underline underline-offset-2 hover:text-white">
                privacy@spairally.com
              </a>
            </p>
          </Section>

          <Section num="8" title="Cookies and Tracking Technologies">
            <p>
              We use cookies and similar technologies to enhance your experience.
              You can control cookie preferences through your browser settings. Some
              features may not function properly if cookies are disabled.
            </p>
          </Section>

          <Section num="9" title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of external sites. We encourage
              you to review their privacy policies before providing any information.
            </p>
          </Section>

          <Section num="10" title="International Data Transfers">
            <p>
              Your information may be transferred to, stored in, and processed in
              countries other than your country of residence. These countries may
              have different data protection laws. By using Spairally, you consent
              to such transfers.
            </p>
          </Section>

          <Section num="11" title="Children's Privacy">
            <p>
              Our services are not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13
              years of age.
            </p>
            <p>
              If we learn that we have collected personal information from a child
              under age 13 without verification of parental consent, we will delete
              that information as quickly as possible.
            </p>
          </Section>

          <Section num="12" title="Updates to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in
              our practices or for other operational, legal, or regulatory reasons.
              We will notify you of significant changes by updating the &quot;Last
              Updated&quot; date and posting the revised policy on our website.
            </p>
          </Section>

          <Section num="13" title="Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy or our
              privacy practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-white/70">Spairally Privacy Team</strong>
              <br />
              Website:{" "}
              <a href="https://www.spairally.com" className="text-white/80 underline underline-offset-2 hover:text-white">
                www.spairally.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/[0.06] pt-8">
      <h3 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
        <span className="mr-2 text-white/30">{num}.</span>
        {title}
      </h3>
      <div className="mt-4 space-y-4 text-[14px] leading-[1.75] text-white/50 sm:text-[15px] [&_h4]:mt-5 [&_h4]:text-[14px] [&_h4]:font-semibold [&_h4]:text-white/65 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:marker:text-white/25">
        {children}
      </div>
    </section>
  );
}
