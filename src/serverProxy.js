module.exports = function(app) {
  app.use(
    createProxyMiddleware(["/api/*"], { target: "https://mern-todo909.herokuapp.com/" })
  );
};
