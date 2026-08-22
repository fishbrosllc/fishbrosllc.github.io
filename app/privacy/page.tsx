import type { Metadata } from "next";
import { site } from "@/site.config";
import { Email } from "../components/email";

export const metadata: Metadata = { title: "Privacy Policy" };

/* Template policy. Review against how you actually handle data. */
export default function PrivacyPage() {
  return (
    <article className="prose">
      <header className="section">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated {site.policiesUpdated}</p>
      </header>

      <section>
        <p>
          {site.legalName} respects your privacy. This policy explains what
          personal information we collect, why we collect it, and what you can
          do about it.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Information you give us.</strong> Your name, email address,
            billing address, and anything else you send us when you contact us
            or engage our services.
          </li>
          <li>
            <strong>Payment information.</strong> Card payments are processed by
            Stripe, Inc. Stripe receives your card details directly; we receive
            only limited information such as the last four digits, card brand,
            and whether the payment succeeded. We never see or store your full
            card number.
          </li>
          <li>
            <strong>Website usage.</strong> This site is a static site hosted on
            GitHub Pages. GitHub records standard server log information,
            including IP addresses, as described in the GitHub Privacy
            Statement. We do not run advertising or third-party analytics
            trackers on this site.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          This website does not set advertising or analytics cookies. Our
          payment processor may set cookies that are strictly necessary to
          complete a payment or to prevent fraud.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To provide, deliver, and support the services you purchase.</li>
          <li>To take payment, issue invoices, and prevent fraud.</li>
          <li>To respond to your enquiries.</li>
          <li>
            To meet legal, tax, and accounting obligations that apply to us.
          </li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share it with
          third parties for their own marketing.
        </p>
      </section>

      <section>
        <h2>Who we share information with</h2>
        <p>
          We share information only with service providers who help us operate,
          and only as needed: our payment processor (Stripe), our email and
          hosting providers, and our accountants. We may also disclose
          information where required by law.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          We keep personal information for as long as we need it for the purpose
          it was collected, and afterwards only as long as required for legal,
          tax, and accounting purposes.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use reasonable administrative and technical safeguards to protect
          personal information. No method of transmission or storage is entirely
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete, or export your personal information, or to object to
          certain processing. To make a request, email us at <Email />. We
          will respond as required by applicable law and will not discriminate
          against you for exercising these rights.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Our services are not directed to children under 13, and we do not
          knowingly collect their personal information.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          If we change this policy, we will update the date at the top of this
          page.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Privacy questions or requests: <Email />. We are based in{" "}
          {site.contact.address.country}, and information you send us may be
          processed there.
        </p>
      </section>
    </article>
  );
}
