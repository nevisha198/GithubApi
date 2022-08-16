const axios = require('axios')

module.exports.searchUser = async (input) => {
    const url = `https://api.github.com/users/${input}`;

      return await axios.get(url) 
  }

module.exports.validateData = (input) => {
    if(input === ""){
      return false;
    }else{
      return true;
    } 
}


 