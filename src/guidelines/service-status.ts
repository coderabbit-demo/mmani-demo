/** Check a developer-configured service. */
export async function serviceIsHealthy(url: string): Promise<boolean> {
  const response = await fetch(url);
  await response.body?.cancel();
  return response.ok;
}
