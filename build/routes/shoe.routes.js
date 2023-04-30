"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shoe_controllers_1 = require("../controllers/shoe.controllers");
const router = (0, express_1.Router)();
router.get('/', shoe_controllers_1.getShoes);
router.get('/:id');
router.post('/', shoe_controllers_1.addShoe);
router.put('/:id');
router.delete('/:id');
exports.default = router;
