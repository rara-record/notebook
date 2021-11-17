// middleware / auth.js

const { User } = require('../models/User');

// 인증처리 미들웨어 생성
let auth = (req, res, next) => {

   // 클라이언트 쿠키에서 토큰을 가져온다.
   let token = req.cookies.x_auth;

   // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인한다.
   User.findByToken(token, (err, user) => {
      if (err) throw err;
      if (!user)
         return res.json({
         isAuth: false,
         error: true
      });

      req.token = token; // 복호화 된 token 저장
      req.user = user; // 복호화 된 user 저장
      next(); // post.auth 로 돌아가기 : next 안쓰면 이 미들웨어에 갇히게 된다.
   })
}


module.exports = { auth };


// models.User.js
// 토큰 복호화 메소드 생성
userSchema.statics.findByToken = function(token, cb) {
   let user = this;

   // verify: 토큰을 decode(복호화) 함수
   jwt.verify(token, 'secretToken', function(err, decode) { // 토큰 검증

      // 유저 아이디와 토큰을 이용해서 유저를 찾는다
      user.findOne({ "_id" : decode, "token" : token}, function(err, user) {
         if(err) return cb(err);
         cb(null, user)       
      })
   }) 
}


// index.js
// 인증 기능
const { auth } = require("./middleware/auth");

app.get('/api/users/auth', auth, (req, res) => {
   // 미들웨어 통과 후 실행될 코드
   // 미들웨어를 통화했다 => Authentication가 Ture다.
 
   // 클라이언트에 응답, 어떤 정보를?
   res.status(200).json({ 
     _id: req.user._id,
     isAdmin: req.user.role === 0 ? false : true,
     isAuth: true,
     email: req.user.email,
     name: req.user.name,
     lastname: req.user.lastname,
     role: req.user.role,
     image: req.user.image,
   })
 });

 

