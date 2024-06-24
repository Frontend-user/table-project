import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { sortDirectionValues, sortLabels, tableLabels } from '@/assets/constants/constants'
import { formatBirthDate } from '@/utils'
import { type LocationQuery } from 'vue-router'
import type { IFilters, IUser, IUserView } from '@/types/IUser'
import { userApi } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const users = ref<IUser[]>(userApi.getUsers())

  const filters = reactive<IFilters>({
    limit: 10,
    searchText: '',
    sortDirection: 'up',
    sortByFieldName: 'fullName',
    currentPage: 1,
    offset: 0,
  })

  const currentPage = computed({
    get() {
      return filters.currentPage
    },
    set(value) {
      setPageSize(value)
    }
  })

  const setPageSize = (newPage: number) => {
    filters.currentPage = newPage
    filters.limit = newPage * 10
    filters.offset = newPage * 10 - 10
  }

  const changeUsersSortDirection = () => {
    const { UP, DOWN } = sortDirectionValues
    filters.sortDirection = filters.sortDirection === UP ? DOWN : UP
    sortUsers()
  }

  const isMaxNumberPage = computed(() => filters.currentPage >= getUsersCount.value)

  const isMinNumberPage = computed(() => filters.currentPage < 2)

  function nextPage() {
    if (isMaxNumberPage.value) return
    filters.currentPage++
    filters.limit = filters.limit + 10
    filters.offset = filters.offset + 10
  }


  function prevPage() {
    if (isMinNumberPage.value) return
    filters.currentPage--
    filters.limit = filters.limit - 10
    filters.offset = filters.offset - 10
  }

  function goToFirstPage() {
    filters.currentPage = 1
    filters.limit = 10
    filters.offset = 0
  }

  const mappedUsers = users.value.map(
    (user): IUserView => ({
      avatar: user.picture.medium,
      fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
      gender: user.gender,
      country: user.location.country,
      dob: formatBirthDate(user.dob.date),
      email: user.email,
      phone: user.phone
    })
  )

  const sortedUsers = ref<IUserView[]>([...mappedUsers])

  const getUsersCount = computed(() => {
    return Math.ceil(sortedUsers.value.length / 10)
  })

  const sortUsers = () => {
    const { sortByFieldName, sortDirection } = filters
    sortedUsers.value.sort((a: IUserView, b: IUserView) => {
      if (sortDirection === sortDirectionValues.UP) {
        return a[sortByFieldName].localeCompare(b[sortByFieldName])
      }
      return b[sortByFieldName].localeCompare(a[sortByFieldName])
    })
  }

  const getUsersBySearchText = () => {
    const searchText = filters.searchText
    sortedUsers.value = mappedUsers.filter((user) => {
      return Object.keys(user).some(
        (userField) =>
          user[userField].toLowerCase().includes(searchText.toLowerCase()) && userField !== 'avatar'
      )
    })
    if (currentPage.value > getUsersCount.value) goToFirstPage()
  }

  const initFilters = (query: LocationQuery) => {
    for (const filter in filters) {
      if (query[filter]) {
        filters[filter] = isNaN(Number(query[filter]))
          ? String(query[filter])
          : Number(query[filter])
      }
    }
    getUsersBySearchText()
    sortUsers()
  }

  const getUsersView = computed((): IUserView[] => {
    return sortedUsers.value.slice(filters.offset, filters.limit)
  })

  const getPagesList = computed(() => {
    return Array.from({ length: getUsersCount.value }, (_, i) => i + 1)
  })

  return {
    getUsersBySearchText,
    sortUsers,
    changeUsersSortDirection,
    nextPage,
    prevPage,
    initFilters,
    getUsersCount,
    tableLabels,
    sortLabels,
    users,
    getUsersView,
    getPagesList,
    sortedUsers,
    filters,
    currentPage,
    isMaxNumberPage,
    isMinNumberPage
  } as const
})
