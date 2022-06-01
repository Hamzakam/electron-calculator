const {app,BrowserWindow} = require("electron");
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
        width:720,
        height:480,   
    });
    win.loadFile("index.html")
}

app.whenReady().then(()=>{
    try{
        createWindow();
    } catch(error) {
        console.log(error);
    }
});
