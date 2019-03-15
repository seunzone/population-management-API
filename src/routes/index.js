const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to the population API');
  });
};

export default routes;
