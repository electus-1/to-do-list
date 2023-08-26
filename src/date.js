function getToday() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Format the date as "yyyy-mm-dd"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function getTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  // Format the date as "yyyy-mm-dd"
  const formattedTomorrow = `${year}-${month}-${day}`;
  return formattedTomorrow;
}

function convertToDateObject(dateString) {
  const dateArray = dateString.split("-");
  const newDate = new Date();
  newDate.setFullYear(+dateArray[0]);
  newDate.setMonth(+dateArray[1] - 1);
  newDate.setDate(+dateArray[2]);
  return newDate;
}

function isDatePassed(minLimit, beingChecked) {
  if (typeof minLimit === "string") {
    minLimit = convertToDateObject(minLimit);
  }
  if (typeof beingChecked === "string") {
    beingChecked = convertToDateObject(beingChecked);
  }

  if (beingChecked.getFullYear() < minLimit.getFullYear()) {
    return true;
  } else if (
    beingChecked.getFullYear() === minLimit.getFullYear() &&
    beingChecked.getMonth() < minLimit.getMonth()
  ) {
    return true;
  } else if (
    beingChecked.getFullYear() === minLimit.getFullYear() &&
    beingChecked.getMonth() === minLimit.getMonth() &&
    beingChecked.getDate() < minLimit.getDate()
  ) {
    return true;
  }
  return false;
}

export { getToday, getTomorrow, isDatePassed, convertToDateObject };
