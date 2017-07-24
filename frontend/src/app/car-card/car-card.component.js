"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by Christian on 1/19/2017.
 */
var CarCardComponent = (function () {
    function CarCardComponent() {
        this.selectedItemChange = new core_1.EventEmitter();
    }
    CarCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    __decorate([
        core_1.Input()
    ], CarCardComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input()
    ], CarCardComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output()
    ], CarCardComponent.prototype, "selectedItemChange", void 0);
    CarCardComponent = __decorate([
        core_1.Component({
            templateUrl: './car-car.component.html',
            selector: 'car-card'
        })
    ], CarCardComponent);
    return CarCardComponent;
}());
exports.CarCardComponent = CarCardComponent;
