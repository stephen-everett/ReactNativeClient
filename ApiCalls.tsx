import BaseUrl from "./BaseUrl"


// send get requests to pull all messages from server
export const getMessages = async () => {
    try {
        const response = await BaseUrl.get('/get/messages')
        return response.data
    }
    catch(err) {
        console.error(err.message, "getMessages()")
    }
}

// post a message to the server
export const postMessage = async(message) => {
    try {
        return await BaseUrl.post('/post/message',{"test":message})
    }
    catch(err){
        console.error(err.message, "postMessage()")
    }
}

// request the menu items associated with a given lobby_id
// lobby_id is extracted from QRCode image inside of Lobby.tsx
export const getMenuItems = async(lobby_id) => {
    console.log("Lobby ID: ", lobby_id)
    try{
        response = await BaseUrl.post("/lobby/join", {"lobby_id":-832278219})
        return response.data
    }
    catch(err) {
        console.error(err.message, "getMenuItems()")
    }
}