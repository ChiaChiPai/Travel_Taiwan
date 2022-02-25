export interface commonInfo {
  Address: string
  Phone: string
  OpenTime?: string
  Picture: {
    PictureDescription1?: string
    PictureUrl1: string
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

export interface Hotel  extends commonInfo {
  HotelName: string
  Description: string
  ServiceInfo?: string
}

export interface Restaurant  extends commonInfo {
  RestaurantName: string
  Description: string
  City: string
}
