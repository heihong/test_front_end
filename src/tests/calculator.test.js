describe('calculator', function () {

    beforeEach(module('calculatorApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 2 should equal 3', function () {
            var $scope = {};
            var controller = $controller('CalculatorController as vm', { $scope: $scope });
            expect(controller.addition(1,2)).toBe(3);
        });
    });

});
