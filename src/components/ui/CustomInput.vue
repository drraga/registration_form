<template>
  <div class="custom-input">
    <label
      v-if="props.label"
      :for="generateUniqueId"
      class="custom-input__label"
    >
      {{ props.label }}
    </label>
    <input
      :id="generateUniqueId"
      :value="props.modelValue"
      :type="props.inputType"
      :class="['custom-input__field', { 'is-invalid': isValid === false }]"
      @input="emitData"
    >
    <span
      v-if="isValid === false"
      class="custom-input__message"
    >
      {{ warning }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number, null],
    required: true,
  },
  inputType: {
    type: String,
    required: true,
    validator: (value) => ['text', 'number'].includes(value)
  },
  isValid: {
    type: [Boolean, null],
    required: true,
  },
  warning: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['setData'])

function emitData(event) {
  emit('setData', event.target.value)
}

const generateUniqueId = computed(() => Math.random().toString(35).substring(8, 13))

</script>

<style lang="scss">
@import '../../assets/variables.scss';

.custom-input {
  position: relative;
  max-width: 616px;
  width: 100%;
  margin-bottom: 18px;

  &__label {
    position: absolute;
    left: 16px;
    top: 8px;
    font-size: $label-font-size;
    color: $label-color;
  }

  &__field {
    width: 100%;
    height: 56px;
    padding: $input-padding;
    border-radius: 4px;
    font-size: $input-font-size;
    line-height: $input-line-height;
    color: $text-color;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    border: $input-border;

    &:focus {
      border-color: $input-border-focus;
    }

  }
  &__message {
    position: absolute;
    left: 16px;
    bottom: -18px;
    color: $hover-delete-color;
    font-size: $label-font-size;
    display: block;
  }
}

.is-invalid{
  border-color: $hover-delete-color;
}
</style>
