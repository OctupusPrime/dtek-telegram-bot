async function handler<T>(
  promise: Promise<T>
): Promise<[Awaited<T> | null, any]> {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    console.error(error);

    return [null, error];
  }
}

async function hadleRetry<T>(
  promise: Promise<T>,
  retry: number = 5
): Promise<[Awaited<T> | null, any]> {
  if (retry <= 0) return [null, true];

  const [data, err] = await handler<T>(promise);

  if (err) {
    if (retry === 1) return [data, err];

    return await hadleRetry(promise, retry - 1);
  }

  return [data, err];
}

export { handler, hadleRetry };
