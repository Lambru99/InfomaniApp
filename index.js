const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      nativeWindowOpen: true
    }
  });

  win.setBounds({ x: 0, y: 0, width: 800, height: 600 });

  win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    callback({ requestHeaders: details.requestHeaders });
  });

  win.loadURL("https://ksuite.infomaniak.com/").catch(error => console.error(error));
});
