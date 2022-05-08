const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought
} = require('../../controllers/userController');

//* /api/thought
router.route('/').get(getThought).post(createThought);

//* /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);


module.exports = router;