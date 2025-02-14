import { app, BrowserWindow } from 'electron';
import * as path from 'path';
// We'll determine dev mode based on the command line argument
const isDev = process.argv.includes('--dev');

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
  };
  
  if (process.platform === 'linux' && !process.env.DISPLAY) {
    options.frame = false;
    options.x = 0;
    options.y = 0;
    app.commandLine.appendSwitch('disable-gpu');
    app.commandLine.appendSwitch('no-sandbox');
    app.commandLine.appendSwitch('headless');
  }
  
  mainWindow = new BrowserWindow(options);

  const startUrl = isDev 
    ? 'http://localhost:3000' 
    : `file://${path.join(__dirname, '../.next/server/app/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
