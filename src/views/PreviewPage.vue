<template>
  <main>
    <section class="form-wrapper">
      <div class="personal-data">
        <h2 class="personal-data__header">
          Персональные данные
        </h2>
        <p class="personal-data__text">
          {{ formattedUser }}
        </p>
      </div>

      <div
        v-if="getChildren.length"
        class="user-child-data"
      >
        <h2
          class="user-child-data__header"
        >
          Дети
        </h2>

        <div
          v-for="(child, index) in getChildren"
          :key="index"
          class="child-info"
        >
          <p class="child-info__text">
            {{ formattedChild(child) }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import pluralize from '../utils/pluralize'

const store = useStore()

const getUserInfo = computed(() => store.getters.getUserInfo)
const getChildren = computed(() => store.getters.getChildren)

function convertName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function pluralizeAge(age) {
  return pluralize(age, ['год', 'года', 'лет']);
}

const formattedUser = computed(() => `${convertName(getUserInfo.value.name)}, ${pluralizeAge(getUserInfo.value.age)}`)
function formattedChild(child) {
  return `${convertName(child.name)}, ${pluralizeAge(child.age)}`
}
</script>

<style lang="scss">
.form-wrapper{
  max-width: 616px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.personal-data{
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  &__header{
    font: {
      size: 16px;
      weight: 500;
    };
    margin-bottom: 20px;
    line-height: 24px;
  }

  &__text{
    font-weight: 700;
  }
}

.user-child-data{
  max-width: 616px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__header{
    font: {
      size: 16px;
      weight: 500;
    }
    margin-bottom: 30px;
    line-height: 24px;
  }

  &__summary{
    display: flex;
    flex-direction: column;
  }
}

.child-info{

  height: 44px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #F1F1F1;
  border-radius: 5px;
  padding: 0 10px 0 10px;

  &__text{
    font: {
    size: 16px;
    weight: 700;
    }
  }
}
</style>
