
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';
import Razorpay from 'razorpay';
import formidable from 'formidable';
import https from 'https';
import crypto from 'crypto';

export const addPaymentGateWay=async(request,response)=>{
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.status(200).json(params);
    } catch (error) {
        console.log(error);
        response.status(500).json({error:error.message });

    }
}
export const addRazorPay =async(requset,response)=>{    
    try{
        const razorpay = new Razorpay({
            key_id:process.env.RAZORPAY_ID,
            key_secret:process.env.RAZORPAY_SECRET,
        });
        const options = requset.body;
        const order = await razorpay.orders.create(options);
    
        if(!order){
            return response.status(500).send("Error");
        }
        response.send(order);
    }catch(error){
        console.log("Error: ", error.message);
        response.status(500).send(error)
    }

}
export const addOrderValid=async(request,response)=>{
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =request.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  response.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
}
// export const paytmResponse=(request,response)=>{
    // const form = new formidable.IncomingForm();
    // const paytmCheckSum = request.body.CHECKSUMHASH;
    // delete request.body.CHECKSUMHASH;
    // const isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey, paytmCheckSum);
    // if (isVerifySignature) {
    //     let paytmParams = {};
    //     paytmParams["MID"] = request.body.MID;
    //     paytmParams["ORDERID"] = request.body.ORDERID;

    //     paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function (checksum) {

    //         paytmParams["CHECKSUMHASH"] = checksum;

    //         const post_data = JSON.stringify(paytmParams);

    //         const options = {
    //             hostname: 'securegw-stage.paytm.in',
    //             port: 443,
    //             path: '/order/status',
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Content-Length': post_data.length
    //             }
    //         };

    //         let res = "";
    //         const post_req = https.request(options, function (post_res) {
    //             post_res.on('data', function (chunk) {
    //                 res += chunk;
    //             });

    //             post_res.on('end', function () {
    //                 let result = JSON.parse(res);
    //                 console.log(result);
    //                 response.redirect(`http://localhost:3000/`)
    //             });
    //         });
    //         post_req.write(post_data);
    //         post_req.end();
    //     });
    // } else {
    //     console.log("Checksum Mismatched");
    // }
// }