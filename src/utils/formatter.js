// formatNumber
export function formatNumber(number, decimals = 2) {
  const fixedNumber = number.toFixed(decimals);
  return fixedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// formatDates
export function formatDate(dateString, format = "DD/MM/YYYY") {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-GB", options).split("/");

  switch (format) {
    case "DD/MM/YYYY":
      return `${formattedDate[0]}/${formattedDate[1]}/${formattedDate[2]}`;
    case "MM/DD/YYYY":
      return `${formattedDate[1]}/${formattedDate[0]}/${formattedDate[2]}`;
    case "YYYY/MM/DD":
      return `${formattedDate[2]}/${formattedDate[1]}/${formattedDate[0]}`;
    default:
      return dateString;
  }
}
