const { app, BrowserWindow } = require('electron')

let mainWindow
//escuchamos el evento ready para cuando la app este lista
app.on('ready', createWindow)

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadFile('index.html')
}