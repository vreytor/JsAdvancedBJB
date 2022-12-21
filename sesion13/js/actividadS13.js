
let app = angular.module("MyApp",[])

app.controller("formControl", function($scope){
$scope.km = {recorrido: null, pago: 0, descuento: 0, total: 0};

$scope.calcularRecorrido = function(){
    let kilometros = $scope.km.recorrido;
    
if(kilometros <= 300){
    pago = 250;
}else if(kilometros > 300 &&  kilometros <= 1000){
    pago = 250 + (kilometros - 300)* 30;
}else if(kilometros > 1000){
    pago = 250 + 700 * 30 + (kilometros - 100) * 20;
}else{
    pago = 250;
}

//Condiciòn para descuento
if(pago > 500){
    descuento = pago * 0.10;
}else{
    descuento = 0;
}
total = pago - descuento;

$scope.km.pago = pago;
$scope.km.descuento = descuento;
$scope.km.total = total;

}

$scope.calcularRecorrido()

});