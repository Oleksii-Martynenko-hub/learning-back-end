const app = require('./server');

const mongoConnect = require('./server/utils/db').mongoConnect;

mongoConnect(() => {
  app.listen(4000);
});
