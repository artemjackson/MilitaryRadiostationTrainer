import app from "app";
import BrowserWindow from "browser-window";
import ipc from "ipc";

ipc.on('close-main-window', function () {
    app.quit();
});

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        fullscreen: true,
        frame: false
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
