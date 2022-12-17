import getUserName from "./getUserName.js";

const greeting=()=>{
    const username = getUserName();
    if(username){
        console.log(`Welcome to the File Manager, ${username}!`)
    }
}

export default greeting;
