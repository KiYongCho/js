var l = 1; // global

function outer() {
    console.log(l); // 1
    l = 3; // global
    console.log(l); // 3
    function inner() {
        // var l; // inner local scope에서 호이스팅
        console.log(l); // undefined
        var l = 5; // inner local
        console.log(l); // 5
    }
    inner();
}

outer();

console.log(l); // 3