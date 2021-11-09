let port = 9000;
let timeout = 2 * 1000;

var dates = require('./base/data.json');

// console.log(dates.X1)

const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: `${port}` });

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    /** Обработчик сообщений */
    wsClient.on('message', function(message) {
        try {
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case 'GetDATA':
                    wsClient.send(JSON.stringify(dates));
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

console.log(`Запущено, порт: ${port}`);
