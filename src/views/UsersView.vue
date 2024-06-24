<template>
  <div class="user-view">
    <div class="user-view__wrapper">
      <ui-search
        v-model="filters.searchText"
        @get-items-by-search-text="getUsersBySearchText"
      />
    </div>
    <div class="user-view__wrapper">
      <ui-sorting
        v-model="filters.sortByFieldName"
        :select-list="sortLabels"
        @sort="sortUsers"
        @change-sort-direction="changeUsersSortDirection"
      />
    </div>
    <ui-table
      :list="userStore.getUsersView"
      :label-list="tableLabels"
    />
    <ui-paginate
      v-model="userStore.currentPage"
      :pages-list="userStore.getPagesList"
      :is-disabled-next="userStore.isMaxNumberPage"
      :is-disabled-previous="userStore.isMinNumberPage"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import UiTable from '@/components/Ui/ui-table.vue'
import UiPaginate from '@/components/Ui/ui-paginate.vue'
import UiSearch from '@/components/Ui/ui-search.vue'
import UiSorting from '@/components/Ui/ui-sorting.vue'
import { useUserStore } from '@/stores/user'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const {
  prevPage,
  nextPage,
  filters,
  changeUsersSortDirection,
  getUsersBySearchText,
  sortUsers,
  tableLabels,
  sortLabels,
  initFilters
} = useUserStore()

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()

onMounted(() => {
  initFilters(route.query)
})

watch(
  filters,
  () => {
    router.push({
      path: route.path,
      query: {
        ...filters
      }
    })
  },
  { immediate: true }
)
</script>

<style scoped lang="less">
.user-view {
  &__wrapper {
    margin-bottom: 30px;
  }
}
</style>
