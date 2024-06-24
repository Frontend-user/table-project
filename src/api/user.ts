import { api } from '@/assets/data/api'
import type { IUser } from '@/types/IUser'

export const userApi = {
  getUsers(): IUser[] {
    return api.results
  }
}
