import React from 'react'
import './App.scss'
import Base from './components/Base'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Base />
      </div>
    </Provider>
  )
}

export default App
