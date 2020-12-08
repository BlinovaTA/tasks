function isHtml(path) {
  let tail = path.substr(-5, 5);
  if (tail.localeCompare(".html") === 0) {
    return true;
  } else {
    return false;
  }  
}

const path = "/users/download/index.html";
console.log(isHtml(path));