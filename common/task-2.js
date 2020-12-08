function getWorthyWorkers(workers) {
  let namesArray = [];

  for (let i = 0; i < workers.length; i++) {
    if (workers[i].salary > 1000) {
      namesArray.push(workers[i].name);
    }
  }

  return namesArray;
}

const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }];
console.log(getWorthyWorkers(workers));