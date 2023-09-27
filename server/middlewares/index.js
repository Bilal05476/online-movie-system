export const AuthorizeRequest = (req, res, next) => {
  let api;
  // Check if user is authenticated
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      api = req.headers.authorization.split(" ")[1];
      if (api === process.env.APIKEY) {
        next();
      }
    } catch (err) {
      res.status(401).json({ message: "Invalid API KEY" });
    }
  }
  if (!api) {
    res.status(401).json({
      error: "No authorized, no API KEY, please provide key in request header!",
    });
  }
};
