import jwt from 'jwt-simple';
import { SECRET } from '../config/secret';

const verifyUser = (req: any, res: any, next: any) => {
   const { signedCookies = {} } = req;
   console.log(signedCookies);
   console.log('aaaaaaaaaaa');
   next();
   //  if (token) {
   //      jwt.verify(token, key.api_secret_key, (err, decoded) => {
   //          if (err) {
   //              res.json({
   //                  status: false,
   //                  message: 'Failed to authenticate token.',
   //                  err,
   //              });
   //          } else {
   //              req.decode = decoded;
   //              next();
   //          }
   //      });
   //  } else {
   //      res.json({
   //          status: false,
   //          message: 'No token provided',
   //      });
   //  }
};

export default verifyUser;
