const objectA = { name: 'tob', title: 'senior dev'};
const objectB = { name: 'bob', title: 'junior dev'};
const objectC = { name: 'job', title: 'kind of a dev'};

const objectArray = [objectA, objectB,objectC];

objectArray.forEach(x => console.log('name: ' +x.name+ ', Job title: ' +x.title));
