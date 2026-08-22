import Link from "next/link";
import { site } from "@/site.config";
import { Email, Phone } from "./components/email";
import { PostalAddress, hasPostalAddress } from "./components/address";

export default function HomePage() {
  return (
    <div className="stack">
      <section className="section">
        <p className="eyebrow">{site.contact.address.country}</p>
        <h1>{site.legalName}</h1>
        <p className="lede">{site.tagline}</p>
      </section>

      <section className="section">
        <h2>What we do</h2>
        <p>{site.description}</p>
      </section>

      <section className="section">
        <h2>Services and pricing</h2>
        <div className="card-grid">
          {site.offerings.map((offering) => (
            <div key={offering.name} className="card">
              <h3>{offering.name}</h3>
              <p className="price">{offering.price}</p>
              <p className="muted">{offering.description}</p>
            </div>
          ))}
        </div>
        <p className="muted">{site.pricingNote}</p>
        <p className="muted">
          All prices are shown and charged in {site.currency}. Payments are
          processed by Stripe; we never store your full card details.
        </p>
      </section>

      <section className="section">
        <h2>How engagements work</h2>
        <p>{site.fulfillment}</p>
      </section>

      <section className="section">
        <h2>Contact us</h2>
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

            <dt>{hasPostalAddress ? "Address" : "Located in"}</dt>
            <dd>
              <PostalAddress />
            </dd>
          </dl>
        </div>
        <p className="muted">
          We reply to support enquiries {site.contact.responseTime}. See our{" "}
          <Link href="/terms/">Terms of Service</Link>,{" "}
          <Link href="/privacy/">Privacy Policy</Link>, and{" "}
          <Link href="/refunds/">Refunds &amp; Cancellations</Link> policy.
        </p>
      </section>
    </div>
  );
}
