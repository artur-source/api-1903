const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ usuarios: [] });
});

module.exports = router;