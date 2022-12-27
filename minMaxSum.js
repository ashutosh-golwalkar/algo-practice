solve = (A) =>{
        let max = A[0];
        let min;
        if(A[0] < A[1]) {
            min = A[0];
            max = A[1];
        } else {
            min = A[1];
        }

        console.log(min, max)

        for(let i = 2; i < A.length; i++) {
            if(A[i] > max) {
                max = A[i];
            }
            if(A[i] < min) {
                min = A[i];
            }
        };

        return max + min;
	}

    solve([-6]);