import {Component, Input} from '@angular/core';
import {Image} from "./Image";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {

  _images:Image[] = [];

  @Input() set images(value:Image[]) {
    this._images = value.slice(0,4);
  }

  get images() {
    return this._images;
  }
}
