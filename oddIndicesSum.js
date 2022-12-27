solve = (A, B) => {
        let index = 0;
        let sumArray = [];

        if (B.length == 0) {
            return [];
        }

        while (index < B.length) {
            let element = B[index];
            let first = element[0];
            let second = element[1];
            let sum = 0;
            console.log('.,......', index);
            while (first <= second) {
                console.log('first.,......', first, 'secod .. ', second);
                if(first %2 == 1) {
                    sum += Number(A[first]);
                }
                first += 1;
            }
            sumArray.push(sum);
            index += 1;
        }

        console.log(sumArray);
	}

    let A = [ 16, 3, 3, 6, 7, 8, 17, 13, 7 ];
    let B = [
        [2, 6],
        [4, 7],
        [6, 7]
      ]

      solve(A,B)