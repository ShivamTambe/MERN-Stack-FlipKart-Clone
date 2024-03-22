import express from "express";
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js";
// import { addPaymentGateWay } from "../controller/payment-controller.js";
import { addRazorPay } from "../controller/payment-controller.js";
import { addOrderValid } from "../controller/payment-controller.js";
import { getRoute } from "../controller/default.js";
const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

// router.post('/payment',addPaymentGateWay);
// router.post('/callback',paytmResponse)


router.post('/order',addRazorPay);
router.post('/order/validate',addOrderValid);


// router.get('/',getRoute);
export default router;