//custom javascript

var graphCalc = angular.module("theModule",['ngSanitize']);

var controller1 = function($scope) {
	/*
  var operators = [
    {forms: [{regex: /e\^/, string: "e^"}], want: "exp()", check: /exp\(*\)/, changeThis: "exp", changeTo: "Math.exp"},
    {changeThis: "sqrt", changeTo: "Math.sqrt"}
  ];
  */
  var operators = ["+","-","/","*","%","^"];
  $scope.userInput = "";
  $scope.evaluate = function(input){
  	//if(input.match(/[^A-Za-z0-9\*\/\+\-_]/)) return "Not a valid expression.";
  	if(!input) return "Enter an expression";
  	if(input.match(/[^0-9A-Za-z+-/*^%()]/)) return "Not a valid expression";
	var openPar = input.match(/\(/)||[];
	var closePar = input.match(/\)/)||[];
    if(openPar.length != closePar.length) return "Check Paranetheses";
	var matches = input.match(/[+-/*^%]/)||[];
	var valid = input.match(/[0-9xe)][+-/*^%][0-9xe(]/)||[];
	if(matches.length > valid.length) return "Incomplete Statement";
	var result = "";
	for(i=0; i<10; i++) {
	  var x = i;
	  var evaluate = input.replace("x",x);
	  result += math.eval(evaluate) + "<br>";
	}

    return result;
  }
};

graphCalc.controller("controller1", controller1);