const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: Cam");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  conn.on("connect", () => {
    setInterval(() => {
      conn.write('Move: up')
    }, 1000);
  })

  conn.on("data", (data) => {
    console.log(`${data}`)
  });

  return conn;
};



module.exports = {
  connect
}