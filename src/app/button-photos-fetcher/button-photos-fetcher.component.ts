import {Component, EventEmitter, Output} from '@angular/core';
import {PhotosFetcherService} from "../photos-fetcher.service";
import {Image} from "../image-gallery/Image";

@Component({
  selector: 'app-button-photos-fetcher',
  templateUrl: './button-photos-fetcher.component.html',
  styleUrls: ['./button-photos-fetcher.component.scss']
})
export class ButtonPhotosFetcherComponent {

  @Output() photosFetched = new EventEmitter<Image[]>;
  @Output() beforePhotosFetched = new EventEmitter<void>;

  errorMessage = '';

  constructor(private photosFetcherSvc: PhotosFetcherService) {
  }

  /**
   * Handles click event.
   */
  onClickHandler() {
    this.beforePhotosFetched.emit();
    const obs = {
      next: (data:Image[]) => {
        this.photosFetched.emit(data);
      },
      error: (err:string) => {
        this.photosFetcherSvc.errorMessage = err;
      }
    }
    this.photosFetcherSvc.getNewPhotos().subscribe(obs);
  }
}
