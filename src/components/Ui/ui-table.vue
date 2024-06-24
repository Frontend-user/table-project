<template>
  <div class="ui-table">
    <div class="ui-table__header">
      <div
        v-for="labelItem in labelList"
        :key="labelItem.key"
        class="ui-table__header-item"
      >
        <span class="ui-table__header-label">{{ labelItem.name }}</span>
      </div>
    </div>
    <div class="ui-table__body">
      <div
        v-for="item in list"
        :key="item.id"
        class="ui-table__row"
      >
        <div
          v-for="(fieldValue, key) in item"
          :key="String(fieldValue)"
          class="ui-table__col"
        >
          <div v-if="key === 'avatar'">
            <img
              class="ui-table__col-avatar"
              :src="fieldValue"
              alt="Image avatar"
            />
          </div>
          <div v-else>
            {{ fieldValue }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUserKey, IUserView } from '@/types/IUser'

defineProps<{
  list: IUserView[]
  labelList: IUserKey[]
}>()
</script>

<style scoped lang="less">
@import '@/assets/mixin';

.ui-table {
  &__header {
    display: flex;
  }

  &__header-label {
    margin-left: auto;
    margin-right: auto;
  }

  &__header-item {
    padding: 10px 0;
    .inner-center();
    flex-grow: 0;
    border: 1px solid gray;
    font-weight: bold;
    font-size: 18px;
    flex-basis: 13%;
    display: flex;
  }

  &__body {
    margin-bottom: 20px;
  }

  &__row {
    display: flex;
  }

  &__col {
    font-size: 18px;
    padding: 10px 0;
    .inner-center();
    flex-grow: 0;
    border: 1px solid gray;
    flex-basis: 13%;
    overflow: hidden;
  }

  &__col-avatar {
    max-width: 50px;
    border-radius: 40px;
  }
}
</style>
