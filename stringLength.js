const stringLength = (string) => {
  if (string.length <= 10 && string.length >= 1) {
    return string.length;
  } else if (string.length < 1) {
    throw new Error("Please add some string")
  } else {
    throw new Error("Your string must be less than 10 characters")
  }
}

module.exports = stringLength;