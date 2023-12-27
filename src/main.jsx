import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './context/StateProvider.jsx'
import { initialState } from './reducer/reducer.js'
import reducer from './reducer/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(

    <StateProvider reducer= {reducer} initialState= {initialState}>
        <App />
    </StateProvider>
    
  
)
