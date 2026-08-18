type Data = any

const demoUser = {
  id: '1',
  name: 'Demo User',
  email: 'demo@local',
}

async function handleGet(url: string): Promise<Data> {
  // simple mapping for common endpoints used in the app
  if (url.endsWith('/auth/me') || url === '/users/me') return demoUser
  if (url.endsWith('/auth/login')) return { token: 'mock-token', user: demoUser }
  if (url.startsWith('/courses')) return []
  if (url.startsWith('/projects')) return []
  // health
  if (url === '/health' || url === '/api/health') return { status: 'ok' }
  return {}
}

const api = {
  get: async (url: string) => ({ data: await handleGet(url) }),
  post: async (url: string, body?: any) => {
    // basic behavior: for login return demo auth
    if (url.endsWith('/auth/login')) return { data: { token: 'mock-token', user: demoUser } }
    return { data: { success: true, body } }
  },
  put: async (url: string, body?: any) => ({ data: { success: true, body } }),
  delete: async (url: string) => ({ data: { success: true } }),
}

export default api

export async function fetchJSON<T>(url: string): Promise<T> {
  const { data } = await api.get(url)
  return data as T
}
