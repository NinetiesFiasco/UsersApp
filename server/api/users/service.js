const {
  conn
} = require('../../sqlite');

const select = (callBack,next) => {
  let db = conn();
  db.all(`SELECT user_id,login,email,password FROM users`, (err,rows) => {
    callBack(err,rows);
  });
  db.close();
}

const _delete = (id,callBack,next) => {
  let db = conn();
  db.run('DELETE FROM users WHERE user_id = ?',[id],(err)=>{

    if (err)
      console.log("some err: ",err);

    callBack(err,"Zadelicheno");
  });
  db.close();
}

module.exports = {
  select: select,
  _delete: _delete
}