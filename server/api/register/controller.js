const md5 = require('md5');
const {
    register,
} = require('./service.js');

var _register = (req,res,next)=>{
    let data = req.body;

    if (data.passInp != data.passRepeatInp)
      res.json({
        success:0,
        message:"Пароли не совпадают"
      });

    data.password = md5(`${data.login}myMiniSalt${data.passInp}`);

    register(data,(error,obj)=>{
        if (error)
            return res.json(error);
        
        res.json({
            success:1,
            message:obj
        });
    });
}

module.exports = {
  register: _register
}