import { Component } from "react";
import styled from "styled-components";

class Blogging extends Component{
    constructor(){
        super();

        this.state = {
            title: "",
            content: ""
        }
    }

    handleSubmit = (event) =>{
        const titleInput = document.getElementById('clearTitleInput');
        const contentInput = document.getElementById('clearContentInput');
        event.preventDefault();

        console.log(this.state.title)
        // this.setState({
        //     title: this.state.title,
        //     content: this.state.content
        // })

        titleInput.value = '';
        contentInput.value = '';
    }

    handleTitleChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleContentChange = (event) =>{
        this.setState({
            content: event.target.value
        })
    }

    render(){
        return(
            <Div>
                <Form onSubmit={this.handleSubmit}>
                    <div style={divCenter}>
                        <h3>Title</h3>
                        <Input style={{height: "40px", }} name="title" placeholder="Write your title" onChange={this.handleTitleChange} id="clearTitleInput"></Input>
                    </div>

                    <div style={divCenter}>
                        <h3>Content</h3>
                        <Textarea style={{height: "100px"}} name="content" placeholder="Write your content" onChange={this.handleContentChange} id="clearContentInput"></Textarea>
                    </div>

                    <button type="submit">Add</button>
                    
                </Form>

                <hr style={{marginTop: "30px"}}/>
                <h2>Blogging</h2>

                <div style={bottomContent}>
                    <h4>{this.state.title}</h4>
                    <p>{this.state.content}</p>
                </div>
            </Div>
        )
    }
}

const Div = styled.div`
height: 100vh;
  margin-top: 20px;
  text-align: center; /* Center child elements horizontally */
`


const Form = styled.form`
margin-left: 20%;
border: 2px solid green;
background-color: #fa8f61;
width: 60%;
border-radius: 25px;

`

const Input = styled.input`
border-radius: 10px;
width: 90%;
`

const Textarea = styled.textarea`
border-radius: 10px;
width: 90%;
word-wrap: break-word; /* This enables text wrapping */
`

const divCenter = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}

const bottomContent = {
    backgroundColor: "#2196f3",
    color: "white",
    alignItems: "center",
    width: "50%",
    marginLeft: "25%",
    borderRadius: "5px"
}
export default Blogging;