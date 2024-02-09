import React, { useState } from 'react';

function GuessInput() {

  const [guess,setGuess] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log({guess});
    setGuess("");
  }


  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input required id="guess-input" maxLength={5} minLength={5} type="text" value={guess} onChange={(e)=>{
    setGuess(e.target.value.toUpperCase());
  }}/>
</form>
  )
}

export default GuessInput;
