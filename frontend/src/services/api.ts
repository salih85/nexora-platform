import axios from 'axios'
import mockApi, { fetchJSON as mockFetchJSON } from './mockApi'

const useMock = import.meta.env.VITE_STATIC_ONLY === 'true'

export const api = useMock
  ? (mockApi as any)
  : axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

export default api

export async function fetchJSON<T>(url: string): Promise<T> {
  if (useMock) return mockFetchJSON<T>(url)
  // Defensive: if `api.get` is missing (unexpected runtime), fall back to mock
  const getter = (api as any)?.get
  if (typeof getter !== 'function') return mockFetchJSON<T>(url)

  const res = await getter.call(api, url)
  // axios responses have `data`; mocks may return raw objects
  return (res && res.data) ? res.data as T : res as T
}
