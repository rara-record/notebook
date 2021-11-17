const bcrypt = require('bcrypt');
const saltRounds = 10; 

// pre : 저장하기 전에 할 일
userSchema.pre('save', function (next) {
    let user = this; // userSchema를 가리킴
 
    // isModified : userSchema에서 비밀번호 변환시에만 할일
    if(user.isModified('password')) {
 
       // salt 생성 => salt를 이용해서 비밀번호를 암호화
       bcrypt.genSalt(saltRounds, (err, salt) => {
          if(err) return next(err)
 
          bcrypt.hash(user.password, salt, (err, hash) => {
          if(err) return next(err)
          user.password = hash 
          next() // next : index.js / user.save 로 돌려보냄
          })
       })
    } else { 
       next()
    }
});