angular.module("app", [])
    .controller("FruitCtrl", function FruitCtrl() {
        var ctrl = this;

        ctrl.seller = "Tom";
        ctrl.name = "Apple";
        ctrl.count = 10;
    });