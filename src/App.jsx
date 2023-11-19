import React, { useState } from 'react'
import db from '../Data/db.json'

const App = () => {
  const [input, setInput] = useState('')
  console.log(db.users);
  return (
    <div className='text-center text-red-600 mt-5'>
      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} className={`border-[1px] py-1 ps-2 outline-none border-x-green-700`}/>
      </div>
      {
        db.users.filter(val=>{
          return (input === '' && val) || (val.name && val.name.toLocaleLowerCase().includes(input.toLowerCase()) && val)
        }).map((val, index) => (
          <section key={val.id} className='mt-2'>
            <div>{val.name}</div>
            <div>{val.age}</div>
            <div>{val.city}</div>
          </section>
        ))
      }
    </div>
  )
}

export default App