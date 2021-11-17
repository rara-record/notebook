app.get('/api/users/logout', auth, (req, res) => {
    // user._id : 미들웨어 auth user 를 찾음 , 그 유저의 토큰을 지워준다.
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, decode) => {  
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});