function tell(x){
	if(x.boss){console.log(x.boss +' is the boss of ' + x.name);}
	else{console.log(x.name + ' doesn\'t have a boss!');}
}

const objectA = { name: 'tob', title: 'boss'};
const objectB = { name: 'bob', title: 'junior dev', boss: 'cob'};
const objectC = { name: 'job', title: 'kind of a dev', boss: 'rob'};

const objectArray = [objectA, objectB,objectC];

//objectArray.forEach(x => console.log('name: ' +x.name+ ', Job title: ' +x.title));
objectArray.forEach(x => tell(x));

