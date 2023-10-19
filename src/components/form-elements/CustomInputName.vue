<template>
  <CustomInput
    label="Имя"
    warning="Введите ФИО"
    :model-value="props.nameData"
    :is-valid="isValidName"

    input-type="text"
    @set-data="updateNameData"
  />
</template>

<script setup>
import CustomInput from '../ui/CustomInput.vue';

const props = defineProps({
  nameData: {
    type: String,
    required: true,
  },
  isValidName: {
    type: [Boolean, null],
    required: true,
  }
})

const emit = defineEmits(['setName'])

function updateNameData(event) {
  emit('setName', event)
}
</script>
