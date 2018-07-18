function createCharacter(u,v,w,x,y,z){
	this.name = u;
	this.nickname = v;
	this.race = w;
	this.origin = x;
	this.atk = y;
	this.def = z;
        this.describe = function(){console.log(this.name + ' is a '+this.race+' from '+this.origin+'.');};
	this.evaluateFight = function(x){
	let taken = 0; let out = 0;
	if(x.atk > this.def){taken = x.atk - this.def}
	if(this.atk > x.def){out = this.atk - x.def}
	console.log('damage dealt: ' +out+ ', damage received: ' +taken+ '.');
	};
}


const frodo = new createCharacter('Frodo Baggins', 'frodo', 'hobbit','The Shire', 5,3);
const gandalf = new createCharacter('Gandalf the Grey','gandalf','wizard','middle earth',10,5);
const aragon = new createCharacter('Aragon son of Arathorn','aragon','man','Dunnedain',7,3);


const charArray = [frodo,gandalf,aragon];

charArray.find(x => x.nickname === 'aragon')
	 .describe();
const hobbitArray = charArray.filter(x => x.race === 'hobbit');
console.log(hobbitArray);
const atkOverFiveArray=charArray.filter(x => x.atk > 5);
console.log(atkOverFiveArray);
