import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Car} from "../entities/car";
/**
 * Created by Christian on 1/19/2017.
 */

@Component({
  templateUrl: './car-car.component.html',
  selector: 'car-card'
})

export class CarCardComponent {
  @Input() item: Car;
  @Input() selectedItem: Car;
  @Output() selectedItemChange = new EventEmitter();

  select() {
    this.selectedItemChange.emit(this.item);

  }
}
