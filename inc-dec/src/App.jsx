import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';


const App = () =>{

  const [num, setNum] = useState(0);

  const incNum = () =>{
    setNum(num + 1);
  }
  const decNum = () =>{
    if(num > 0){
      setNum(num - 1);
    }
    }

  return(
    <div className='main_div'>
      <div className='center_div'>
        <h1>{num}</h1>
        <div className='btn_div'>
          <Button onClick={incNum}><AddIcon/></Button>
          <Button onClick={decNum}><RemoveIcon /></Button>
        </div>
      </div>
    </div>
  )
}

export default App;