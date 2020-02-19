export const mapToCollection = <A, B>(collection: A[], mapFn: (arg0: A) => B): B[] =>
  Array.isArray(collection) ? collection.map(mapFn) : [];
