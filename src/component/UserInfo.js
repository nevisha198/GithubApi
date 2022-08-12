import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const UserInfo = () =>{

    const navigate = useNavigate()
    const location = useLocation();
    const [repoList, setRepoList] = useState([])
    const {name, avatar_url,login,public_repos,repos_url} = location.state;

    useEffect(()=>{
      if(public_repos !== 0){
        getRepo()
      }
    },[])

    const getRepo = () => {
      axios.get(repos_url)
      .then((response)=>{
        if(response.status === 200){
          const repoData = response.data;
          setRepoList(repoData)
        }
      })
      .catch((error)=>{
        const errMsg = error.response.data.message;
          toast.error(errMsg,{
            theme: "colored"
          });
      })
    }

    return (
      <>
      <div className="card">
      <nav className="header ">
        <button className="back-button" type="button" onClick={() => navigate('/')}>Back</button>
        <p>User Profile</p>
      </nav>
        <div className="card-container">
          <img className="round" src={avatar_url} alt="user" />
          <h2>Name : {name}</h2>
          <h4>Username : {login}</h4>
          <h4>Total Repository : {public_repos}</h4>
        </div>
      <div className="cards scroll">
      <ul class="list-group list-group-flush">
           {repoList.map((item)=>(
            
            <li  class="list-group-item">
              <div className="card-body">
              <h4 class="card-title">Repository Name : {item.name}</h4>
              <p class="card-text">Description : {item.description}</p>

              </div>
              </li>
           ))}
        </ul>
      </div>
    </div>
    <ToastContainer />
    </>
    )
}

export default UserInfo;