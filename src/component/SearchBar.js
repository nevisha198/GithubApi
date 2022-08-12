import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const SearchBar = () => {

  const navigate = useNavigate()
  const [inputData, setInputData] = useState("")

  const searchUser = (input) => {
    if(validateData()){
      var config = {
        method: 'get',
        url: `https://api.github.com/users/${input}`,
        headers: { 
          'Accept': 'application/vnd.github+json'
        }
      };
      axios(config)
      .then(response=>{
          console.log(response)
          if(response.status === 200){
            navigate('/userprofile', {state : response.data})
          }else{
            console.log("innn")
            toast("Not Found!");
          } 
      })
      .catch(error=>{
          const errMsg = error.response.data.message;
          toast.error(errMsg,{
            theme: "colored"
          });
      })
    }
  }

  const validateData = () => {
    if(inputData === ""){
      toast.error("Enter username",{
        theme: "colored"
      });
      return false;
    }
    return true;
  }

    return (
      <>
      <center>
        <div className="logo">
          <img alt="github" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQRS41RuUacKy9LP2rW3r1rKHDexyyvwM4BQMewc4Z4suLBlPc7sPXGX0o2pvGwNV3n8&usqp=CAU" />
        </div>
        <div className="bar">
          <input className="searchbar"
              type="text" 
              title="Search" 
              placeholder="Search Username" 
              value={inputData}  
              onChange={(e)=>setInputData(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="button" type="button" onClick={()=> searchUser(inputData)}>Search</button>
        </div>
      </center>
      <ToastContainer />
      </>
    );
  };

  export default SearchBar