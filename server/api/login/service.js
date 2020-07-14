const {
  conn
} = require('../../sqlite');

var login = (user,callBack,next)=>{
  db = conn();

  db.get(`SELECT user_id FROM users WHERE login = ? AND password = ?`,[
    user.login,
    user.password
  ],(err,row) => {
    if (row){
      callBack(null,{
        success: 1,
        message: "Да залогинились"
      });
    } else {
      callBack({
        success: 0,
        message: "Логин или пароль неверны"
      });
    }

  });

  db.close();
}
module.exports = {
  login
}