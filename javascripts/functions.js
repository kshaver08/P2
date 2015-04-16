"use strict";

//P2, 4A;
var isArmstrong = function(n){
	var sum = 0;
	n = String(n);

	for(var i = 0; i < n.length ; i++)
		sum = sum + Math.pow(n[i], n.length);

	if(sum == n)
		return "True";
	else
		return "False";
};


//P2, 4B;
var allArmstrongs = function(){
	var result = '';
	//step 1: generate
	for(var k = 1; k <= 99999; k++)
		//test for armstrong property
		if(isArmstrong(k) == "True")
			result = result + k + " ";
	return result; 
};


//P2, 4C;

	/*
	Write a function named allSubstrings1 that accepts a string
	s and returns a string representing all substrings of s, commaseparated.

	Examples:
	allSubstrings1('dog') => 'd,do,dog,o,og,g'
	allSubstrings1('at') => 'a, at, t'
	*/

var allSubstrings1 = function(s){
	var result = '';
	var result2 = '';
	s = String(s);

	//result = substring(0) + "," + substring(0,1) + "," + substring(0,2)

	for(var i = 0; i <= s.length; i++)
		result = result + s.substring(0,i) + ",";

	for(var i = 2; i <= s.length; i++)
		result2 = result2 + s.substring(1,i) + ",";

	/*for(var i = 0; i <= s.length; i++)
		result = result + s.substring(i) + ",";

	for(var k = s.length; k >= 0; k--)
		result2 = s.substring(k-1) + "," + result2;*/

	return result + result2;
};


















