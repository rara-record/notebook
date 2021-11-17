// models/User.js 

// 비밀번호 비교 메소드 생성 : plainPassword를 암호화 시켜서 비교한다.
userSchema.methods.comparePassword = function(plainPassword, call) {

    // ex) plainPassword 1234567 === hashPassword : $2b$10$smjX/wlIpdOM4 
    bcrypt.compare(plainPassword, this.password, 
        function(err, isMatch) {
            if(err) return call(err), 

            // 에러는 null, 결과값 : isMatch (성공)
            call(null, isMatch)
    })
}

// index.js
app.post('/login', (res, res) => {
  
    // 요청된 이메일을 데이터 베이스에서 찾는다
    User.findOne({ email : res.body.email }, (err, user) => {
        if(!user) {
        return res.json({
            loginSuccess : false, 
            message: "제공된 이메일에 해당하는 유저가 없습니다."
        })
        }
    })

    // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인. 
    user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch) { // 결과가 맞지 않다면
        return res.json({ loginSuccess : false, message: "비밀번호가 틀렸습니다."})
        }

        // 비밀번호가 맞다면 Token 생성
        user.generateToken((err, user) => {
        
        })
    })
})