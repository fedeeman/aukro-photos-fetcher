export interface IResponseFromServer {
  introPart?:Record<string, unknown>[],
  mainPart?:IMainPartItem[]
}

export interface IMainPartItem {
  content?:IContentItem;
  type?:string;
  visible?:string[];
  moCode?:string;
}

export interface IContentItem {
  banner?:Record<string, unknown>;
  items?:ICrazyPricesItem[];
  title?:string;
}

export interface ICrazyPricesItem {
  name:string;
  biddingPrice: {amount: string, currency: string};
  images: {
    lists: {
      original: {url:string}[]
    }
  };
}
