const logger = (req, res, next) => {
  const time = new Date().toISOString();

  process.stdout.write(
    `[${time}] ${req.method} ${req.url}\n`
  );

  next();
};

module.exports = logger;