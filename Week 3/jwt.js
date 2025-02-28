const jwt = require("jsonwebtoken")

// decode, verify, generate

const value = {
    name:"harkirat",
    accountNumber:"12345678"
}

// jwt.sign is used to generate the jwt
const token = jwt.sign(value,"secret")
console.log(token)

// this token has been generated using this secret, and hence this token 
// can only be verified using this secret.  
// the token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoiMTIzNDU2NzgiLCJpYXQiOjE3NDA3NTM2NTd9.f6WcdArol5ld3AP8SuYV4WsmbHFuLHJao9kNFx4BNHI)
// is your cheque, and anyone can decode this cheque and see your original content with the help of this key
// but the game changer thing is your secret, the original secret key is used only to verify 