export interface commonInfo {
  Address: string
  Phone: string
  OpenTime?: string
  Picture: {
    PictureDescription1: string
    PictureDescription2?: string
    PictureDescription3?: string
    PictureUrl1?: string
  }
  Position: {
    GeoHash: string
    PositionLat: number
    PositionLon: number
  }
}

export interface ScenicSpot extends commonInfo {
  ScenicSpotName: string
  DescriptionDetail: string
}

export interface Hotel {
  HotelName: string
  Description: string
}

export interface Restaurant {
  RestaurantName: string
  Description: string
}
