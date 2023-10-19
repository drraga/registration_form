<template>
  <main>
    <UserForm />
    <ChildForm />
    <ButtonSave />
  </main>
</template>

<script setup>
import ChildForm from '../components/form-child/ChildForm.vue';
import UserForm from '../components/form-user/UserForm.vue';
import ButtonSave from '../components/form-elements/ButtonSave.vue';
</script>
