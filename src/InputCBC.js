import { Component } from "react";
import styled from "styled-components";

//CBC = class based component


class InputCBC extends Component{
    constructor(){
        super();

        this.state={
            firstName: "",
            lastName: ""
        }
    }

    firstNameHandler = (event) =>{
        // event.preventDefault();
        console.log(event.target.value)

        this.setState({
            firstName: event.target.value
        })
    }

    lastNameHandler = (event) =>{
        // event.preventDefault();
        console.log(event.target.value)

        this.setState({
            lastName: event.target.value
        })
    }

    componentDidMount(){
        document.title = `${this.state.firstName} ${this.state.lastName}`;

        this.timer = setInterval(()=>{
            console.log("Window size width (CBC) - ", window.innerWidth);
        }, 3000)
    }

    componentDidUpdate(){
        document.title = `${this.state.firstName} ${this.state.lastName}`
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
            <Row>First Name 
                <input style={{marginTop: "15%"}} onChange={this.firstNameHandler} value={this.state.firstName}></input>
            </Row>

            <Row>Last Name 
                <input style={{marginTop: "15%"}} onChange={this.lastNameHandler} value={this.state.lastName}></input>
            </Row>

            <h2>Hello {this.state.firstName + " " + this.state.lastName}</h2>
        </div>
        )
    }
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

export default InputCBC;