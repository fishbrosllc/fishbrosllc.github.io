/**
 * Single source of truth for every business fact on the site.
 *
 * TODO(fishbros): Replace every value marked "PLACEHOLDER" before going live.
 * Stripe reviews these details against your account, so they must be accurate
 * and must match what you submitted during onboarding.
 */

export const site = {
  legalName: "Fishbros, LLC",
  shortName: "Fishbros",
  // Used for canonical URLs and metadata. A <user>.github.io repo serves at the root.
  url: "https://fishbrosllc.github.io",

  // One sentence, plain language: what a customer is buying.
  // PLACEHOLDER — rewrite to describe the actual product or service.
  tagline: "Custom software and technical consulting.",
  description:
    "Fishbros, LLC is a United States limited liability company providing " +
    "custom software development and technical consulting. Each engagement is " +
    "scoped individually around the client's requirements.",

  contact: {
    // The address is kept in two halves and joined in the browser at runtime,
    // so neither this file nor the HTML we publish contains a plain, scrapable
    // address. Edit the two halves rather than pasting a whole address here.
    // PLACEHOLDER — must be a monitored mailbox; Stripe and customers both use it.
    emailUser: "support",
    emailDomain: "example.com",

    // PLACEHOLDER — optional. A phone number strengthens a Stripe review, but
    // an email address on its own meets their requirement. Leave "" to hide.
    phone: "",

    // Optional. Stripe does not require a street address — an email address is
    // enough — but your country must be visible. Leave `line1` empty to show
    // the country alone and omit the rest.
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "United States",
    },

    // State the governing law of the Terms. PLACEHOLDER — your LLC's state.
    governingState: "Delaware",

    // Expected response window shown on the contact page.
    responseTime: "within 2 business days",
  },

  // Currency all prices are charged in. Stripe requires this to be stated.
  currency: "USD",

  // PLACEHOLDER — Stripe requires that customers can see what things cost
  // before they buy. Custom work is fine: give a rate, a starting price, or a
  // range rather than leaving pricing off the page entirely.
  offerings: [
    {
      name: "Consulting",
      price: "From $150 / hour",
      description:
        "Technical advice, review, and hands-on help, billed against a scope agreed in writing.",
    },
    {
      name: "Custom development",
      price: "Quoted per project",
      description:
        "Bespoke software built to your requirements. Scope and price are quoted in writing before any work starts.",
    },
  ],

  pricingNote:
    "Work is individually scoped, so most engagements are quoted rather than " +
    "sold at a fixed price. You receive a written quote covering scope and cost, " +
    "and nothing is charged until you accept it.",

  // How and when the customer receives what they paid for. Keep this general
  // enough to cover every engagement; the specifics live in each written scope.
  fulfillment:
    "What is delivered, how it is delivered, and when are agreed in writing for " +
    "each engagement before work begins.",

  // Last review date for the legal pages, shown at the top of each policy.
  policiesUpdated: "August 22, 2026",
};

export type Site = typeof site;
