import express from 'express';
import user from '../controllers/user';
import validations from '../middleware/validations';
import schema from '../helpers/schema';
import secureRoute from '../helpers/tokenValidation';


const router = express.Router();
router.post('/', validations.validate(schema.signUpSchema, schema.options), user.signUpWithEmail);
router.get('/welcome', secureRoute, user.welcomeUser);
router.get('/logout', secureRoute, user.logout);
export default router;
