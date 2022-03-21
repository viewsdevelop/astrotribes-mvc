import { useState } from 'react';
import ArticlesList from './ArticlesList';
import ArticleCreate from './ArticleCreate';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

var sdkClient = require('../sdk/sdk');

function fetchMatthias() {
    
}

function ArticlesGallery({articles, setArticles, getArticles}) {    
    
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginTop: 120 }}>
            <Button 
                variant="contained"
                onClick={fetchMatthias}
            >
                Fetch Matthias!
            </Button>
            <br />
            <br />
            
            <h1>Community</h1>

            <Collapse in={open} style={{ padding: 10, margin: 50}}>
                <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Post Added!
                </Alert>
            </Collapse>

            <ArticleCreate 
                articles={articles}
                // setArticles={setArticles}
                getArticles={getArticles}
                setOpen={setOpen}
            />
            
            <h3>Most Recent Posts</h3>
            <ArticlesList 
                articles={articles} 
                getArticles={getArticles}
            />
        </div>
    )
}

export default ArticlesGallery;