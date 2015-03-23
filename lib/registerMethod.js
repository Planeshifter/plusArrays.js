'use strict';

function registerMethod(obj, name, fun){

	if ( typeof obj !== "object" ) {
		throw new TypeError("First argument is not an object");
	}
	if ( typeof fun !== "function" ) {
		throw new TypeError("Second argument is not a function.");
	}

	var property = {};
	property.enumerable = false;
	property.writeable = true;
	property.configurable = true;
	property.value = fun;

	if (typeof obj[name] !== "function"){
		Object.defineProperty(obj, name, property);
	}
}

module.exports = exports = registerMethod;
