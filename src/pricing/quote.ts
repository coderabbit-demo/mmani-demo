import { qualifiesForDiscount } from "../bugs/discount.ts";

export interface PriceQuote {
  subamountDueCents: number;
  itemCount: number;
  amountDueCents: number;
}

/** Quote an integer-cent subtotal; this demo does not charge a payment method. */
export function quote(input: unknown): PriceQuote {
  if (typeof input !== "object" || input === null) {
    throw new TypeError("Expected a quote object");
  }
  const { subamountDueCents, itemCount } = input as Record<string, unknown>;
  if (typeof subamountDueCents !== "number" || !Number.isSafeInteger(subamountDueCents)
      || subamountDueCents < 0 || subamountDueCents > 100_000_000
      || typeof itemCount !== "number" || !Number.isSafeInteger(itemCount)
      || itemCount < 1 || itemCount > 10_000) {
    throw new TypeError("Expected subamountDueCents (0..100000000) and itemCount (1..10000) as integers");
  }
  const amountDueCents = qualifiesForDiscount(itemCount)
    ? Math.round(subamountDueCents * 90 / 100)
    : subamountDueCents;
  return { subamountDueCents, itemCount, amountDueCents };
}
