<template>
  <header class="header-wrapper">
    <div class="header-wrapper__logo">
      <img src="../assets/icons/company_logo.svg" alt="company logo">
    </div>

    <nav class="header-wrapper__links-wrapper">
      <RouterLink
        to="/"
        class="header-wrapper__link"
      >
        Форма
      </RouterLink>

      <RouterLink
        v-if="isUserFormValid && isChildrenFormValid"
        to="/preview"
        class="header-wrapper__link"
      >
        Превью
      </RouterLink>
      <a
        v-else-if="!isUserFormValid || !isChildrenFormValid"
        to="/preview"
        class="header-wrapper__link inactive-link"
      >
        Превью
      </a>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isUserFormValid = computed(() => store.getters.getUserInfoValidation)
const isChildrenFormValid = computed(() => store.getters.getChildrenValidation)
</script>

<style lang="scss">
@import '../assets/variables.scss';

.header-wrapper {
  max-width: 1366px;
  width: 100%;
  min-height: 76px;
  margin: 0 auto;
  background-color: white;
  padding: 7px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $gray-color;

  &__logo {
    display: flex;
    width: 175px;
    margin-left: 51px;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__links-wrapper {
    flex: 1 1 auto;
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  }
}
.inactive-link{
  color: $inactive-link;
}
</style>
