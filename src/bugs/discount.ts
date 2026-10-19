/** Check the TEAM10 item-count threshold. */
export function qualifiesForDiscount(itemCount: number): boolean {
  return itemCount > 10;
}
