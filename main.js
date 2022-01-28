const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 1400
  })
  win.maximize();
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
