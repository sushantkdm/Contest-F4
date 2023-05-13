import React, { useState } from 'react';

function Calculator() {
  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [result, setResult] = useState('');
  let [error, setError] = useState('');
  let [success, setSuccess] = useState('');


  function checkAll () {
    setError('');
    setSuccess('');
    setResult('');

   
      if (num1.trim() == ''&& num2.trim() == '' ) {
        setError('Error : Num1 and Num2 can not be empty');
        return false;
      }  
      if (num1.trim() === '') {
        setError('Error : Num1 can not be empty');
        return false;
      }
      if (num2.trim() === '') {
          setError('Error : Num2 can not be empty');
          return false;
        }
     if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return false;
     }
     return true;
    }

  function add(){
    if (checkAll()) {
        const result = parseFloat(num1) + parseFloat(num2);
        setResult(result);        
      setSuccess('Success : Your result is shown above!')
    }
  };
  function sub(){
    if (checkAll()) {
        const result = parseFloat(num1) - parseFloat(num2);
        setResult(result);  
      setSuccess('Success : Your result is shown above!')
      return;
    }
  };

  function mult(){
    if (checkAll()) {
        const result = parseFloat(num1) * parseFloat(num2);
        setResult(result);        
      setSuccess('Success : Your result is shown above!')
    }
  };

  function divide(){
    if (checkAll()) {
      if (parseFloat(num2) === 0) {
        setError('Undefined: can not be divided by 0');
        return;
      }

      let result = (parseFloat(num1) / parseFloat(num2)).toFixed(5);
      setResult(result);      
      setSuccess('Success : Your result is shown above!')
    }
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br/>
      <br/>
      <input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
       <br/>
      <br/>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={mult}>*</button>
        <button onClick={divide}>/</button>
      </div>
      {error && <div className='error'>{error}</div>}
      {success && <div className='result'>Result = {result} </div>}
      {success && <div className='success'> {success}</div>}
    </div>
  );
}

export default Calculator;
