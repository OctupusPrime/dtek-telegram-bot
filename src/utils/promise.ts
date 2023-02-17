async function handler<T>(
  promise: Promise<T>
): Promise<[Awaited<T> | null, any]> {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));

    return [null, error];
  }
}

export { handler };
