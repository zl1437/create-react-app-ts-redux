
interface T{
    json: any,
    status: any,
    error: string
}
export default function promiseMiddleware() {
    return (next: any) => (action: any) => {
      const { promise, type, ...rest } = action
  
      if (!promise) return next(action)
  
      const SUCCESS = type + '_SUCCESS'
      const REQUEST = type + '_REQUEST'
      const FAILURE = type + '_FAILURE'
      next({ ...rest, type: REQUEST })
  
      return promise
        .then((response: any) => ({json: response.data, status: response.statusText}))
        .then((json: T,status: T) => {
          next({ ...rest, json, type: SUCCESS })
          return true
        })
        .then(undefined, (error: T) => {
          next({ ...rest, error, type: FAILURE })
          return false
        })
    }
  }