import React, { useState } from 'react';

function GuessInput({handleSubmitGuess}) {

  const [tentativeGuess,setTentativeGuess] = useState('');

  

  function handleSubmit(e){
    e.preventDefault();

    if(tentativeGuess.length<5){
      window.alert("Please input 5 characters");
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }


  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input required id="guess-input" maxLength={5} minLength={5} type="text" value={tentativeGuess} onChange={(e)=>{
    setTentativeGuess(e.target.value.toUpperCase());
  }}/>
</form>
  )
}

export default GuessInput;
