import { qualifiesForDiscount } from "../bugs/discount.ts";

export interface PriceQuote {
  subtotalCents: number;
  itemCount: number;
  totalCents: number;
}

/** Quote an integer-cent subtotal; this demo does not charge a payment method. */
export function quote(input: unknown): PriceQuote {
  if (typeof input !== "object" || input === null) {
    throw new TypeError("Expected a quote object");
  }
  const { subtotalCents, itemCount } = input as Record<string, unknown>;
  if (typeof subtotalCents !== "number" || !Number.isSafeInteger(subtotalCents)
      || subtotalCents < 0 || subtotalCents > 100_000_000
      || typeof itemCount !== "number" || !Number.isSafeInteger(itemCount)
      || itemCount < 1 || itemCount > 10_000) {
    throw new TypeError("Expected subtotalCents (0..100000000) and itemCount (1..10000) as integers");
  }
  const totalCents = qualifiesForDiscount(itemCount)
    ? Math.round(subtotalCents * 90 / 100)
    : subtotalCents;
  return { subtotalCents, itemCount, totalCents };
}
