function getInitData(res) {
  return res.locals.initData;
}

const showInitDataMiddleware = (_req, res, next) => {
  const initData = getInitData(res);
  if (!initData) {
    return next(
      new Error('Cant display init data as long as it was not found'),
    );
  }
  return res.json(initData);
};

module.exports = showInitDataMiddleware;
