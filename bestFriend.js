const friendshipOne = {
    selfName : "Rahim" ,
    friendName : "Karim"
}



// const friendshipTwo = ["Shakil"]
// console.log(typeof(friendshipTwo))  //object ? validation ?

const friendshipTwo = {
    selfName : "Karim" ,
    friendName : "Kasem"
}


const bestFriend = (type1,type2)=> {
    if(typeof(type1) == "object" && typeof(type2) =="object"){
        // return "OK";
        if(type1.selfName.toLowerCase() == type2.friendName.toLowerCase() && type2.friendName.toLowerCase() ==  type1.selfName.toLowerCase()){
          return "They are Best Friend";
        }
        return "They are not Best Friend";
    }
    else {
        return "Pls Input Object Type Data"
    }
}
// console.log(bestFriend(friendshipOne,friendshipTwo));