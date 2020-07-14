const {
    select,
    _delete
} = require('./service.js');

const resObj = (success,message,data) => {
  return {
    success: success,
    message: message,
    data: data
  }
}

const _select = (req,res,next)=>{

  if (!req.session.login){
    res.json(resObj(0,"Вы не авторизованы"));
    return;
  }

  select((error,obj)=>{
    if (error)
      return res.json(error);
    
    res.json(resObj(1,'OK',obj));
  });
}

const __delete = (req,res,next) => {
  _delete(req.params.id,(error,obj)=>{
    if (error)
      return res.json(error);

    res.json(resObj(1,'good delete'));
  })
}
module.exports = {
  select: _select,
  _delete: __delete
}