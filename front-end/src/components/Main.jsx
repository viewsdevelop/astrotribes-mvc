import { useState } from 'react';

function Main() {
    
    const [ response, setResponse ] = useState("");

    function sendRequest() {
        console.log("Test")
        
        fetch('http://localhost:3001/')
        .then(r => r.json())
        .then(resp => setResponse(resp.body));
    }
    
    return(
        <>
            <br />
            <button onClick={sendRequest}>Send Request</button>
            <h2>{response}</h2>
        </>
    );
}

export default Main;