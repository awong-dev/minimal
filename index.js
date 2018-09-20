const winston = require('winston');
const express = require('express');

const logger = winston.createLogger({
  level:  'info',
  format: winston.format.combine(
		  winston.format.colorize(),
		  winston.format.simple()),
  transports: [
    new (winston.transports.Console)({
      handleExceptions: true,
      prettyPrint: (object) => JSON.stringify(object, null, 2),
      timestamp: true
    })
  ]
});


if (module === require.main) {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.static('public'));
  app.listen(port, () => {
    logger.info(`Listenting on port ${port}`);
  })
}
