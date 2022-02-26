const newsRouter = require('./news');
const otherRouter = require('./others');
function route(app) {
  app.use('/news', newsRouter);
                 app.use('/', otherRouter);
}

module.exports = route;
