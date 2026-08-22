import { site } from "@/site.config";

const { address } = site.contact;

/** True when a street address has been filled in; country alone is not enough. */
export const hasPostalAddress = address.line1.trim().length > 0;

/** Single-line form, e.g. for inline prose. Falls back to the country. */
export function addressLine() {
  if (!hasPostalAddress) return address.country;

  return [
    address.line1,
    address.line2,
    address.city,
    [address.state, address.postalCode].filter(Boolean).join(" "),
    address.country,
  ]
    .filter((part) => part && part.trim().length > 0)
    .join(", ");
}

/** Block form for the contact card. */
export function PostalAddress() {
  if (!hasPostalAddress) return <>{address.country}</>;

  const cityLine = [address.city, [address.state, address.postalCode].filter(Boolean).join(" ")]
    .filter((part) => part && part.trim().length > 0)
    .join(", ");

  return (
    <>
      {address.line1}
      {address.line2 ? (
        <>
          <br />
          {address.line2}
        </>
      ) : null}
      {cityLine ? (
        <>
          <br />
          {cityLine}
        </>
      ) : null}
      <br />
      {address.country}
    </>
  );
}
