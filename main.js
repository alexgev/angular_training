var app = angular.module('app', []);

app.controller('appCtrl', function($scope) {
    $scope.items = [
        { name: 'Item 1', value: '10' },
        { name: 'Item 2', value: '2' },
        { name: 'Item 3', value: '31' }
    ];

    $scope.options = [
        { display: 'Таблица', value: 'table' },
        { display: 'Список', value: 'list' },
        { display: 'Список с маркерами', value: 'budges' },
    ];

    $scope.mode = $scope.options[0];
})











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