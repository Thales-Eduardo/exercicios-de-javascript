function pa(n, a1, r) {
   for(let i = 0; i < n; i++){
       console.log(a1 + r*i);
   }
   console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2);
};
pa(10, 10, 15);

console.log('progressão geometrica...');

function pg(n, a1, r) {
    for(let e = 0; e < n; e++){
        console.log(a1 *(r**e));
    };
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
};
pg(10, 5, 3);
