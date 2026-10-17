/** Check a developer-configured service with a bounded outbound request. */
export async function serviceIsHealthy(url: string): Promise<boolean> {
  const response = await fetch(url, { signal: AbortSignal.timeout(1_000) });
  await response.body?.cancel();
  return response.ok;
}
