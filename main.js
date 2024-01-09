const { app, BrowserWindow } = require('electron')
const path = require('path')


const isDev = false //! Dev mode config

const isMac = process.platform === 'darwin'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../carz/build/index.html')}`
  )
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (!isMac) app.quit()
})

app.on('ativate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})