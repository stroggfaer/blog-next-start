export interface ResponseAxios<T> {
  data: T
}

export interface ResponseAxiosList<T> {
  data: {
    results: T
  }
}
