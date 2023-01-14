import { Router } from 'express';
import { getData, postData } from '../controllers/mydata.controller';

const router = Router();

   router
      .get('/', getData)
      .post('/', postData);

export default router;