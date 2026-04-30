const { app, BrowserWindow, ipcMain } = require("electron");

let win; // <-- make it global

function createWindow() {
  win = new BrowserWindow({
    width: 397,
    height: 587,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("index.html");
}

ipcMain.on("manualClose", () => {
  app.quit();
});

ipcMain.on("manualMinimize", () => {
  if (win) win.minimize();
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});