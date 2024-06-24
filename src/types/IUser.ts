export interface IFilters {
  limit: number
  searchText: string
  sortDirection: string
  sortByFieldName: string
  currentPage: number
  offset: number
  [key: string]: number | string
}

export interface IData {
  results: IUser[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

export interface IUserView {
  avatar: string
  fullName: string
  gender: string
  country: string
  email: string
  dob: string
  phone: string
  [key: string]: string
}

export interface IUserKey {
  key: string
  name: string
}

export interface IUser {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number | string
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string | null
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}
