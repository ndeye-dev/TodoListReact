// import { useState } from 'react'
import './App.css'
import TodoList from './Composants/TodoList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
    <div className='container mx-auto px-4'>
    <h1 className="text-3xl font-bold text-center m-3 ">
      TodoList
    </h1>  
      <div className="">
      <TodoList />
      </div>
    </div>
    </>
  )
}

export default App
