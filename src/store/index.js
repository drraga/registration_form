import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { validateInputString, validateInputNumber } from '../utils/validateInput'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    userInfo: {
      name: '',
      age: null,
    },
    children: [],
    startValidation: false,
    userValidation: null,
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
    getChildren: (state) => state.children,
    getChildAge: (state) => (index) => state.children[index]?.age ?? null,
    getStartValidation: (state) => state.startValidation,
    getUserInfoValidation: (state) => state.userValidation,
    getChildrenValidation: (state) => {
      if (!state.children.length) {
        return true
      }

      return state.children.every((child) => validateInputString(child.name)
        && validateInputNumber(child.age))
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userInfo.name = name.trim()
    },
    setUserAge(state, age) {
      state.userInfo.age = +age
    },
    setStartValidation(state, value) {
      state.startValidation = value
    },
    setUserInfoValidation(state, value) {
      state.userValidation = value
    },
    addChild(state) {
      if (state.children.length < 5) {
        state.children.push({ name: '', age: null })
      }
    },
    deleteChild(state, index) {
      state.children.splice(index, 1)
    },
    setChildAge(state, { index, age }) {
      state.children[index].age = age;
    },
    setChildName(state, { index, name }) {
      state.children[index].name = name.trim();
    },
  }
})
