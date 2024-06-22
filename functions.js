function add (a, b){
    return a + b;
}

var add = function (a, b){
    return a + b;
}

var add = (a, b) => {return a + b};

const adds = (a, b) => a + b;
var c = 2, d = 5;
(function (c, d){
    console.log('printing..');
    return c + d;
})(c, d);

var callbacsk = 2;
function callback () {console.log('Print from Inside')}
const addition = function (a, b, callFunc){
    
    console.log(a + b);
    //callback();
    callFunc();
}
/*addition (4,5,function(){
    console.log('print from here');
});

addition (1,2, callback, (function(){
    console.log('now print');
})());*/

addition (1,2, () => console.log('now print'));