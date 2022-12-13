export interface ResponseFromServer {
  introPart?:Record<string, unknown>[],
  mainPart?:MainPartItem[]
}

export interface MainPartItem {
  content?:ContentItem;
  type?:string;
  visible?:string[];
  moCode?:string;
}

export interface ContentItem {
  banner?:Record<string, unknown>;
  items?:CrazyPricesItem[];
  title?:string;
}

export interface CrazyPricesItem {
  name:string;
  biddingPrice: {amount: string, currency: string};
  images: {
    lists: {
      original: {url:string}[]
    }
  };
}
