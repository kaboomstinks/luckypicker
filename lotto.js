var app = angular.module('lottoApp', []);

app.controller('lottoCtrl', function($scope){
	$scope.l_numbers = '...';
	$scope.b_disable = true;
	
	$scope.pick = function(){
		var selected = document.getElementsByName('l_variant')[0].value;	// get value of selected select tag
		var rnd_number, checker, lotto_num = '', i=1, l_array = [];			
		
		while(i<=6){
			rnd_number = Math.floor((Math.random() * selected) + 1);		// produce a random number base on the selected lotto variant
			checker = l_array.indexOf(rnd_number);							// check if random number was chosen already
		
			if(checker == -1){												// if it's not, push it in the l_array
				l_array.push(rnd_number);
				i++;
			}
		}
		
		for(i=1; i<=6; i++){
			lotto_num += l_array.pop() + ',';								// remove all the numbers from being inside an array
		}
		
		lotto_num = lotto_num.substring(0, lotto_num.length - 1);			// remove comma on the last part of the string
		$scope.l_numbers = lotto_num;
		$scope.b_disable = false;
	}						
});