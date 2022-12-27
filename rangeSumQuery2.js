solve = (A, B) =>{
    for(let i=1; i<A.length; i++) {
        A[i] += A[i-1];
    }//for

    let result = [];
    for(let query of B) {
        console.log('............', query, A[query[1]-1], A[query[0]-2])
        let L = query[0] - 1;
        console.log('L - ', L)
        if(L == 0) {
            result.push(Number(A[query[1] - 1]));
        } else {
            result.push(Number(A[query[1]-1]) - Number(A[query[0] - 2]));
        }
        
    }
    console.log('result - ', result)
    return result;
}

let A = [ 6, 3, 3, 6 ];
let B = [
    [1, 4],
    [1, 3]
  ]

solve(A, B);