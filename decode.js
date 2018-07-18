function decode (x){

	const cipher = {
 a:2,
 b:3,
 c:4,
 d:5
};

let first = x.substr(0,1);
	switch(first){

	case 'a':
		return x.substr(cipher.a,1);
			break;
	case 'b':
		return x.substr(cipher.b,1);
			break;
	case 'c':
		return x.substr(cipher.c,1);
			break;
	case 'd':
		return x.substr(cipher.d,1);
			break;
	default:
		return ' ';
   }


}

function decodeSentence (x){

const stringArray = x.split(' ');

let aggregate = '';

stringArray.forEach(x => aggregate += decode(x));

return aggregate;
}

console.log(decodeSentence(
'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));
