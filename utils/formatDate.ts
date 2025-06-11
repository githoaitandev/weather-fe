export const getFormattedDateTime = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now); // "2025-06-07"
};
