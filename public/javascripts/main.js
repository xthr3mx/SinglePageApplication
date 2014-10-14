var app = angular.module('app', []);
app.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

function mainController($scope, $http) {
    $scope.product = {};

    // Cuando se cargue la página, obtiene todos los productos 
    $http.get('/api/products')
        .success(function(data) {
            $scope.products = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Crear nuevo producto utilizando la uri: /api/products
    $scope.addProduct = function(){
        $http.post('/api/products', $scope.product)
            .success(function(data) {
                $scope.products = data;
                $scope.product = {};
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    $scope.removeProduct = function(id) {
        $http.delete('/api/products/' + id)
            .success(function(data) {
                $scope.products = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
}