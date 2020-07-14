const md5 = require('md5');
const {
    login
} = require('./service.js');

const resObj = (success,message) => {
  return {
    success: success,
    message: message
  }
}

var _login = (req, res, next) => {
  let data = req.body;

  data.password = md5(`${data.login}myMiniSalt${data.password}`);

  login( data, (error, obj) => {
    
    if (error) {
      req.session.login = false;
      return res.json(error);
    }

    req.session.login = true;

    res.json(resObj(1,obj));
  });
}

var _logout = (req,res,next) => {
  req.session.login = false;
  res.json(resObj(1,"Успешно вылогинились"));
}

var isAuth = (req,res,next) => {
  if (req.session.login)
    res.json(resObj(1,"Да"));
  else
    res.json(resObj(0,"Нет"));
} 

module.exports = {
  login: _login,
  logout: _logout,
  isAuth
}