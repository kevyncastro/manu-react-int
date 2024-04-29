import './App.css';
import { useState, useEffect } from 'react';
import List from './list/list'
import { Typography, Checkbox, FormControlLabel, TextField, Stack, Button } from '@mui/material';

function App() {

  const [hide, setHide] = useState(false)
  const [text, setText] = useState('')
  const [list, setList] = useState(
    [
      { label: '1', completed: true},
      { label: '1', completed: false},
      { label: '1', completed: true},
      { label: '1', completed: true},
    ]
  )

  const onAddHandler = () => {
    const newList = [...list, {
      label: text, completed: false
    }]
    setText('')
    setList(newList);
  }

  const onUpdate= (i) => {
    const newList = list.map((el, index) => {
      if (i === index) {
        return { ...el, completed: !el.completed }
      }
      return el
    })
    setList(newList)
  }

  return (
    <div className="App">
      <Typography mt={2}> To do list</Typography>
        <FormControlLabel onClick={() => setHide(!hide)} checked={hide} control={<Checkbox defaultChecked />} label="Hide completed"/>
      <List list={list} hide={hide} onUpdate={onUpdate}></List>
      <Stack m={2} spacing={1} direction={'row'}>
        <TextField onChange={(e) => setText(e.target.value)}></TextField>
        <Button onClick={onAddHandler} variant='contained' disabled={text === ''}>Add</Button>
      </Stack>
    </div>
  );
}

export default App;
