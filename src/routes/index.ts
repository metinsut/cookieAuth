import index from '../controllers';
import singUp from '../controllers/signUp';

const Route = (app: any) => {
   app.use('/', index);
   app.use('/signup', singUp);
};

export default Route;
