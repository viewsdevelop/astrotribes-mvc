import { useState } from 'react';

import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';

function ArticleCreate({ articles, getArticles, setOpen }) {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleBody(e) {
        setBody(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        let articlesArray = [...articles];

        fetch('http://localhost:3001/articles', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({
                    title: title,
                    body: body
                })
            }
        )
        .then(r => r.json())
        .then(article => {
            // articlesArray.push(article)
            // setArticles(articlesArray)

            setOpen(true);
            getArticles();
            console.log(article);
        });

        setTitle("");
        setBody("");
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
                            Title
                        </InputLabel>
                        <FilledInput
                            style={{color: "white"}}
                            value={title}
                            onChange={handleTitle}
                            placeholder="Enter Title"
                            inputProps={{style: {fontSize: 30}}}
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel 
                            htmlFor="component-helper" 
                            style={{color: "white"}}
                        >
                            Body
                        </InputLabel>
                        <FilledInput
                            style={{color: "white"}}
                            value={body}
                            onChange={handleBody}
                            placeholder="Enter Body"
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
    );
}

export default ArticleCreate;