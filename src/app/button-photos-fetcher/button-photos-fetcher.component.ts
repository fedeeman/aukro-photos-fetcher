import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {PhotosFetcherService} from '../photos-fetcher.service';
import {IImage} from '../image-gallery/Image';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-button-photos-fetcher',
  templateUrl: './button-photos-fetcher.component.html',
  styleUrls: ['./button-photos-fetcher.component.scss']
})
export class ButtonPhotosFetcherComponent implements OnDestroy {

  @Output() photosFetched = new EventEmitter<IImage[]>;
  @Output() beforePhotosFetched = new EventEmitter<void>;

  errorMessage = '';
  getNewPhotosObservable: Observable<IImage[]> = this.photosFetcherSvc.getNewPhotos();
  private subscription: Subscription | undefined;

  constructor(private photosFetcherSvc: PhotosFetcherService) {
  }

  /**
   * Handles click event.
   */
  onClickHandler() {
    this.beforePhotosFetched.emit();
    const obs = {
      next: (data:IImage[]) => {
        this.photosFetched.emit(data);
      },
      error: (err:string) => {
        this.photosFetcherSvc.errorMessage = err;
      }
    }
    this.subscription = this.getNewPhotosObservable.subscribe(obs);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
