var app = angular.module('lottoApp', []);

app.controller('lottoCtrl', function($scope){
	$scope.l_numbers = '...';
	$scope.b_disable = true;
	
	$scope.pick = function(){
		var selected = document.getElementsByName('l_variant')[0].value;
		var rnd_number, i=1, checker, w_array = [], l_array = [];
		
		while(i<=6){
			rnd_number = Math.floor((Math.random() * selected) + 1);
			checker = l_array.indexOf(rnd_number);
		
			if(checker == -1){
				l_array.push(rnd_number);
				i++;
			}
		}
		$scope.l_numbers = l_array;
		$scope.b_disable = false;
	}						
});