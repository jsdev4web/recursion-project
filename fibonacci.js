
let n1 = 1; 
let n2 = 2;

function fibonacci(n){
    for (let i = 0; i < n; i++ ){
        console.log(n1)
        nextNum = n1 + n2
        n1 = n2;
        n2 = nextNum;
    }
}

//fibonacci(5)

function fib(n){
        if (n < 3){ 
        return n;
    }
    let y = fib(n-1) + fib(n-2)

    return fib(n-1) + fib(n-2)
}

console.log(fib(6))

