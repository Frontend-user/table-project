<template>
  <form
    class="ui-search"
    @submit.prevent="getItemsBySearchText"
  >
    <label>
      <input
        v-model="searchText"
        class="ui-search__input"
        type="text"
      />
    </label>
    <button
      class="ui-search__button"
      type="submit"
    >
      Поиск...
    </button>
  </form>
</template>

<script setup lang="ts">
const searchText = defineModel<string>()

const emit = defineEmits<{
  getItemsBySearchText: []
}>()

const getItemsBySearchText = () => emit('getItemsBySearchText')
</script>

<style scoped lang="less">
.ui-search {
  margin: 20px 0 20px 20px;
  width: 600px;
  display: flex;

  &__input {
    flex-basis: 90%;
    flex-grow: 0;
    padding: 10px;
    border-radius: 4px;
    margin-right: 24px;
  }

  &__button {
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
    border-radius: 4px;
    outline: none;
    border: none;
  }
}
</style>
