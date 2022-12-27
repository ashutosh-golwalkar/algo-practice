solve = (A) => {
    if(A.length < 2) {
        return -1;
    }

    let max = A[0];
    let second;
    if(A[1] > A[0]) {
        max = A[1];
        second = A[0];
    } else {
        second = A[1];
    }
    for(let i=2; i < A.length; i++) {
        console.log('max - ', max, 'second - ', second, 'A[i] - ', A[i]);
        if(A[i] == max) {
            continue;
        } else if(A[i] > max) {
            second = max;
            max = A[i];
        } else if(A[i] > second) {
            second = A[i];
        }
    }//for
    console.log('after for');
    console.log('max - ', max, 'second - ', second);

    return Number(second);
}

solve([ 11, 15, 19 ])