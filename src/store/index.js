import {init} from '@rematch/core'
import counter from './counter'

const store = init({
  models: {
    counter,
  }
})

export default store
