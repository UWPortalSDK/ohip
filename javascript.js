angular.module('portalApp')
.controller('ohipCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
	$scope.items = [
		{
			title:'Student Coverage Card',
			tags: []

		},
		{
			title:'Benefits',
			tags: []
        },
		{
			title:'Appointment',
			tags: [],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Health History',
			tags: []
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
		// Make the item that user clicked available to the template\
		console.log("**********", item);
		if(item.title=='Appointment'){
        	$scope.portalHelpers.showView('appointmentView.html', 1);
        } else if(item.title == 'Student Coverage Card') {
        	$scope.portalHelpers.showView('sccView.html', 1);
        } else if(item.title == 'Benefits') {
        	location.href = 'https://www.uwo.ca/international/iesc/current/health_care_in_canada/uhip/index.html';
        } else if(item.title == 'Health History') {
        	$scope.portalHelpers.showView('HealthHistoryView.html', 1);
        }   
        else{
        		$scope.detailsItem = item;		
				$scope.portalHelpers.showView('ohipDetails.html', 2);
        }
        
	}
}]);