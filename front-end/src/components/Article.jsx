import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Article({ article, getArticles }) {    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    function handleDelete() {
        
        // Open Modal when I click on Trash Icon
        handleClose();

        // if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:3001/articles/${article.id}`, {
                method: 'DELETE'
                })
                .then(r => console.log(r))
                .then(article => {
                    getArticles();
                    console.log(article);
            });
        // } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        // }
    }
    
    return (
        <div style={{ border: "1px solid", padding: 10, margin: 50 }}>
                <div>
                    {/* <Button onClick={handleOpen}>OPEN THE DAMN MODAL</Button> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} textAlign="center">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Are You Sure?
                            </Typography>
                            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Are you sure?
                            </Typography> */}
                            <br />
                            <Button onClick={handleDelete}>Delete</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </Box>    
                    </Modal>
                </div>
            
            <Box
                sx={{
                    padding: 5,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
                <h1 style={{color: "white"}}>{article.title}</h1>
                <p style={{color: "white"}}>{article.body}</p>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                    <Link to={`/articles/${article.id}`} style={{textDecoration: "none"}}>
                        <Button variant="contained" style={{color: "white"}}>
                            <ZoomInIcon />
                        </Button>
                    </Link>
                    <Button variant="contained" onClick={handleOpen}>
                        <DeleteOutlineIcon />
                    </Button>
                </Stack>    
            </Box>
        </div>
    )
}

export default Article;