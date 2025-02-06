/**  Assignment : A website which have 2 endpoints
    POST/SIGN IN (return a jwt with username encrypted)          GET/USERS (return an array of all users if user is signed in (token is correct), and return 403 status code if not)
*/

const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"