import type { Metadata } from "next";
import { site } from "@/site.config";
import { Email } from "../components/email";

export const metadata: Metadata = { title: "Terms of Service" };

/* Template terms. Have a lawyer review before relying on them. */
export default function TermsPage() {
  return (
    <article className="prose">
      <header className="section">
        <h1>Terms of Service</h1>
        <p className="muted">Last updated {site.policiesUpdated}</p>
      </header>

      <section>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of this
          website and your purchase of services from{" "}
          {site.legalName} (&ldquo;{site.shortName}&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). By purchasing from us or using this site, you agree
          to these Terms.
        </p>
      </section>

      <section>
        <h2>Services</h2>
        <p>{site.description}</p>
        <p>
          Our work is individually scoped. The services to be performed, what is
          delivered, and the applicable schedule are agreed in writing for each
          engagement, and that written scope governs where it differs from the
          general description on this site.
        </p>
      </section>

      <section>
        <h2>Pricing and payment</h2>
        <ul>
          <li>
            All prices are quoted and charged in {site.currency} and are
            exclusive of any taxes unless stated otherwise.
          </li>
          <li>
            Fees for an engagement are set out in the written quote or scope you
            accept before work begins.
          </li>
          <li>
            Payments are processed by Stripe, Inc. By paying, you also agree to
            Stripe&rsquo;s terms. We do not receive or store your full payment
            card details.
          </li>
          <li>
            Any recurring or ongoing charges will be described in writing before
            the first charge, including their amount and frequency.
          </li>
          <li>
            Invoices are due on the terms stated on the invoice. We may pause
            work on overdue accounts after written notice.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>
            Provide accurate billing information and the access, materials, and
            decisions we need to perform the work.
          </li>
          <li>
            Use our services and this website lawfully, and not to infringe the
            rights of others or to disrupt our systems.
          </li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          Unless agreed otherwise in writing, deliverables we create for you
          transfer to you on full payment. We retain ownership of our
          pre-existing tools, libraries, and know-how, and of the content of
          this website.
        </p>
      </section>

      <section>
        <h2>Cancellation and refunds</h2>
        <p>
          Cancellations and refunds are governed by our Refunds &amp;
          Cancellations policy, which forms part of these Terms.
        </p>
      </section>

      <section>
        <h2>Warranties and liability</h2>
        <p>
          We provide our services with reasonable skill and care. Except as
          required by law, the services are otherwise provided &ldquo;as
          is&rdquo; without further warranties. To the maximum extent permitted
          by law, our total liability arising out of or relating to the services
          is limited to the amount you paid us for the services giving rise to
          the claim, and we are not liable for indirect or consequential loss.
          Nothing in these Terms limits liability that cannot be limited by law.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          Either party may end an engagement with written notice. You remain
          responsible for work performed up to the effective date of
          termination, and we will deliver work completed to that point.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of{" "}
          {site.contact.governingState}, {site.contact.address.country}, without
          regard to its conflict-of-laws rules. Our services are offered from
          the {site.contact.address.country} and are not directed to any
          jurisdiction where offering them would be unlawful.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these Terms. The version published on this page at the
          time of your purchase applies to that purchase.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these Terms: <Email />.
        </p>
      </section>
    </article>
  );
}
