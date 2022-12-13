import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay, map, Observable} from 'rxjs';
import {Image} from "./image-gallery/Image";
import {CrazyPricesItem, MainPartItem, ResponseFromServer} from "./photos-fetcher";

const url = 'https://aukro.cz/backend/api/homepage';

@Injectable({
  providedIn: 'root'
})
export class PhotosFetcherService {
  errorMessage = '';
  constructor(private http: HttpClient) { }

  /**
   * Gets new photos.
   * @returns Returns an observable of objects with images.
   */
  getNewPhotos():Observable<Image[]> {
    return this.http.get<ResponseFromServer>(url)
      .pipe(
        delay(500), // just for loading spinner effect
        map((data:ResponseFromServer) => {
          return <MainPartItem>data.mainPart?.find((item: MainPartItem) => {
            return item.type === 'CrazyPricesItems';
          });
        }),
        map((data:MainPartItem) => {
          const imageObjects:Image[] | undefined = data.content?.items?.map((item:CrazyPricesItem) => {
            return {
              name: item.name,
              price: item.biddingPrice.amount + ' ' + item.biddingPrice.currency,
              imageUrl: item.images.lists.original[0].url
            };
          });

          /**
           * Added sorting just for examples (bigger possibility of displaying different images)
           */
          return imageObjects ? imageObjects.sort(() => Math.random() - 0.5) : [];
        }),
        catchError(() => {
          this.errorMessage = "Could not load data";
          throw new Error('Could not load data.');
        })
      );
  }
}
