import {Component, Input} from '@angular/core';
import {IImage} from './Image';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {

  _images:IImage[] = [];

  /**
   * Setter for images.
   * @param value - Array of image objects
   */
  @Input() set images(value:IImage[]) {
    this._images = value.slice(0,4);
  }

  /**
   * Getter for images.
   */
  get images() {
    return this._images;
  }
}
