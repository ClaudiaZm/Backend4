import { Router } from 'express';
import { check } from 'express-validator';
import postCtrl from '../controllers/postController.js';
import { verifyToken } from '../middleware/auth.js';
import { upload } from '../middleware/imgUpload.js';
import { validFields } from '../middleware/validarCampos.js';


const route = Router();

route.get('/', verifyToken,postCtrl.listar);
route.get('/user', verifyToken,postCtrl.listarPostLogin);
route.get('/:id', verifyToken,postCtrl.listOne);
route.delete('/:id',verifyToken, postCtrl.delete);
route.put('/:id', verifyToken,upload.single("img"), postCtrl.update);
route.post('/',verifyToken,upload.single("img"), postCtrl.add);

export default route;



// [
// check("title","el campo title es obligatorio").notEmpty(),
// check("description","el campo description es obligatorio").notEmpty(),
// ],
// validFields,