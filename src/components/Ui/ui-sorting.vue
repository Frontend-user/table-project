<template>
  <div class="ui-sorting">
    <button
      class="ui-sorting__button"
      @click="changeSortDirection"
    >
      <img
        class="ui-sorting__icon"
        src="@/assets/icons/sort-icon.svg"
        alt="sort icon"
      />
    </button>
    <select
      v-model="sortByFieldNameModel"
      class="ui-sorting__select"
      @change="sort"
    >
      <option
        v-for="selectItem in selectList"
        :key="selectItem.key"
        :value="selectItem.key"
        class="ui-sorting__option"
      >
        {{ selectItem.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { IUserKey } from '@/types/IUser'

const emit = defineEmits<{
  sort: []
  changeSortDirection: []
}>()
defineProps<{
  selectList: IUserKey[]
}>()
const sortByFieldNameModel = defineModel<string>()

const sort = () => emit('sort')
const changeSortDirection = () => emit('changeSortDirection')
</script>

<style scoped lang="less">
.ui-sorting {
  &__button {
    border: none;
    margin: 0 10px;
    border-radius: 4px;
  }
  &__icon {
    width: 24px;
    margin-right: 3px;
    cursor: pointer;
  }

  &__select {
    cursor: pointer;
    height: 50px;
    width: 300px;
    border-radius: 10px;
  }

  &__option {
    font-size: 18px;
    height: 50px;
    cursor: pointer !important;
  }
}
</style>
