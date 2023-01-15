import { Router } from 'express';
import { getData, postData, updateData } from '../controllers/mydata.controller';

const router = Router();

   router
      .get('/', getData)
      .post('/', postData);

export default router;