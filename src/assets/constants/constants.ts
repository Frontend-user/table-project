import type { IUserKey } from '@/types/IUser'

export const sortDirectionValues = {
  UP: 'up',
  DOWN: 'DOWN'
}
export const tableLabels: IUserKey[] = [
  {
    key: 'avatar',
    name: 'Аватар'
  },
  {
    key: 'fullName',
    name: 'ФИО'
  },

  {
    key: 'gender',
    name: 'Пол'
  },
  {
    key: 'country',
    name: 'Страна'
  },
  {
    key: 'dob',
    name: 'Дата рождения'
  },
  {
    key: 'email',
    name: 'Адрес электронной почты'
  },
  {
    key: 'phone',
    name: 'Телефон'
  }
]

export const sortLabels: IUserKey[] = [
  {
    key: 'fullName',
    name: 'ФИО'
  },

  {
    key: 'gender',
    name: 'Пол'
  },
  {
    key: 'country',
    name: 'Страна'
  },
  {
    key: 'dob',
    name: 'Дата рождения'
  },
  {
    key: 'email',
    name: 'Адрес электронной почты'
  },
  {
    key: 'phone',
    name: 'Телефон'
  }
]
