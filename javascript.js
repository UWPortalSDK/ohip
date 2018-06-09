angular.module('portalApp')
.controller('ohipCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Student coverage Card',
			tags: ['Upload Document'],
			details: 'https://uwaterloo.ca/human-resources/support-employees/benefits/university-health-insurance-plan-uhip'
            

		},
		{
			title:'Benefits',
			tags: ['tag D', 'tag E', 'tag F'],
			details: 'https://www.uwo.ca/international/iesc/current/health_care_in_canada/uhip/index.html'
            linkText: 'International Students'
            linkText: 'Canadian Students'
		},
		{
			title:'Item 3',
			tags: ['tag A', 'tag H'],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Item 4',
			tags: ['tag I'],
			details: 'Proin sem quam, rutrum id ante id, scelerisque tempor quam. Curabitur pharetra turpis at sem placerat, non vehicula ligula tincidunt.'
		},
		{
			title:'Item 5',
			tags: ['tag C', 'tag K', 'tag B'],
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'Item 6',
			tags: ['tag A', 'tag B', 'tag C'],
			details: 'Curabitur scelerisque lorem risus, in luctus orci hendrerit non. Praesent quis tellus dapibus dolor consectetur volutpat.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('ohipMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('ohipDetails.html', 2);
	}
}]);