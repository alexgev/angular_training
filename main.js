// var app = angular.module('app', []);

var app = angular.module('app', []);
app.controller('defaultCtrl', function($scope) {
	$scope.word = "Habrahabra";
	$scope.log = '';
})
app.directive('habraHabrNotWork', function() {
	return {
		link: function(scope, element, attrs) {
			element.html("<div>{{"+attrs.habraHabrWork+"}}"+attrs.habra+"</div>");
		}
	}
})
app.directive('habraHabrWork', function() {
	return {
		compile: function(templateElement, templateAttrs) {
			templateElement.prepend("<div>{{"+templateAttrs.habraHabrWork+"}}"+templateAttrs.habra+"</div>");
			return {
				pre: function ($scope, element, attrs, controller) {
					$scope.log+=templateAttrs.habra +' preLink \n';
				},
				post: function ($scope, element, attrs, controller) {
					$scope.log+=templateAttrs.habra +' postLink \n';
				}
			}
		},
		link: function(scope, element, attrs) {

		}
	}
})









// var app = angular.module('app', ['directiveModule', 'customServices']);

// app.controller('defaultCtrl', function($scope, logService, errorService) {
// 	$scope.buttons = {
// 		names: ['button 1', 'button 2', 'button 3'],
// 		totalClicks: 0		
// 	}
// 	$scope.$watch('buttons.totalClicks', function(newValue) {
// 		if (newValue < 5) {
// 			logService.log('Total click count: ' + newValue);
// 		} else {
// 			errorService.log('Total click count: ' + newValue);
// 		}
// 	})
// })










// app.controller('appCtrl', function($scope) {
// 	$scope.items = [
// 		{ name: 'Item 1', price: 10.9, category: 'Category 1', count: 10, tax: 1.12, expiration: 2 },
// 		{ name: 'Item 2', price: 1.1, category: 'Category 1', count: 20, tax: 1.55, expiration: 5 },
// 		{ name: 'Item 3', price: 2.6, category: 'Category 2', count: 33, tax: 0.12, expiration: 3 },
// 		{ name: 'Item 4', price: 17.5, category: 'Category 3', count: 1, tax: 3.1, expiration: 9 },
// 		{ name: 'Item 5', price: 52.6, category: 'Category 3', count: 4, tax: 4.7, expiration: 15 },
// 		{ name: 'Item 6', price: 102.6, category: 'Category 2', count: 5, tax: 0.32, expiration: 40 },
// 		{ name: 'Item 7', price: 112.6, category: 'Category 2', count: 9, tax: 0.62, expiration: 60 },
// 		{ name: 'Item 8', price: 8.6, category: 'Category 1', count: 55, tax: 0.92, expiration: 55 },
// 	];
// 	$scope.sortFunc = function(value) {
// 		return value.expiration < 10 ? 0 : value.price;
// 	}
// })



// app.controller('baseCtrl', function($scope, $interval) {
// 	$scope.counter = 0;

// 	$scope.$watch('counter', function(newValue, oldValue) {
// 		console.log('New Value = ', newValue, " Old Value = ", oldValue);
// 	})
// 	$scope.increment = function(val) {
// 		$scope.counter += val;
// 	}
// 	setInterval(function() {
// 		$scope.$apply(function() {
// 			$scope.counter++;
// 		})
// 	}, 1000);
// 	console.log($scope.$$watchers);
// })













// app.controller('baseCtrl', function($scope, $interval) {
// 	$scope.counter = 0;

// 	$scope.$watch('counter', function(newValue, oldValue) {
// 		console.log('New Value = ', newValue, " Old Value = ", oldValue);
// 	})
// 	$scope.increment = function(val) {
// 		$scope.counter += val;
// 	}
// 	setInterval(function() {
// 		$scope.counter++;
// 		$scope.$digest();
// 	}, 1000);
// })













// app.controller('baseCtrl', function($scope, $interval) {
// 	$scope.counter = 0;

// 	$scope.$watch('counter', function(newValue, oldValue) {
// 		console.log('New Value = ', newValue, " Old Value = ", oldValue);
// 	})
// 	$scope.increment = function(val) {
// 		$scope.counter += val;
// 	}
// 	// $interval(function() {
// 	// 	$scope.counter++;
// 	// }, 1000);
// 	console.log($scope.$$watchers);
// })













// app.controller('testCtrl', function($scope) {
//     $scope.send = function() {
//         $scope.$emit('sendMessage', {
//             message: $scope.messageInput
//         })
//     }
//     $scope.$on('sendMessage', function(event, args) {
//         $scope.info = args.message;
//     })
// })










// app.controller('senderCtrl', function($scope, $rootScope) {
//     $scope.send = function() {
//         console.log('send');
//         $rootScope.$broadcast('messageEvent', {
//             message: $scope.messageInput
//         })
//     }
// })

// app.controller('receiverCtrl', function($scope) {
//     $scope.$on('messageEvent', function(event, args) {
//         console.log(event);
//         $scope.info = args.message;
//     })
// })














// app.controller('baseCtrl', function($scope) {
//     $scope.value = 'base value';
//     $scope.changeValue1 = function() {
//         $scope.value = 'changeValue1' + new Date().toLocaleTimeString();
//     }
// })

// app.controller('derivedCtrl', function($scope) {
//     $scope.changeValue2 = function() {
//         $scope.value = 'changeValue2' + new Date().toLocaleTimeString();
//     }
// })









// angular.module('app', [])
//     .controller('appCtrl', function($scope) {
//         $scope.addUser = function(newUser) {
//             $scope.message = newUser.name + ' ' + newUser.email + ' ' + newUser.agreed;
//         }
//         $scope.message = 'Ready';
//         $scope.getError = function(error) {
//             if (angular.isDefined(error)) {
//                 if (error.required) {
//                     return 'Поле не должно быть пустым';
//                 } else if (error.email) {
//                     return 'Введите правильный email';
//                 }
//             }
//         }
//     })










// angular.module('app', [])
//     .controller('appCtrl', function($scope) {
//         $scope.tasks = [
//             { action: 'Task 1', complete: false, priority: "Normal" },
//             { action: 'Task 2', complete: true, priority: "Normal" },
//             { action: 'Task 3', complete: true, priority: "Normal" },
//             { action: 'Task 4', complete: false, priority: "Normal" }
//         ]
//         $scope.addTask = function(task) {
//             if (angular.isDefined(task) &&
//                 angular.isDefined(task.action) &&
//                 angular.isDefined(task.priority)) {
//                 $scope.tasks.push({
//                     action: task.action,
//                     complete: false,
//                     priority: task.priority
//                 })
//             }
//         }
//     })





// app.controller('appCtrl', function($scope) {
//     $scope.selectedClass = 'lightGreen';

//     $scope.classNames = [
//         { displayName: 'Light Green', value: "lightGreen" },
//         { displayName: 'Light Blue', value: "lightBlue" },
//         { displayName: 'Light Coral', value: "lightCoral" }
//     ]
// })






// app.controller('appCtrl', function($scope) {
//     $scope.hideElem1 = false;
//     $scope.hideElem2 = false;
//     $scope.hideElem3 = false;
// })





// app.controller('appCtrl', function($scope) {
//     $scope.items = [
//         { name: 'Item 1', value: '10' },
//         { name: 'Item 2', value: '2' },
//         { name: 'Item 3', value: '31' }
//     ];

//     $scope.options = [
//         { display: 'Таблица', value: 'table' },
//         { display: 'Список', value: 'list' },
//         { display: 'Список с маркерами', value: 'budges' },
//     ];

//     $scope.mode = $scope.options[0];
// })











// app.controller('appCtrl', function($scope) {
//     $scope.items = [
//         {name: 'Item 1', value: 'Value 1'},
//         {name: 'Item 2', value: 'Value 2'},
//         {name: 'Item 3', value: 'Value 3'},
//     ];
//     $scope.tableView = 'table.html';
//     $scope.listView = 'list.html';
//     $scope.url = $scope.tableView;

//     $scope.showList = function() {
//         $scope.url = $scope.listView;
//     }

//     $scope.showTable = function() {
//         $scope.url = $scope.tableView;
//     }
// })











// app.controller('appCtrl', function($scope) {
//     $scope.items = [
//         { prop1: 'item1', prop2: 1 },
//         { prop1: 'item2', prop2: 2 },
//         { prop1: 'item3', prop2: 3 }
//     ];
//     $scope.selected = $scope.items[0];
// })





// var model = [
//     { name: 'vasya', age: 21 },
//     { name: 'petya', age: 25 },
//     { name: 'katya', age: 23 },
//     { name: 'lena', age: 28 },
// ]

// app.controller('appCtrl', function($scope) {
//     $scope.items = model;
// })









// var model = {
//     user: 'User1',
//     courses: [
//         {
//             name: 'Javascript',
//             passed: true
//         },
//         {
//             name: 'React',
//             passed: true
//         },
//         {
//             name: 'Angular',
//             passed: true
//         },
//         {
//             name: 'Css',
//             passed: false
//         },
//         {
//             name: 'Html',
//             passed: false
//         },
//     ]
// }

// app.controller('appCtrl', function($scope) {
//     $scope.data = model;

//     $scope.addNewCourse = function() {
//         if (!$scope.nameOfCourse) return;
//         $scope.data.courses.push({
//             name: $scope.nameOfCourse,
//             passed: 'no'
//         });
//         $scope.nameOfCourse = "";
//     };

//     $scope.showText = function(passed) {
//         return passed ? "Да" : "Нет";
//     }

//     $scope.setStyle = function(passed) {
//         return passed ? 'color: green' : 'color: red';
//     }

// })




// var model = 'hello';

// app.controller('appCtrl', function ($scope) {
//     $scope.message = model;
//     $scope.clickHandler = function() {
//         $scope.message = $scope.text;
//     }
// })