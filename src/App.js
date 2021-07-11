import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Output from './components/Output'
import * as math from 'mathjs';

function App() {
  const [text, setText] = useState('')
  const [result, setReasult] = useState('')

  function handlerCalc() {
    if (text === '') return;
  const output = text.join('')
  setReasult(math.evaluate(output))
}

  function addText(val) {
    setText(prevText => [...prevText,val])
  }

  function Delete() {
    setText('')
    setReasult('')
  }

function remove() {
  setText(text => text.slice(1))
   setReasult('')
}

  return (
    <div class="calculator-grid">
      <Output text={text} result={result}/>
      <Button num="AC" addText={remove} styleName="span-two"/>
      <Button num="DEL" addText={Delete} />
      <Button num="/" addText={addText}/>
      <Button num="1" addText={addText}/>
      <Button num="2" addText={addText}/>
      <Button num="3" addText={addText}/>
      <Button num="*" addText={addText}/>
      <Button num="4" addText={addText}/>
      <Button num="5" addText={addText}/>
      <Button num="6" addText={addText}/>
      <Button num="+" addText={addText}/>
      <Button num="7" addText={addText}/>
      <Button num="8" addText={addText}/>
      <Button num="9" addText={addText}/>
      <Button  num="-" addText={addText} />
      <Button  num="."  addText={addText}/>
      <Button  num="0" addText={addText} /> 
      <Button  num="=" addText={handlerCalc} styleName="span-two"/>
      </div>
 
  )
}

export default App
