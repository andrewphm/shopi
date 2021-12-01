const router = require('express').Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../controllers/verifyToken');

const { updateUser, deleteUser, getUser } = require('../controllers/user');

// UPDATE user
router.put('/:id', verifyTokenAndAuthorization, updateUser);

// DELETE user
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

// GET user
router.get('/:id', verifyTokenAndAdmin, getUser);
module.exports = router;
