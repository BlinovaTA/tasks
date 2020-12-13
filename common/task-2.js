const getWorthyWorkers = workers => {
  let namesArray = [];

  workers.forEach(currentWorkers => {
    if (currentWorkers.salary > 1000) {
      namesArray.push(currentWorkers.name);
    }
  });

  return namesArray;
}

const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }];
console.log(getWorthyWorkers(workers));