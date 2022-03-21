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


import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ArticleEdit({ articles, getArticles }) {
    const { id } = useParams();

    const navigate = useNavigate();

    // console.log(articles);

    // console.log(articles.find(article => console.log(article.id)));

    let title = articles.find(article => `${article.id}` === id).title;
    let body = articles.find(article => `${article.id}` === id).body;
    
    const [ formTitle, setFormTitle ] = useState(title);
    const [ formBody, setFormBody ] = useState(body);

    function handleTitle(e) {
        setFormTitle(e.target.value)
    }

    function handleBody(e) {
        setFormBody(e.target.value)
    }

    function handleEdit(e) {
        e.preventDefault();

        let articlesArray = [...articles];

        fetch(`http://localhost:3001/articles/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify({
                    title: formTitle,
                    body: formBody
                })
            }
        )
        .then(r => r.json())
        .then(article => {
            // articlesArray.find(article.id);
            // setArticles(articlesArray);

            getArticles();
            console.log(articles);
        });

        navigate('/articles');
        // getArticles();
    }
    
    return (
        <>
            <h1>Edit Article</h1>
            <div style={{ border: "1px solid", padding: 10, margin: 50 }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                        backgroundColor: 'primary.dark',
                        padding: 5,
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
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
                        <Input
                            style={{color: "white"}}
                            value={formTitle}
                            onChange={handleTitle}
                            placeholder="Enter Title"
                        />
                    </FormControl>
                    {/* <FormControl variant="standard">
                        <InputLabel 
                            htmlFor="component-helper" 
                            style={{color: "white"}}
                        >
                            Body
                        </InputLabel>
                        <Input
                            style={{color: "white"}}
                            value={formBody}
                            onChange={handleBody}
                            placeholder="Enter Body"
                        />
                    </FormControl> */}
                    <Button variant="contained" onClick={handleEdit}>Rename</Button>
                    {/* <button type="submit">Edit Article</button> */}
                </Box>
            </div>
            {/* <form onSubmit={handleEdit}>
                    <input 
                        value={formTitle}
                        onChange={handleTitle}
                        placeholder="Enter Title"
                    >
                    </input>
                    | |
                    <input 
                        value={formBody}
                        onChange={handleBody}
                        placeholder="Enter Body"
                    >
                    </input>
                    <button type="submit">Edit Article</button>
            </form> */}
        </>    
    );
}

export default ArticleEdit;