const {
  query
} = require('../../sqlite');

var register = (user,callBack,next)=>{
  query(`INSERT INTO users (login,email,password) VALUES (?,?,?)`,[
    user.login,
    user.email,
    user.password
  ]);
  callBack(null,"i'm ok");
}
module.exports = {
  register
}