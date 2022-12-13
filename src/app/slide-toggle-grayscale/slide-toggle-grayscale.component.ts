import {Component, EventEmitter, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-slide-toggle-grayscale',
  templateUrl: './slide-toggle-grayscale.component.html',
  styleUrls: ['./slide-toggle-grayscale.component.scss']
})
export class SlideToggleGrayscaleComponent {

  @Output() grayscaleChange = new EventEmitter<boolean>();

  /**
   * Toggle changes handler.
   * @param $event - MatSlideToggleChange
   */
  toggleChanges($event: MatSlideToggleChange) {
    this.grayscaleChange.emit($event.checked);
  }
}
