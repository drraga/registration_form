<template>
  <form class="personal-data">
    <div>
      <h2 class="personal-data__title">
        Персональные данные
      </h2>
    </div>
    <CustomInputName
      :name-data="userInfo.name"
      :is-valid-name="isValidNameUser"
      @input="userInfo.name = $event.target.value"
      @set-name="setUserName"
    />
    <CustomInputAge
      :is-valid-age="isValidAgeUser"
      :age-data="userInfo.age"
      @set-age="setUserAge"
    />
  </form>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import CustomInputAge from '../form-elements/CustomInputAge.vue'
import CustomInputName from '../form-elements/CustomInputName.vue'

import { validateInputString, validateInputNumber } from '../../utils/validateInput'

const store = useStore()
const userInfo = computed(() => store.getters.getUserInfo)

function setUserName(event) {
  store.commit('setUserName', event)
}

function setUserAge(event) {
  store.commit('setUserAge', event)
}

const getStartValidation = computed(() => store.getters.getStartValidation)
const isValidNameUser = computed(() => (getStartValidation.value
  ? validateInputString(userInfo.value.name) : null))
const isValidAgeUser = computed(() => (getStartValidation.value
  ? validateInputNumber(userInfo.value.age) : null))
const isUserInfoValid = computed(() => isValidNameUser.value && isValidAgeUser.value)

watch([isValidNameUser, isValidAgeUser], () => {
  store.commit('setUserInfoValidation', isUserInfoValid.value)
})
</script>

<style lang="scss">
.personal-data{
  max-width: 616px;
  width: 100%;
  margin-bottom: 23px;

  &__title{
    height: 44px;
    font: {
      size: 16px;
      weight: 500;
    }
  }
}
</style>
