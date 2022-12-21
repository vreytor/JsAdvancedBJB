/*
let app = angular.module("MyApp",[])

app.controller("formControl", function($scope){
$scope.master = {codigo: 100, horas: 2, tarifa: 4, sueldoBasico: 0, descuento: 0, sueldoNeto: 0,}
$scope.btnCalcular = function(){
    $scope.user = $scope.master
    salarioBasico = $scope.master.horas * $scope.master.tarifa
    descuento = 0;

    if(salarioBasico < 500){
        descuento = 0;
    }else if(salarioBasico >= 501 && salarioBasico <= 1000){
        descuento = 0.02
    }else if(salarioBasico >= 1001 && salarioBasico <= 4000){
        descuento = 0.08;
    }else if(salarioBasico >= 4001 && salarioBasico <= 8000){
        descuento = 0.15;
    }else if(salarioBasico >= 8001 && salarioBasico <= 10000){
        descuento = 0.21;
    }else if(salarioBruto >= 10000){
        descuento = 0.30;

    }
    $scope.master.sueldoBasico = salarioBasico
    $scope.master.descuento = descuento
    $scope.master.sueldoNeto = salarioBasico - (salarioBasico * descuento)
}
$scope.btnCalcular()

}) */

let app = angular.module("MyApp",[])

app.controller("formControl", function($scope){
$scope.master = {codigo: 0, horas: 0, tarifa: 0, sueldoBruto: 0, descuento: 0, sueldoNeto: 0,};
$scope.calcularSalario = function(){
    $scope.empleado = $scope.master
    $scope.master.sueldoBruto = $scope.master.horas * $scope.master.tarifa;

    if($scope.master.sueldoBruto < 500){
        $scope.master.descuento = 0;
    }else if($scope.master.sueldoBruto >= 501 && $scope.master.sueldoBruto <= 1000){
        $scope.master.descuento = 0.02
    }else if($scope.master.sueldoBruto >= 1001 && $scope.master.sueldoBruto <= 4000){
        $scope.master.descuento = 0.08;
    }else if($scope.master.sueldoBruto >= 4001 && $scope.master.sueldoBruto <= 8000){
        $scope.master.descuento = 0.15;
    }else if($scope.master.sueldoBruto >= 8001 && $scope.master.sueldoBruto <= 10000){
        $scope.master.descuento = 0.21;
    }else if($scope.master.sueldoBruto >= 10000){
        $scope.master.descuento = 0.30;

    }
    
    $scope.master.sueldoNeto = $scope.master.sueldoBruto - ($scope.master.sueldoBruto * $scope.master.descuento);
}
$scope.calcularSalario()

}) 