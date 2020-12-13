const isHtml = path => {
  const tail = path.slice(-5);
  return tail === ".html";
}

const path = "/users/download/index.html";
console.log(isHtml(path));