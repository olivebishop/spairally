import Link from "next/link";
import GrainOverlay from "@/app/shared/grain";

export default function TermsPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#080808] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 font-[var(--font-inter),system-ui,sans-serif]">
      <GrainOverlay position="absolute" />

      {/* Radar arcs */}
      <svg
        className="pointer-events-none absolute top-0 right-0 z-0 hidden lg:block"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        aria-hidden
        style={{ transform: "translate(20%, -25%)" }}
      >
        <circle cx="520" cy="0" r="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle cx="520" cy="0" r="240" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
        <circle cx="520" cy="0" r="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="520" cy="0" r="500" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px] leading-[1.12]">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-[14px] text-white/40">Last Updated: January 2026</p>

        <div className="legal-content mt-10 space-y-10">
          <Section num="1" title="Agreement to Terms">
            <p>
              By accessing or using Spairally&apos;s concealed weapon detection
              system and services (&quot;Services&quot;), you agree to be bound by
              these Terms and Conditions (&quot;Terms&quot;). If you disagree with
              any part of these Terms, you may not access or use our Services.
            </p>
            <p>
              These Terms apply to all users of the Services, including
              organizations, administrators, and end-users who access the system
              through their mobile devices.
            </p>
          </Section>

          <Section num="2" title="Description of Services">
            <p>
              Spairally provides an AI-powered concealed weapon detection system
              that utilizes smartphone microphone data to identify potential
              threats. Our Services include:
            </p>
            <ul>
              <li>Real-time audio analysis for weapon detection</li>
              <li>Threat alert notifications to designated authorities</li>
              <li>Safety monitoring dashboard and analytics</li>
              <li>Integration with organizational security systems</li>
              <li>Support and maintenance services</li>
            </ul>
          </Section>

          <Section num="3" title="User Accounts and Registration">
            <h4>3.1 Account Creation</h4>
            <p>
              To access certain features of our Services, you must register for an
              account. You agree to provide accurate, current, and complete
              information during registration and to update such information to keep
              it accurate and current.
            </p>
            <h4>3.2 Account Security</h4>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You must notify us immediately of any unauthorized use of
              your account.
            </p>
            <h4>3.3 Organizational Accounts</h4>
            <p>
              Organizations using Spairally are responsible for ensuring that their
              authorized users comply with these Terms and for any actions taken
              through their organizational account.
            </p>
          </Section>

          <Section num="4" title="Acceptable Use Policy">
            <p>You agree not to use the Services to:</p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Use the Services for any illegal, harmful, or malicious purposes</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Remove, alter, or obscure any proprietary notices on the Services</li>
              <li>Use the Services to harass, abuse, or harm others</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
            </ul>
          </Section>

          <Section num="5" title="Data Collection and Privacy">
            <p>
              Our collection, use, and protection of your data is governed by our{" "}
              <Link href="/privacy" className="text-white/80 underline underline-offset-2 hover:text-white">
                Privacy Policy
              </Link>
              . By using the Services, you consent to our data practices as
              described in the Privacy Policy.
            </p>
            <p>
              You acknowledge that the Services process audio data from microphones
              for security purposes and that this processing is essential to the
              functionality of our weapon detection system.
            </p>
          </Section>

          <Section num="6" title="Intellectual Property Rights">
            <h4>6.1 Spairally Ownership</h4>
            <p>
              The Services, including all content, features, functionality,
              algorithms, and technology, are owned by Spairally and are protected
              by copyright, trademark, patent, and other intellectual property laws.
            </p>
            <h4>6.2 Limited License</h4>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to access and use the Services solely for their intended
              security purposes and in accordance with these Terms.
            </p>
            <h4>6.3 Trademarks</h4>
            <p>
              &quot;Spairally&quot; and our logo are trademarks of Spairally. You
              may not use these trademarks without our prior written permission.
            </p>
          </Section>

          <Section num="7" title="Service Availability and Modifications">
            <p>
              We strive to provide reliable and continuous service, but we do not
              guarantee that the Services will be uninterrupted, error-free, or
              completely secure. We reserve the right to:
            </p>
            <ul>
              <li>Modify, suspend, or discontinue any aspect of the Services at any time</li>
              <li>Perform maintenance and updates with or without notice</li>
              <li>Change pricing, features, or service offerings</li>
              <li>Limit access to certain features or areas of the Services</li>
            </ul>
          </Section>

          <Section num="8" title="Subscription and Payments">
            <h4>8.1 Fees</h4>
            <p>
              Access to certain features of the Services may require payment of
              fees. All fees are non-refundable unless otherwise stated or required
              by law.
            </p>
            <h4>8.2 Billing</h4>
            <p>
              For subscription-based services, you authorize us to charge your
              payment method on a recurring basis. You must provide current,
              complete, and accurate billing information.
            </p>
            <h4>8.3 Price Changes</h4>
            <p>
              We reserve the right to change our fees at any time. We will provide
              reasonable notice of any fee changes before they take effect.
            </p>
          </Section>

          <Section num="9" title="Limitation of Liability">
            <p className="uppercase text-white/60 text-[13px]">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPAIRALLY SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
              OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
              LOSSES.
            </p>
            <p>
              Our total liability to you for any claims arising from or related to
              the Services shall not exceed the amount you paid to us for the
              Services in the twelve (12) months preceding the claim.
            </p>
            <p>
              The Services are designed to assist in threat detection but should not
              be relied upon as the sole means of security. We do not guarantee that
              all threats will be detected or prevented.
            </p>
          </Section>

          <Section num="10" title="Disclaimer of Warranties">
            <p className="uppercase text-white/60 text-[13px]">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF
              PERFORMANCE.
            </p>
            <p>
              We do not warrant that the Services will meet your requirements, be
              uninterrupted, timely, secure, or error-free, or that all threats will
              be detected or prevented.
            </p>
          </Section>

          <Section num="11" title="Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Spairally, its
              officers, directors, employees, agents, and partners from and against
              any claims, liabilities, damages, losses, and expenses arising out of
              or in any way connected with:
            </p>
            <ul>
              <li>Your access to or use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or data you submit through the Services</li>
            </ul>
          </Section>

          <Section num="12" title="Termination">
            <p>
              We may terminate or suspend your access to the Services immediately,
              without prior notice or liability, for any reason, including if you
              breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately
              cease. All provisions of these Terms that by their nature should
              survive termination shall survive, including ownership provisions,
              warranty disclaimers, and limitations of liability.
            </p>
            <p>
              You may terminate your account at any time by contacting us. Upon
              termination, we will delete or anonymize your data in accordance with
              our Privacy Policy and applicable law.
            </p>
          </Section>

          <Section num="13" title="Governing Law and Dispute Resolution">
            <h4>13.1 Governing Law</h4>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the jurisdiction in which Spairally is registered, without
              regard to its conflict of law provisions.
            </p>
            <h4>13.2 Dispute Resolution</h4>
            <p>
              Any dispute arising from these Terms or the Services shall first be
              attempted to be resolved through good faith negotiations. If
              negotiations fail, disputes shall be resolved through binding
              arbitration in accordance with applicable arbitration rules.
            </p>
          </Section>

          <Section num="14" title="Emergency Services">
            <p>
              While Spairally provides threat detection and alerting capabilities,
              the Services are not a substitute for emergency services. In case of
              an emergency, you should immediately contact local emergency services
              (911 or equivalent) rather than relying solely on our Services.
            </p>
          </Section>

          <Section num="15" title="Compliance with Laws">
            <p>
              You are responsible for ensuring that your use of the Services
              complies with all applicable local, state, national, and international
              laws and regulations, including those related to privacy, data
              collection, and surveillance.
            </p>
          </Section>

          <Section num="16" title="Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of material changes by updating the &quot;Last
              Updated&quot; date and posting the revised Terms on our website. Your
              continued use of the Services after such changes constitutes your
              acceptance of the new Terms.
            </p>
          </Section>

          <Section num="17" title="Severability">
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall remain in full force and
              effect. The invalid or unenforceable provision shall be replaced with
              a valid provision that most closely matches the intent of the original
              provision.
            </p>
          </Section>

          <Section num="18" title="Entire Agreement">
            <p>
              These Terms, together with our Privacy Policy and any other legal
              notices published by us on the Services, constitute the entire
              agreement between you and Spairally regarding your use of the
              Services.
            </p>
          </Section>

          <Section num="19" title="Contact Information">
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-white/70">Spairally Legal Team</strong>
              <br />
              Email:{" "}
              <a href="mailto:legal@spairally.com" className="text-white/80 underline underline-offset-2 hover:text-white">
                legal@spairally.com
              </a>
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
