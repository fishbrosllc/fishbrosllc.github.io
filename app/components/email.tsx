"use client";

import { useEffect, useState } from "react";
import { site } from "@/site.config";

const { emailUser, emailDomain } = site.contact;

/**
 * Renders the support address without ever putting it, or a mailto: link,
 * into the exported HTML. Harvesters that only read markup see the munged
 * "user (at) domain" form; the real link is assembled in the browser after
 * hydration. A scraper that executes JavaScript can still read it — this
 * raises the cost, it does not make the address private.
 */
export function Email() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(`${emailUser}\u0040${emailDomain}`);
  }, []);

  if (address === null) {
    return (
      <span translate="no">
        {emailUser} (at) {emailDomain}
      </span>
    );
  }

  return <a href={`mailto:${address}`}>{address}</a>;
}

/** The same treatment for the optional phone number. */
export function Phone() {
  const [number, setNumber] = useState<string | null>(null);

  useEffect(() => {
    setNumber(site.contact.phone);
  }, []);

  if (!number) {
    return <span translate="no">{site.contact.phone.replace(/\d/g, "\u2022")}</span>;
  }

  return <a href={`tel:${number.replace(/[^\d+]/g, "")}`}>{number}</a>;
}
