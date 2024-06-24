<template>
  <div class="ui-paginate">
    <div class="ui-paginate__inner">
      <button
        class="ui-paginate__button"
        :disabled="isDisabledPrevious"
        @click="prevPage"
      >
        Previous
      </button>
      <select
        v-model="model"
        class="ui-paginate__select"
      >
        <option
          v-for="selectedNumber in pagesList"
          :key="selectedNumber"
          :value="selectedNumber"
          class="ui-paginate__option"
        >
          {{ selectedNumber }}
        </option>
      </select>
      <button
        class="ui-paginate__button"
        :disabled="isDisabledNext"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  nextPage: []
  prevPage: []
}>()

const model = defineModel<number>()

defineProps<{
  pagesList: number[]
  isDisabledNext: boolean
  isDisabledPrevious: boolean
}>()

const nextPage = () => emit('nextPage')
const prevPage = () => emit('prevPage')
</script>

<style scoped lang="less">
@import '@/assets/mixin';

.ui-paginate {
  font-size: 20px;
  font-weight: 500;

  &__inner {
    display: flex;
    gap: 10px;
  }
  &__select {
    cursor: pointer;
    height: 50px;
    width: 150px;
    border-radius: 10px;
  }

  &__option {
    font-size: 18px;
    height: 50px;
    cursor: pointer !important;
  }

  &__button {
    cursor: pointer;
    color: black;
    background: #fff;

    &:not([disabled]):hover {
      background: @c-orange;
      color: white;
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    font-weight: 500;
    font-size: 20px;
    padding: 10px 20px;
    border: 1px solid #dfd7d7;
    border-radius: 7px;
    .inner-center();
  }
}
</style>
