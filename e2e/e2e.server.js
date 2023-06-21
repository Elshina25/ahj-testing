import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "../webpack.dev.js";
import process from "process";

const server = new WebpackDevServer(webpack(config), {});
server.listen(8080, "localhost", (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});
