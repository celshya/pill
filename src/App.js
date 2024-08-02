
import { useEffect, useState } from 'react';
import './App.css';

import Pill from './components/Pill';



function App() {
const [inputText,setInputText] = useState("")
const [suggestions,setSuggestions] = useState([])
const [selected,setSelected] = useState([])

const [suggestionset,setSuggestionset] = useState(new Set())



const handlePillClick = (mail)=>{
  const updatedselection = selected.filter((user)=>user.email!==mail)
  setSelected(updatedselection)

  const newsuggestionset = new Set(suggestionset)
  newsuggestionset.delete(mail)
  setSuggestionset(newsuggestionset)
}

const handleClick =(selectedItem)=>{
console.log(suggestions)

  if(suggestionset.has(selectedItem.email)){
    return
  }
  setSelected([...selected,selectedItem])
  setSuggestionset(new Set([...suggestionset,selectedItem.email]))
  setInputText("")
  setSuggestions((prevsuggestions)=>prevsuggestions.filter((ele)=>ele.email!==selectedItem.email))
}
useEffect(()=>{
  const fetchAPI = async()=>{

    const res = await fetch(`https://dummyjson.com/users/search?q=${inputText}`)
    const data = await res.json()
  
    console.log(data)
  
    const filtered = data.users.filter((user)=>!suggestionset.has(user.email))
    setSuggestions(filtered)
  
  }

  fetchAPI()
},[inputText,suggestionset])

  return (
    <div className="App"><h1>Pill in React</h1>
    <div className='container'>
    {/* Pill */}
    <Pill selectedItems={selected} handlePillClick={handlePillClick}/>
    
    <span className='input-field'>
    <input type='text' className='text' value={inputText} placeholder="Search Names.."onChange={(e)=>setInputText(e.target.value)}></input>
    <span className='suggestions'>

      {suggestions.map((ele,ind)=>{
        return <div className='main-sugg' key={ele.email} onClick={()=>handleClick(ele)}>
        <div className='sugg-clip'>
        <img src={ele.image} alt={ele.email}/>

          <h5>{ele.firstName}  {ele.lastName}</h5>
        </div></div>
      })}
    </span>
    </span>
   


    </div>
      
    </div>
  );
}

export default App;
