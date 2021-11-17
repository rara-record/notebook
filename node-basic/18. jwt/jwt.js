// models/User.js 


// jsonToken 생성 메소드
const jwt = require('jsonwebtoken');
userSchema.methods.generateToken = function(cb) {

    let user = this;
 
    // jwt.sign(유저아이디, '작명') 
    let token = jwt.sign(user._id.toHexString(), 'secretToken'); // user._id : database / _id
 
    // user._id + 'secretToken' = token
    // input : 작명, output : user._id 
    // 작명'(아이디)를 가지고 누군지 판단
 
    user.token = token;
    user.save((err, user) => {
       if(err) return cb(err);
       cb(null, user) // 성공시 에러 null, user 정보 전달
    })
 }

 // index.js
 const cookieParser = require("cookie-parser");
 app.use(cookieParser());

 user.generateToken((err, user) => {
    if (err) return res.status(400).send(err);

    // 토큰을 저장한다. 어디에? cookie, localStorage, session 등.. 
    res
        .cookie("x_auth", user.token)
        .status(200)
        .json({
            loginSuccess: true, userId: user._id
        });
});