import React from 'react';
import { FormControlLabel, Checkbox, Stack } from '@mui/material'

// list
// { completed: boolean, name: string }
// type List = { completed: boolean, name: string }

const list = (props) => {

    return <Stack m={4}>
            <>{
            props.list.map((el, i) => {
                if ((!props.hide && el.completed) || !el.completed) {
                    return <FormControlLabel checked={el.completed} onChange={() => props.onUpdate(i)} control={<Checkbox defaultChecked  />} label={el.label} />
                }
            })
        }</>
        </Stack>
    
}

export default list;