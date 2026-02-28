const express = require('express')
const { authorizeBearerToken, authorizeAdmin } = require('../middlewares/jsonwebtoken')
const register = require('../controllers/auth/register')
const login = require('../controllers/auth/login')
const loginWithToken = require('../controllers/auth/login-with-token')
const updateUser = require('../controllers/auth/update-user')
const getAllUsers = require('../controllers/auth/get-all-users')
const updateRole = require('../controllers/auth/update-role')

// initialize router
const router = express.Router()

// POST at route: http://localhost:8080/auth/register
router.post('/register', [], register)

// POST at path: http://localhost:8080/auth/login
router.post('/login', [], login)

// GET at path: http://localhost:8080/auth/account
router.get('/login', [authorizeBearerToken], loginWithToken)

// PUT at path: http://localhost:8080/auth/update
router.put('/update', [authorizeBearerToken], updateUser)

// GET at path: http://localhost:8080/auth/users
router.get('/users', [authorizeBearerToken, authorizeAdmin], getAllUsers)

// PUT at path: http://localhost:8080/auth/role
router.put('/role', [authorizeBearerToken, authorizeAdmin], updateRole)

module.exports = router
