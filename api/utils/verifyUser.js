import errorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //   let token;
  //   if (req.headers.authorization.startsWith("Bearer")) {
  //     token = req.headers.authorization.split(" ")[1];
  //   }

  if (!token) {
    return next(errorHandler(401, "Unauthorized!"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(403, "Forbidden!");
    }
    req.user = user;
    next();
  });
};
