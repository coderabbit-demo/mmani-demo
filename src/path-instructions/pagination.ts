/** Convert a zero-based page index to a bounded row offset. */
export function pageOffset(page: number, pageSize: number): number {
  if (!Number.isSafeInteger(page) || page < 0
      || !Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 100
      || !Number.isSafeInteger(page * pageSize)) {
    throw new TypeError("Invalid page or page size");
  }
  return page * pageSize;
}
