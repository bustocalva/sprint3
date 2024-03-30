const net = require('net');
const portNumber = Number(process.argv[2]);

const server = net.createServer(function (socket) {
  // Lógica de gestion de socket
  socket.write(todayDate());
  socket.end();
});
server.listen(portNumber);

function todayDate() {
  // funcion para dar la fecha
  const date = new Date();
  const year = date.getFullYear();
  let result = '';

  const format = (integers) => {
    // Agregamos un 0 si el dato es <= 9
    if (integers <= 9) {
      return '0' + integers;
    } else {
      return integers;
    }
  };

  const month = format(date.getMonth() + 1);
  const day = format(date.getDate());
  const hours = format(date.getHours());
  const minutes = format(date.getMinutes());

  result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
  return result;
}