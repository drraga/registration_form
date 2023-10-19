<template>
  <div>
    <button
      v-if="getChildren.length < 5"
      type="button"
      class="button button__child-add"
      @click="addChildForm"
    >
      <div class="icon-add-wrapper">
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z" fill="#01A7FD" />
        </svg>
      </div>
      Добавить ребенка
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const getChildren = computed(() => store.getters.getChildren)
function addChildForm() {
  store.commit('addChild')
}
</script>

<style lang="scss">
@import '../../assets/variables.scss';

.button {
  border-radius: 100px;
  cursor: pointer;
  line-height: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 12px;
  font: {
    size: 14px;
    weight: 400;
  }

  &__child-add {
    padding: 8px 31px;
    color: $input-main-color;
    border: $input-border-focus;
    background-color: transparent;

    svg {
      padding: 2px;
    }

    &:hover{
      color: $hover-color;
      border-color: $hover-color;
      svg {
        path{
          fill: $hover-color;
        }
      }
    }
  }
}
.icon-add-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
</style>
