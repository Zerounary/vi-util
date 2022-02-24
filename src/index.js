const INDEX_NOT_FOUND = -1;


let subBetween = (str = "", before = "", after = "") => {
  if (str === "" || (before === "" && after === "")) {
    return str;
  }

  let start = str.indexOf(before);
  if (start != INDEX_NOT_FOUND) {
    if (after === "") {
      return str.substring(start + before.length);
    }
    let end = str.indexOf(after, start + before.length);
    if (end != INDEX_NOT_FOUND) {
      return str.substring(start + before.length, end);
    }else {
      return str.substring(start + before.length);
    }
  }
  return "";
};

module.exports = {
  hi: () => {
    return "Hi libs!";
  },
  subBetween,
};
