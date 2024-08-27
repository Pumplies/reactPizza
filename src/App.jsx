import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/Routes'
import {useState} from 'react'

function App() {
  const [search, setSearchTerm] = useState("");

  return (
    <div className='bg-orange-300 p-10'>
      <div className='bg-white px-10 py-10 rounded-lg'>

        <BrowserRouter>
          <Header setSearchTerm = {setSearchTerm} />
          <AppRouter search = {search}/>
        </BrowserRouter>

      </div>

    </div >
  )
}

export default App
