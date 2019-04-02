class CalculatorController {
    constructor(){

    }

    addition(x , y) {
        return x + y;
    };
}

const CalculatorComponent = {
    controller: CalculatorController,
    controllerAs: 'calculatorCtrl'
};


angular.module('calculatorApp',[])
    .component('calculatorComponent', CalculatorComponent)
    .controller('CalculatorController', CalculatorController)
