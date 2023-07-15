const express = require('express')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');



const {Signin , Signup , signout } =  require('../../controllers/admin/auth')

const router = express.Router()
router.route('/admin/signin').post( validateSigninRequest,isRequestValidated , Signin)
router.route('/admin/signup').post(Signup)
router.post('/admin/signout', signout)




module.exports =  router