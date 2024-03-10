
import './App.css';
import { useState } from 'react'
import {numbers,upperCaseLetters,lowerCaseLetters,specialCaseLetter} from './Chracters'

function App() {
const [password,setPassword] = useState('');
const [passwordLength,setPasswordLength] = useState(20);
const [includeUpperCase,setIncludeUpperCase] = useState(false);
const [includeLowerCase,setIncludeLowerCase] = useState(false);
const [includeNumber,setIncludeNumber] = useState(false);
const [includeSpecialCase,setIncludeSpecialCase] = useState(false);

  const handlePassword = (e) =>{
    let characterList = '';

    if(includeLowerCase){
      characterList = characterList + lowerCaseLetters;
    }
    if(includeUpperCase){
       characterList = characterList + upperCaseLetters;
    }

    if(includeNumber){
      characterList = characterList + numbers;

    }
    if(includeSpecialCase){
      characterList = characterList + specialCaseLetter;
    }

    setPassword(createPassword(characterList));
     
  }
   const createPassword  = (characterList) => {
       let password = '';
       const characterListLength = characterList.length;

       for(let i =0; i < passwordLength; i++){
         const characterListIndex = Math.round(Math.random() * characterListLength);
         password = password + characterList.charAt(characterListIndex);
        }

         return password;
   }




  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generat_header">
            Password Generator
          </h2>
          <div className="generator-password">
            <h3>{password}</h3>
            <button className="copy_btn">
              <i className='far fa-clipboard'></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input type="number" defaultValue={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} 
            id="pass-stre"
             name="pass-stre"
              max="20" 
              min="10"></input>
          </div>
          <div className="form-group">
            <label htmlFor="upper-case">Include uppercase Letter</label>
            <input 
            checked={includeUpperCase} onChange={(e)=>setIncludeUpperCase(e.target.checked)}
             type="checkbox" id="upper-case" name="upper-case"></input>
          </div>
          <div className="form-group">
            <label htmlFor="lower-case">Include lower Letter</label>
            <input type="checkbox"
             checked = {includeLowerCase} onChange={(e)=>setIncludeLowerCase(e.target.checked)}
             id="lower-case" name="lower-case"></input>
          </div>
          <div className="form-group">
            <label htmlFor="special-case">Include Special case</label>
            <input type="checkbox"
            checked = {includeSpecialCase} onChange={(e)=>setIncludeSpecialCase(e.target.checked)}
            id="special-case" name="special-case"></input>
          </div>
          <div className="form-group">
            <label htmlFor="include-number">Include Number</label>
            <input type="checkbox"
             checked = {includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)}
            id="include-number" name="include-number"></input>
          </div>

          <button onClick={handlePassword} className="generate-password">Generator button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
