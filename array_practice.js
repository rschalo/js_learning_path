//reverse an array
var ar=[1,2,3];
newArray = []
const reverseArray = function(ar){
    newArray = (ar.slice().reverse());
    return newArray;
}


//is uniform determines if all elements are equivalent.. it's hideous
checkUniform = function(uniformArray){
    uniformArray.forEach(function(element){
        sameNumber = array[0];
        if(element !== array [0]){
            console.log(false);
            return false;
        } else {
            console.log(true);
            return true;
        }
    });
}

//sumArray() adds all numbers, also accepts negative numbers
sumArray = function(array){
    sum = 0;
    array.forEach(function(element){
        sum += element;
    }); console.log(sum);
}

//tests for the max value in an array
max = function(array){
    biggest=0;
    array.forEach(function(element){
        if(element>biggest){
            biggest=element;
        }
    });
    return biggest;
    console.log(biggest);
}
