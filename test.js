console.log(v); // 1. undefined
function outer() {
    console.log(v); // 2. undefined
    function inner() {
        console.log(v); // 3. undefined
        var v = 'inner';
        console.log(v); // 4. inner
    }
    var v = 'outer';
    inner();
    console.log(v); // 5. outer
}
outer();
var v = 'global';