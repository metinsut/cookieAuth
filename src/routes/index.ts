import index from '../controllers';

const Route = (app: any) => {
   app.use('/', index);
};

export default Route;
