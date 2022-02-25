import axios from 'axios'

class BaseApiService {
  baseUrl = import.meta.env.VITE_API_HOST
  resource: string

  constructor(resource: string) {
    if (!resource) throw new Error('Resource is not provided')
    this.resource = resource
    console.log(this.baseUrl)
  }

  getUrl() {
    return `${this.baseUrl}/${this.resource}/?format=json`
  }

  handleErrors(err: string) {
    // Note: here you may want to add your errors handling
    console.log({
      message: 'Errors is handled here',
      err
    })
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource: string) {
    super(resource)
  }
  async fetch(config = {}) {
    try {
      const response = await axios.get(this.getUrl(), config)
      return response
    } catch (err: any) {
      this.handleErrors(err)
    }
  }
  async get() {
    try {
      const response = await axios.get(this.getUrl())
      return response
    } catch (err: any) {
      this.handleErrors(err)
    }
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource: string) {
    super(resource)
  }
  async post(data = {}) {
    try {
      const response = await axios(this.getUrl(), {
        method: 'POST',
        data
      })
      return response
    } catch (err: any) {
      this.handleErrors(err)
    }
  }
  async put(id: string, data = {}) {
    if (!id) throw Error('Id is not provided')
    try {
      const response = await axios(this.getUrl(), {
        method: 'PUT',
        data
      })
      return response
    } catch (err: any) {
      this.handleErrors(err)
    }
  }
  async delete(id: string) {
    if (!id) throw Error('Id is not provided')
    try {
      await axios(this.getUrl(), {
        method: 'DELETE'
      })
      return true
    } catch (err: any) {
      this.handleErrors(err)
    }
  }
}

class ScenicApiService extends ReadOnlyApiService {
  constructor() {
    super('ScenicSpot')
  }
}

class RestaurantApiService extends ReadOnlyApiService {
  constructor() {
    super('Restaurant')
  }
}

class HotelApiService extends ReadOnlyApiService {
  constructor() {
    super('Hotel')
  }
}

export const $api = {
  scenic: new ScenicApiService(),
  restaurant: new RestaurantApiService(),
  hotel: new HotelApiService()
}
