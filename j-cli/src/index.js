import './index.css';
// import './index.scss';
// import test from './component/test/test.js';
import test from '@/component/test/test';

import myimg from '@/p1.png';

console.log(myimg);
document.querySelector('#myimg').src = myimg;

console.log("Hello webpack~!");
console.log("Hello webpack world ~!");
console.log(test);
let func = (arr) => {
    arr.map( item => {
        console.log(item);
    });
};
func([1,2,3,1,2,3]);