
{
   let oo = {
      name : 'bb',
      kk : {
         cc : {
            dd : function () {
               console.log(this)
            }
         }
      },
   };
   
   let ff = oo.kk.cc.dd.bind(8);
   oo.kk.cc.ee = ff; // ee를 추가해서 ff넣기
   oo.kk.cc.dd(); // {dd: ƒ, ee: ƒ}
   oo.kk.cc.ee(); // 8 
   
   /* 
      oo.kk.cc.dd === oo.kk.cc.dd.ee 는 flase이다
      oo.kk.cc.ee는 oo.kk.cc.dd에서 this만 8로 바꿔서(bind함수에서 넘겨준 값이 this가 되므로) 새롭게 만든 함수이다. 
      즉, bind를 쓰면 this를 고정할 수 있음(dd.bind하면 this가 정해진다)
   */
}



{
   /* let result = f() 했을때 a+r과 같을 수 있도록 만들기 */ 

   let r = Math.random();
   let a = 10;
   let f = solution(a, function() {
      return this + r;
   });
   let result = f();



   function solution(num, f) {
      let ff = f.bind(num);
      return ff;
   }
   console.log(result)
}






