/**
 * Table column that formats dates
 * @param value a string
 * @returns a formatted date
 */

export const formatDate = (value: string) => {
  if (value) {
    const dateObject = new Date(value);
    const formattedDate = dateObject.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  }
  return null;
};
