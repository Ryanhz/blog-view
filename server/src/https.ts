import server from "./app";
import path from "path";
import fs from "fs";
import https from "https";


const cerDir = path.join(__dirname, "..", "SSL", "www.enight.club", "Nginx")
console.log(cerDir);
// 根据项目的路径导入生成的证书文件
const privateKey = fs.readFileSync(path.join(cerDir, "2_www.enight.club.key"), 'utf8')
const certificate = fs.readFileSync(path.join(cerDir, '1_www.enight.club_bundle.crt'), 'utf8')
const credentials = {
  key: privateKey,
  cert: certificate,
}

// 创建https服务器实例
const httpsServer = https.createServer(credentials, server.callback())
// 设置https的访问端口号
const SSLPORT = 8008
// 启动服务器，监听对应的端口
httpsServer.listen(SSLPORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${SSLPORT}`)
})