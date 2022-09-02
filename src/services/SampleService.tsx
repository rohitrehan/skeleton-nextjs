import axios, { AxiosRequestConfig } from "axios";

const SampleService = {
  get: async (props: any) => {
    const payload = {
      ...props
    }

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    }

    return axios(`${process.env.API_BASE}/public`, options).then((res: any) => res.data)
  }
}
export default SampleService