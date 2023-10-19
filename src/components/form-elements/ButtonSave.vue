<template>
  <div
    class="button-wrapper"
  >
    <button
      type="button"
      class="button button__save"
      @click="saveData"
    >
      Сохранить
    </button>
  </div>
</template>

<script setup>
import { computed, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

function setStartValidation(boolean) {
  store.commit('setStartValidation', boolean)
}
const getUserInfoValidation = computed(() => store.getters.getUserInfoValidation)
const getChildrenValidation = computed(() => store.getters.getChildrenValidation)
const getChildren = computed(() => store.getters.getChildren)

async function saveData() {
  setStartValidation(true);
  await nextTick();
  if (!getChildren.value.length) {
    if (getUserInfoValidation.value) {
      router.push('/preview')
    }
  } else if (getUserInfoValidation.value && getChildrenValidation.value) {
    router.push('/preview')
  }
}

</script>

<style lang="scss">
@import '../../assets/variables.scss';

.button-wrapper{
  max-width: 616px;
  width: 100%;
}

.button {

  &__save{
    color: #FFFFFF;
    background-color: $input-main-color;
    padding: 10px 24px;

    &:hover{
      background-color: $input-main-color;
    }
  }
}

</style>
