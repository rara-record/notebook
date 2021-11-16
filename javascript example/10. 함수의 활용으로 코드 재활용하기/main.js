'use strict';

{
    let star = function (number) {
        let input = '*';
        let count = number;
        let result = '';

        while (count > 0) {
            result = result + input;
            count--;
        }
        
        console.log(result);
    }
    
    star(1);
    star(3);
    star(5);
}

/********  수정 코드 ********/
{
    let star = function (number) {
        let input = '*';
        let count = number;
        let result = '';
    
        while (count > 0) {
            result = result + input;
            count--;
        }
        return result;
    };
    
    console.log('--------10부터 1까지 별찍기')    
    let repeat = 11;
    while(true) {
        repeat--;
        // console.log(repeat);
        console.log(star(repeat));
        if (repeat < 2) {
            break;
        }
    }

    console.log('--------1부터 10까지 별찍기')
    let repeat2 = 0;
    while(true) {
        repeat2++;
        // console.log(repeat);
        console.log(star(repeat2));
        if (repeat2 > 10) {
            break;
        }
    }
}












