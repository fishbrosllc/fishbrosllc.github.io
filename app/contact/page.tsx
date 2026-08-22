import type { Metadata } from "next";
import { site } from "@/site.config";
import { Email, Phone } from "../components/email";
import { PostalAddress, hasPostalAddress } from "../components/address";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="stack">
      <section className="section">
        <h1>Contact</h1>
        <p className="lede">
          Email is the fastest way to reach us. We reply{" "}
          {site.contact.responseTime}.
        </p>
      </section>

      <section className="section">
        <div className="card">
          <dl className="detail-list">
            <dt>Legal name</dt>
            <dd>{site.legalName}</dd>

            <dt>Email</dt>
            <dd>
              <Email />
            </dd>

            {site.contact.phone ? (
              <>
                <dt>Phone</dt>
                <dd>
                  <Phone />
                </dd>
              </>
            ) : null}

            <dt>{hasPostalAddress ? "Mailing address" : "Located in"}</dt>
            <dd>
              <PostalAddress />
            </dd>
          </dl>
        </div>
      </section>

      <section className="section">
        <h2>Billing and support</h2>
        <p>
          For questions about a charge, an invoice, a cancellation, or a refund,
          email us with your order or invoice reference. Please get in touch
          before opening a dispute with your bank — we can almost always resolve
          it faster directly.
        </p>
      </section>
    </div>
  );
}
