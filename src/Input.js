import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Input(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // useEffect(()=>{
    //     document.title = `${firstName} ${lastName}`
    // })

    useEffect(()=>{
        document.title = `${firstName} ${lastName}`
    }, [lastName]);

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("window width (FC) -", window.innerWidth);
        }, 3000);

        return ()=>(clearInterval(timer));
    })
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
            <Row>First Name
                <input style={{marginTop: "15%"}} value={firstName} onChange={(event) => {setFirstName(event.target.value)}}></input>
            </Row>

            <Row>Last Name
                <input style={{marginTop: "15%"}} value={lastName} onChange={(event) => {setLastName(event.target.value)}}></input>
            </Row>

            <h2>Hii, myself <span style={{color: "blue"}}>{firstName}</span> {" "} <span style={{color: "green"}}>{lastName}</span></h2>
        </div>
    )
}


const Row = styled.div`
height: 10rem;
width: 30%;
border: 1px solid black;
background-color: brown;
color: white;
margin-bottom: 20px;
border-radius: 25px;
`