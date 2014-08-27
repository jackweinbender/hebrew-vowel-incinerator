var vowels = angular.module('strip-vowels', []);

vowels.controller('mainController', ['$scope','vowels', function($scope, vowels){
    $scope.input = '';
}])
.filter('vowels', function() {
  return function(input) {

    if (!input){
        return '';
    }

    var output = input;
    // Vowels

/* */
    output = output.replace(/ָ/g, ''); // Qamets
    output = output.replace(/ַ/g, ''); // Patach
    output = output.replace(/ֲ/g, ''); // Hatef-patach
    output = output.replace(/ֵ/g, ''); // Tsere
    output = output.replace(/ֶ/g, ''); // Segol
    output = output.replace(/ֱ/g, ''); // Hatef-segol
    output = output.replace(/ִ/g, ''); // Hireq
    output = output.replace(/ֹ/g, ''); // Holem
    output = output.replace(/ֳ/g, ''); // Hatef-qamets
    output = output.replace(/ֻ/g, ''); // Qibuts
    output = output.replace(/ְ/g, ''); // Schewa
    output = output.replace(/ׇ/g, ''); // Qamets-qatan
    output = output.replace(/אָ/g, 'א'); // Aleph-qamets
    output = output.replace(/אַ/g, 'א'); // Aleph-patach
    // Other
    output = output.replace(/ּ/g, 'א'); // Mappiq
    output = output.replace(/ֽ/g, 'א'); // Meteg
    output = output.replace(/ׁ/g, 'א'); // Shin-dot
    output = output.replace(/ׂ/g, 'א'); // Sin-dot
   	// Consonants
    output = output.replace(/אּ/g, 'א');
    output = output.replace(/בּ/g, 'ב');
    output = output.replace(/גּ/g, 'ג');
    output = output.replace(/דּ/g, 'ד');
    output = output.replace(/הּ/g, 'ה');
    output = output.replace(/וּ/g, 'ו');
    output = output.replace(/זּ/g, 'ז');
    output = output.replace(/טּ/g, 'ט');
    output = output.replace(/יּ/g, 'י');
    output = output.replace(/כּ/g, 'כ');
    output = output.replace(/ךּ/g, 'ך');
    output = output.replace(/לּ/g, 'ל');
    output = output.replace(/מּ/g, 'מ');
    output = output.replace(/נּ/g, 'נ');
    output = output.replace(/סּ/g, 'ס');
    output = output.replace(/פּ/g, 'פ');
    output = output.replace(/ףּ/g, 'ף');
    output = output.replace(/צּ/g, 'צ');
    output = output.replace(/קּ/g, 'ק');
    output = output.replace(/רּ/g, 'ר');
    output = output.replace(/שּ/g, 'ש');
    output = output.replace(/שּׂ/g, 'ש');
    output = output.replace(/שּׁ/g, 'ש');
    output = output.replace(/שׂ/g, 'ש');
    output = output.replace(/שׁ/g, 'ש');
    output = output.replace(/תּ/g, 'ת');

    output = output.replace(/[1-9]/g, ' ');

   	return output;
  };
});;