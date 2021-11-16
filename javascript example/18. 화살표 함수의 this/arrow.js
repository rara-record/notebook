function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
const add3 = (x, y) => x + y; 

const add4 = (x, y) => (x + y); // 리턴값은 한번 괄호로 묶어줌
const obj = (x, y) => ({x, y}); // 객체를 리턴하는 경우 소괄호 필수



var relationship1 = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function() {
        var that = this; // relationship1이 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        })

        // this.friends.forEach((friend) => {
        //     console.log(this.name, friend);
        // })
    }
}
relationship1.logFriends();



// 화살표 함수가 기존 function() {} 을 대체하는 건 아님 (this가 달라짐)
// function은 function마다 자기만의 this를 갖는다
// 화살표 함수는 자기만의 this를 갖지않고, 부모의 this를 물려받는다.
// 정리 : 물려받고 싶지 않을때는 function() {}을 사용한다.