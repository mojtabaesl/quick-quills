export const removeTrailingAndLeadingSlashes = (str: string): string =>
  str.replace(/^(\/+)|(\/+)$/g, '');

export const comparePaths = (
  path1: string,
  path2: string,
  options?: Intl.CollatorOptions
): number => {
  const normalPath1 = removeTrailingAndLeadingSlashes(path1);
  const normalPath2 = removeTrailingAndLeadingSlashes(path2);
  return normalPath1.localeCompare(normalPath2, undefined, options);
};
