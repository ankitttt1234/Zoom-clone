generateMessage =(username,msg) =>{
    
    return({
        username,
        msg:msg,
        time: new Date().getTime()
    })

}
generateLocationMessage = (username,msg) =>{
    return({
        username,
        msg:msg,
        time: new Date().getTime()
    })
}

module.exports ={
    generateMessage,
    generateLocationMessage
}