function wrap(string, numColumns) {
  if (string.length === 0) {
    return string;
  }
  if (string.length <= numColumns) {
    return string;
  } else {
    let wrapped = "";
    while (string.length > numColumns) {
      const lastSpaceIndexOnLine = string.lastIndexOf(' ', numColumns) + 1;
      wrapped += string.slice(0, lastSpaceIndexOnLine) + '\n';
      string = string.slice(lastSpaceIndexOnLine);
    }
    wrapped += string;
    return wrapped;
  }
}

// console.log(wrap("Hello, we are Jen and Kimberley!", 10));

module.exports = wrap;
