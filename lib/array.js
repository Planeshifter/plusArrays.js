'use strict';

function registerMethod(obj, name, fun){

	if (typeof obj !== "object") { throw new TypeError("First argument is not an object"); }
	if (typeof fun !== "function") { throw new TypeError("Second argument is not a function."); }

	var property = {};
	property.enumerable = false;
	property.writeable = true;
	property.configurable = true;
	property.value = fun;

	if (typeof obj[name] !== "function"){
		Object.defineProperty(obj, name, property);
	}
}

registerMethod(Array.prototype, "compare",function(testArr){
  if (this.length != testArr.length) return false;
  for (var i = 0; i < testArr.length; i++) {
	  if (this[i].compare) {
	      if (!this[i].compare(testArr[i])) return false;
	  }
	  if (this[i] !== testArr[i]) return false;
	}
  return true;
});


registerMethod(Array.prototype, "sum", function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
});

registerMethod(Array.prototype, "max", function(){
	return Math.max.apply( Math, this);
});


registerMethod(Array.prototype, "min", function(){
	return Math.min.apply( Math, this);
});

registerMethod(Array.prototype, "clean", function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
});

registerMethod(Array.prototype, "contains", function(elem){
	for (var q = 0; q < this.length; q++){
    if (elem == this[q]){
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
	while(list.length < no){
	  var t = parseInt(Math.random() * this.length);
	  if (list.contains(t) === false) list.push(t);
	}
	var target = [];
	for (var i = 0; i < list.length; i++){
	  target.push (this[ list[i]] );
	 }
	return target;
});

registerMethod(Array.prototype, "containsAll", function(list){
  for (var i = 0; i < list.length; i++){
	  if (this.contains(list[i]) === false) return  false;
	}
	return true;
});

registerMethod(Array.prototype, "containsAny", function(list){
	for (var i = 0; i < list.length; i++){
	  if (this.contains(list[i]) === true) return  true;
	}
	return false;
});

registerMethod(Array.prototype, "removeItemAt", function(index){
  var list = [];
	for (var q = 0; q < this.length; q++){
	  if (q != index)
	  list.push(this[q]);
	}
  this.length = 0;
  for (var l = 0; l < list.length; l++){
		this.push(list[l]);
 	}
});

registerMethod(Array.prototype, "remix", function(){
	var x = this.length;
	var newsort = [];

	for (var q = 0; q < x; q++){
		newsort.push(q);
	}

	var res = newsort.pickRandomElements(x);
	var target = [];

	for (var l = 0; l < res.length; l++){
		var x2 = res[l];
		target.push( this[x2] );
	}
	return target;
});

registerMethod(Array.prototype, "unique", function(){
	var res = [];
	for(var i = 0; i <= this.length; i++){
		var elem = this[i];
		if (res.contains(elem) === false) res.push(elem);
	}
});

registerMethod(Array.prototype, "concatUnique", function(arr2){
  var arr1 = this;
  return arr1.concat(arr2.filter(function(e){
	  return !arr1.contains(e);
	}));
});
