import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function Header() {
    return (
        <>
            <h1>Welcome, Leo Tribe Members & Friends!</h1>
            <p>1,478 Members</p>
        </>
    );
}

function ContinuousSlider() {
    const [value, setValue] = React.useState(30);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
      </Box>
    );
}

function Container() {
    return (
        <div style={{ border: "1px solid", lineHeight : 10, margin: 20 }}>
            <div style={{ border: "1px solid", lineHeight : 10, margin: 20 }}>
                <ContinuousSlider />
                <p>Hey there!</p>
            </div>
        </div>
    );
}

function Main() {
    return(
        <>
            <Header />
            <Container />
        </>
    );
}

export default Main;