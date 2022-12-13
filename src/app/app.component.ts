import {Component, OnInit} from '@angular/core';
import {PhotosFetcherService} from './photos-fetcher.service';
import {IImage} from './image-gallery/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Photo Fetcher';
  showPhotosInGrayscale = false;
  images:IImage[] = [];
  isLoading = false;

  constructor(public photosFetcherSvc: PhotosFetcherService) {
  }

  ngOnInit() {
    this.photosFetcherSvc.getNewPhotos();
  }

  /**
   * Handler for grayscale change slide toggle.
   * @param $event - Toggle event
   */
  onGrayscaleChangeHandler($event:boolean) {
    this.showPhotosInGrayscale = $event;
  }

  /**
   * Used to set loading spinner.
   * @param $event - Array of image objects
   */
  onPhotosFetchedHandler($event:IImage[]) {
    // this should be handled differently (as reaction to image load event),
    // because right now it is displaying data before images are loaded
    this.images = $event;
    this.isLoading = false;
  }

  /**
   * Used to set loading spinner.
   */
  beforePhotosFetchedHandler() {
    this.isLoading = true;
  }
}
