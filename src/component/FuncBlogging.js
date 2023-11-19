import { useRef, useEffect, useState, useReducer } from "react";         // imported "state" library in functional component
import styled from "styled-components";  //  imported library for using "styled"

function blogReducer(state, action){
    switch(action.type){
        case "ADD":
            return [action.blogs, ...state];
        case "REMOVE":
            return state.filter((blog, index)=> index !== action.index);
            default:
                return [];
    }
}

function Blogging(){        // main function where all the sub-func as well as UI part has been done
    // const [title, setTitle] = useState("");     //created "state" for "title"
    // const [content, setContent] = useState("");     //created "state" for "content"

    const [formData, setFormData] = useState({title: "", content: ""});
    //const [blog, setBlog] = useState([]);       //created "state" for "blog" with a value of array to store multiple blog
    const [blog, dispatch] = useReducer(blogReducer, [])
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus();   //focusing only in initial render
    }, []);

    useEffect(()=>{
        if(blog.length){
            document.title = blog[0].title;
        }
    })

    const handleSubmit = (event) =>{        //this func handle the submission of form. It triggered when user submit the form element

        event.preventDefault();     //It helps to prevent the default behaviour
        // setBlog([{title, content}, ...blog]);       //storing "title" & "content" in a "blog" and used spread operator to get new blog as well as old blog

        // setBlog([{title: formData.title, content: formData.content}, ...blog]);
        dispatch({type: "ADD", blogs:{title: formData.title, content: formData.content}});
        // setBlog([formData, ...blog])

        // console.log("title - ", title);     //consoling title
        // console.log("content - ", content);     //consoling content
        console.log("blog - ", blog);       //consoling blog
        console.log(formData)

        // setTitle('');       //setting empty value for title after clicking the submit btn
        // setContent('');     //setting empty value for content after clicking the  submit btn

        setFormData({title: "", content: ""});      //empty the input field after clicking the add button
        titleRef.current.focus();       //It focuses the title input field automatically after clicking on add button
        
        console.log("titleRef - ", titleRef.current);

    }

    const handleTitleChange = (event) =>{       //this arrow func get the value whenever something changes occur in an input field
        // setTitle(event.target.value);       //get the input value of the title
        setFormData({title: event.target.value, content: formData.content});
    }

    const handleContentChange = (event) =>{     //this arrow func get the value whenever something changes occur in an input field
        // setContent(event.target.value);     //get the input value of the content
        setFormData({title: formData.title, content: event.target.value});
    }

    const handleDeleteBtn =(i)=>{
        // const updatedBlog = [...blog];       //creating a copy of the array using spread operator
        // updatedBlog.splice(i, 1);        //removing 1 element froma particular index (i) of the given array 
        // setBlog(updatedBlog);        //updating the setBlog after removing the element

        // setBlog(blog.filter((blog, index)=> i !== index));      //another method to delete the particular index
        dispatch({type: "REMOVE", index: i})
    }

        return(
            <Div>
                <Form onSubmit={handleSubmit}>
                    <div style={divCenter}>
                        <h3>Title</h3>
                        <Input style={{height: "40px", }} 
                                name="title" placeholder="Write your title" 
                                onChange={handleTitleChange}
                                value={formData.title}
                                id="clearTitleInput"
                                ref={titleRef}
                                required></Input>
                    </div>

                    <div style={divCenter}>
                        <h3>Content</h3>
                        <Textarea style={{height: "100px"}} 
                                    name="content" 
                                    placeholder="Write your content" 
                                    onChange={handleContentChange}
                                    value={formData.content} 
                                    id="clearContentInput"
                                    required></Textarea>
                    </div>

                    <button style={btn} type="submit">Add</button>
                    
                </Form>

                <hr style={{marginTop: "30px"}}/>
                <h2>Blogging</h2>

                {blog.map((Blog, index)=>(      //iterate the blog object to get the value at the particular index
                    <List style={{backgroundColor: (index %2 === 0) ? "#eee" : "#f9f9f9"}} key={index}>
                    <h3 style={{display: "flex", margin: "0"}}>{index+1 + ". "}{Blog.title}</h3>
                    <p style={{display: "flex", margin: "0 0 0 20px"}}>{Blog.content}</p>
                    <DeleteBtn onClick={()=>handleDeleteBtn(index)}>X</DeleteBtn>
                </List>
                ))}
            </Div>
        )
}

const Div = styled.div`
height: 94vh;
//   margin-top: 20px;
padding: 20px;
//   border: 2px solid black;
  text-align: center; /* Center child elements horizontally */
  font-family: cursive;
  background-image: url("https://github.com/PRAVEEN-KISPOTTA/project_image/blob/main/wrinkled-2537807.jpg?raw=true");
  background-size: contain;
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
font-family: cursive;
`

const Textarea = styled.textarea`
border-radius: 10px;
width: 90%;
word-wrap: break-word; /* This enables text wrapping */
font-family: cursive;
`

const divCenter = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}

const List = styled.div`
    // background-color: #2196f3;
    color: green;
    width: 50%;
    margin-left: 25%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: ;
    `

const btn = {
    height: "40px",
    width: "80px",
    margin: "5px",
    borderRadius: "15px"
}

const DeleteBtn = styled.div`
  position: relative;
  left: 97%; /* Adjust the value as needed to move the button to the left */
  margin-right: 20px; /* Adjust the right margin if necessary */
  margin-top: -20px;
  top: -44px;
  width: 37px;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: #fe0100;
  }
`;

export default Blogging;