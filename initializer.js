const loaf = {
	flour: 300,	
	water: 210,
	hydration: function(){return this.flour/this.water*100} 


};

console.log('Hydration: ' + loaf.hydration());
