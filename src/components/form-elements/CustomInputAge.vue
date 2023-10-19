<template>
  <CustomInput
    label="Возраст"
    warning="Введите возраст 0-100"
    :model-value="props.ageData"
    input-type="number"
    :is-valid="isValidAge"
    @set-data="updateAgeData"
  />
</template>

<script setup>
import CustomInput from '../ui/CustomInput.vue'

const props = defineProps({
  ageData: {
    type: [Number, null],
    required: true,
  },
  isValidAge: {
    type: [Boolean, null],
    required: true,
  }
})

const emit = defineEmits(['setAge'])

function updateAgeData(event) {
  emit('setAge', event)
}
</script>
