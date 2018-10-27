
export default {
  state: {
    num: 0
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    add(state) {
      return {
        ...state,
        num: state.num + 1
      }
    },
    minus(state) {
      return {
        ...state,
        num: state.num - 1
      }
    }
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async asyncAdd(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.add()
    }
  }
}
