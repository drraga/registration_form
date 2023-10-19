<template>
  <div class="child-input">
    <div class="child-input__fields">
      <CustomInputName
        :name-data="childName"
        class="child-input__field child-input__field--name"
        :is-valid-name="isValidNameChild"
        @set-name="setChildName"
      />
      <CustomInputAge
        :age-data="childAge"
        :is-valid-age="isValidAgeChild"
        class="child-input__field child-input__field--age"
        @set-age="setChildAge"
      />

      <button
        type="button"
        class="child-input__button-delete"
        @click="deleteChild"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import CustomInputAge from '../form-elements/CustomInputAge.vue'
import CustomInputName from '../form-elements/CustomInputName.vue'
import { validateInputString, validateInputNumber } from '../../utils/validateInput'

const store = useStore()
const props = defineProps({
  child: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
})

const childName = computed(() => props.child.name)
const childAge = computed(() => props.child.age)
function setChildName(newName) {
  store.commit('setChildName', { index: props.index, name: newName })
}

function setChildAge(newAge) {
  store.commit('setChildAge', { index: props.index, age: +newAge })
}

function deleteChild() {
  store.commit('deleteChild', props.index)
}

const getStartValidation = computed(() => store.getters.getStartValidation)
const isValidNameChild = computed(() => (getStartValidation.value
  ? validateInputString(childName.value) : null))
const isValidAgeChild = computed(() => (getStartValidation.value
  ? validateInputNumber(childAge.value) : null))

</script>

<style lang="scss">
@import '../../assets/variables.scss';

.child-input{
  max-width: 616px;
  width: 100%;

  &__fields{
    display: flex;
    justify-content: space-between;
    gap: 18px;
  }

  &__field{
    width: 260px;
  }

  &__button-delete {
    width: 78px;
    height: 56px;
    background-color: transparent;
    color: $input-main-color;
    border: none;
    cursor: pointer;

    &:hover{
      color: $hover-delete-color;
    }
  }
}
</style>
