<template>
  <form class="children-container">
    <div class="children-header">
      <h2 class="children-container__title">
        Дети (макс.5)
      </h2>
      <ButtonAdd />
    </div>
    <div class="children-input-block">
      <ChildInputBlock
        v-for="(child, index) in children"
        :key="index"
        :child="child"
        :index="index"
      />
    </div>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ChildInputBlock from './ChildInputBlock.vue'
import ButtonAdd from './ButtonAdd.vue'

const store = useStore()

const children = computed(() => store.getters.getChildren)
</script>

<style lang="scss">
.children-container{
  max-width: 616px;
  width: 100%;

  &__title{
    font: {
      size: 16px;
      weight: 500;
    }
  }
}

.children-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.children-input-block{
  margin-bottom: 12px;
}

.button-save__wrapper{
  display: flex;
  align-self: flex-start;
}
</style>
