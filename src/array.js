function registerMethod(obj, name, fun){
  
	if (typeof obj !== "object") { throw new TypeError("First argument is not an object") };
	if (typeof fun !== "function") { throw new TypeError("Second argument is not a function.") };
	
	var property = {};
	property.enumerable = false;
	property.writeable = true;
	property.configurable = true;
	property.value = fun;
	
	if (typeof obj[name] !== "function"){
		Object.defineProperty(obj, name, property);
	}
}

registerMethod(Array.prototype, "contains", function(elem){
	for (var q = 0; q < this.length; q++)
    {
    if (elem == this[q]) 
        {
        return true;
        }
    }
	return false;	
});

registerMethod(Array.prototype, "pickRandom", function(){
	var a = parseInt( Math.random() * this.length, 10);
	return this[a];	
});

registerMethod(Array.prototype, "pickRandomElements",function(no){
	if (no > this.length) no = this.length;

	var list = [];
	
	while(list.length < no)
	  {
	  var t = parseInt(Math.random() * this.length);
	  if (list.contains(t) == false) list.push(t);
	  }
	  
	var target = [];
	
	for (var i = 0; i < list.length; i++)
	  {
	  target.push (this[ list[i]] );  
	  }
	
	return target;
});

registerMethod(Array.prototype, "containsAll", function(list){
	for (var i = 0; i < list.length; i++)
	  {   
	  if (this.contains(list[i]) == false) return  false;
	  } 
	return true;  	
});

registerMethod(Array.prototye, "removeItem", function(index){		
	var list = [];	
	for (var q = 0; q < this.length; q++)
	  {   
	  if (q != index) 
	  list.push(this[q]);
	  }
	  
	 this.length = 0; 
 	 for (var q = 0; q < list.length; q++)
  		{   
  		this.push(list[q]);
 		}
});

registerMethod(Array.prototype, "remix", function(){
	var x = this.length;
	var newsort = [];
	
	for (var q = 0; q < x; q++)
		{
		newsort.push(q);	
		}
	
	var res = newsort.pickRandomElements(x);
	var target = [];
	
	for (var q = 0; q < res.length; q++)
		{
		var x = res[q];
		target.push( this[x] );  	
		}
	
	return target;	
});
