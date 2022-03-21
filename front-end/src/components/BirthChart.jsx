import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

import axios from 'axios';

function BirthChart() {
    const [ name, setName ] = useState("");
    const [ dob, setDob ] = useState(new Date());
    // const [ tob, setTob ] = useState("");
    const [ pob, setPob ] = useState("");
    
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getUTCFullYear();
    let hour = dob.getUTCHours();
    let minute = dob.getUTCMinutes();

    console.log(day);

    function handleName(e) {
        setName(e.target.value)
    }

    function handleDob(e) {
        // console.log(e.getDate());
        setDob(e);
    }

    function handlePob(e) {
        setPob(e.target.value)
    }

    const getPlaceId = (name, accessToken) => { 
            fetch("https://api.bloom.be/api/places", {
            method: "POST",
            headers: {
                'Accept-Encoding': 'application/json',
                'Authorization': `Bearer [${accessToken}]`
            },
            body: JSON.stringify({
                name: name
            })
        })
        .then(r => r.json())
        .then(place_id => {
            console.log(place_id);
            return place_id;
        });
    };

    const getBearerToken = () => {
        fetch("https://api.bloom.be/api/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',   
            },
            body: JSON.stringify({
                email: "viewsdevelop@gmail.com",
                password: "8AkafzYLHYc3GNAX"
            })
        })
        .then(r => {
            console.log(r)
            r.json()            
        })
        .then(token => {
            console.log(token);
            return token;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const { accessToken } = getBearerToken();

        const { place_id } = getPlaceId(pob, accessToken);

        fetch('https://api.bloom.be/api/natal', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer[${accessToken}]`
                },

                // "1984-03-27"
                body: JSON.stringify({
                    name: name,
                    date: `${year}-${month}-${day}`,
                    time: `${hour}-${minute}`,
                    place_id: place_id,
                    lang: "en",
                    system: "p"
                })
            }
        )
        .then(r => r.json())
        .then(data => {
            // articlesArray.push(article)
            // setArticles(articlesArray)
    
            // setOpen(true);
            // getArticles();
            console.log(data);
        });
    
        // setTitle("");
        // setBody("");
    }

    return (
        <div style={{ border: "1px solid", padding: 10, margin: 50}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                        backgroundColor: 'primary.dark',
                        padding: 5,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl variant="standard">
                        <InputLabel 
                            htmlFor="component-helper" 
                            style={{color: "white"}}
                        >
                            Name
                        </InputLabel>
                        <FilledInput
                            style={{color: "white"}}
                            value={name}
                            onChange={handleName}
                            placeholder="Enter Name"
                            inputProps={{style: {fontSize: 30}}}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        {/* <InputLabel 
                            htmlFor="component-helper" 
                            style={{color: "white"}}
                        >
                            Date of Birth
                        </InputLabel> */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={dob}
                                onChange={handleDob}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            {/* <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/dd/yyyy"
                                value={dob}
                                onChange={handleDob}
                                renderInput={(params) => <TextField {...params} />}
                            /> */}
                            </Stack>
                        </LocalizationProvider>
                        
                        {/* <FilledInput
                            style={{color: "white"}}
                            value={dob}
                            onChange={handleDob}
                            placeholder="Enter DOB"
                            inputProps={{style: {fontSize: 30}}}
                        /> */}
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel 
                            htmlFor="component-helper" 
                            style={{color: "white"}}
                        >
                            Place of Birth
                        </InputLabel>
                        <FilledInput
                            style={{color: "white"}}
                            value={pob}
                            onChange={handlePob}
                            placeholder="Enter Name"
                            inputProps={{style: {fontSize: 30}}}
                        />
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" onClick={handleSubmit}>Say Hello 👋 </Button>
                    {/* <button type="submit">Edit Article</button> */}
                    {/* <h2 style={{ color: "white" }}>{title} {body}</h2> */}
                    {/* <h1>Title: {title}</h1>
                    <h1>Body: {body}</h1> */}
                </Box>
            {/* <form onSubmit={handleSubmit}>
                    <input 
                        value={title}
                        onChange={handleTitle}
                        placeholder="Enter Title"
                    >
                    </input>
                    | 
                    <input 
                        value={body}
                        onChange={handleBody}
                        placeholder="Enter Body"
                    >
                    </input>
                    <br />
                    <br />
                    <button type="submit">Create Article</button>
                </form> */}

        </div>
    )
}

export default BirthChart;