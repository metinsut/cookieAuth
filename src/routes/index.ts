import index from '../controllers';
import singUp from '../controllers/signUp';
import singIn from '../controllers/signIn';
import verifyUser from '../middleware/veriyfUser';
import dashboard from '../controllers/dashboard';

const Route = (app: any) => {
   app.use('/', index);
   app.use('/signup', singUp);
   app.use('/signin', singIn);
   app.use('/dash', verifyUser, dashboard);
};

export default Route;
