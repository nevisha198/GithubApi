const searchUser = (input) => {
        if(validateData(input)){
            if(input == "nevisha198"){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
  }

const validateData = (input) => {
    if(input === ""){
      return false;
    }else{
      return true;
    } 
}

module.exports = searchUser;