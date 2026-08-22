import type { Metadata } from "next";
import { site } from "@/site.config";
import { Email } from "../components/email";

export const metadata: Metadata = { title: "Refunds & Cancellations" };

/* Template policy. Stripe checks that these terms match how you actually
   handle refunds and disputes — edit to match your real practice. */
export default function RefundsPage() {
  return (
    <article className="prose">
      <header className="section">
        <h1>Refunds &amp; Cancellations</h1>
        <p className="muted">Last updated {site.policiesUpdated}</p>
      </header>

      <section>
        <p>
          We want you to be satisfied with what you buy from {site.legalName}.
          Because our work is individually scoped, cancellations and refunds are
          handled case by case, on the principles below.
        </p>
      </section>

      <section>
        <h2>Cancelling an engagement</h2>
        <ul>
          <li>
            You may cancel an engagement at any time by contacting us in
            writing.
          </li>
          <li>
            If you cancel before work has begun, you receive a full refund of
            amounts paid for that engagement.
          </li>
          <li>
            If you cancel after work has begun, you are charged for the work
            performed up to the point we receive your cancellation, and any
            remaining balance is refunded.
          </li>
        </ul>
      </section>

      <section>
        <h2>Refunds</h2>
        <ul>
          <li>
            To request a refund, contact us with your order or invoice reference
            and the reason for the request.
          </li>
          <li>
            We respond to refund requests {site.contact.responseTime} and aim to
            reach a fair outcome with you directly.
          </li>
          <li>
            If something we delivered is not right, we will first try to put it
            right. Where that is not possible, we refund the affected portion of
            the fee.
          </li>
          <li>
            Approved refunds are returned to the original payment method. Your
            bank or card issuer decides how quickly the credit appears on your
            statement.
          </li>
        </ul>
      </section>

      <section>
        <h2>Recurring charges</h2>
        <p>
          Where a service is billed on a recurring basis, you may cancel at any
          time before the next billing date to stop future charges. Cancelling
          stops future renewals; the current period remains payable unless we
          agree otherwise.
        </p>
      </section>

      <section>
        <h2>Chargebacks</h2>
        <p>
          Please contact us before opening a dispute with your bank. Nearly
          every issue can be resolved faster by email, and we would rather fix
          the problem directly.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Refund and cancellation requests: <Email />.
        </p>
      </section>
    </article>
  );
}
