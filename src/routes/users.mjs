/* eslint-disable no-unused-vars */
import express from "express";
import UsersServices from "../services/servicesUsers.mjs"

const router = express.Router();

router.get('/', async (req,res) => {
  const getUsers = await UsersServices.getAllUsers(req,res)
  return getUsers;
});

export default  router