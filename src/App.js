import { useRef, useState } from 'react';
import './App.css';
import clsx from 'clsx';

function App() {
  const [todos,setToDos] = useState([])
  const itemRef = useRef()
  
  const handleClick = () =>{
    const text = itemRef.current.value
    const newItem = {complete: false, text}
    if (text){setToDos([...todos,newItem])}
    itemRef.current.value = ""
  }
  const handleDone = (index) =>{
    const newItems = [...todos]
    newItems[index].complete = !newItems[index].complete
    setToDos(newItems)

  }
  const deleteTask = (index) => {
    let myItems = [...todos]
    myItems.splice(index,1)
    setToDos(myItems)
  }
  return (
    <div className='h-screen w-full sm:h-auto sm:w-auto'>
      <h1 className= "my-5 text-2xl w-full text-center font-extrabold">To Do List</h1>
      <div className='mb-2 h-4/5'>
      <ul>
{todos.map(({text,complete},index)=>{
  return (<div className="w-full  sm:w-auto flex flex-row "key={index} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
<li className = {`${complete}  w-3/4 mr-2 cursor-pointer`} onClick={()=>(handleDone(index))}>{text}</li>
<svg onClick={()=>(deleteTask(index))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin = "round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</div>)
})}
      </ul>
      </div>
      
      <div className='flex flex-row'>
      <input ref={itemRef} placeholder='Enter your task...' 
      className={clsx(
        'mt-3 mr-2 rounded-lg border-black border-solid border bg-white/5 py-1.5 px-3 text-sm/6 text-black w-3/4',
        'focus:outline-black data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black'
      )}/>
      <button onClick={handleClick} className='mt-3 inline items-center rounded-full bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white w-1/4'>Add</button>
    </div>
    </div>
  );
}

export default App;
