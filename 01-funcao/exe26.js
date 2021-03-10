function par(a){
    for(let i = 0; i <= a; i += 2){
    console.log(i);
    };
};
par(100)

//                Ou assim 

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()