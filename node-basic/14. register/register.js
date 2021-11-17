const { User } = require("./models/User");

app.post('/register', (req, res) => {
    
    // 회원 가입 할떄 필요한 정보들을 cclient에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

// 포스트맨에서 post요청