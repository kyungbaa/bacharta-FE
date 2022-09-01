const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    `https://unipass.customs.go.kr:38010/ext/rest/trifFxrtInfoQry/retrieveTrifFxrtInfo?crkyCn=${process.env.REACT_APP_EXCHANGE_KEY}&qryYymmDd=20220901&imexTp=2`,
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
};
