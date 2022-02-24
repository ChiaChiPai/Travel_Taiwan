export interface ScenicSpot {
  ScenicSpotName: string
  Address: string
  DescriptionDetail: string
  OpenTime: string
  Phone: string
  Picture?: {
    PictureDescription1: string
    PictureUrl1: string
  },
  Position: {
    GeoHash: string
    PositionLat: number
    PositionLon: number
  },
}

export interface Hotel {
  HotelName: string
  Address: string
  Description: string
  Phone: string
  Picture?: {
    PictureDescription1: string
    PictureUrl1: string
  },
  Position: {
    GeoHash: string
    PositionLat: number
    PositionLon: number
  },
}

export interface Restaurant {
  RestaurantName: string
  Address: string
  Description: string
  OpenTime: string
  Phone: string
  Picture?: {
    PictureDescription1: string
    PictureUrl1: string
  },
  Position: {
    GeoHash: string
    PositionLat: number
    PositionLon: number
  },
}
