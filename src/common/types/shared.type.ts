export interface ResponseAxios<T> {
  data: T
}

export interface ResponseAxiosList<T> {
  data: {
    results: T
  }
}
export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}
