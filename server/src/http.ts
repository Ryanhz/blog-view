import server from "./app";
let port = 8001
server.listen(port, () => {
  console.log(`服务启动：${port} 端口`)
})

export default server;