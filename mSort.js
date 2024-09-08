let arr = [2, 1, 4, 3, 6, 5, 9, 8]

function mergeSort(arr){

    console.log(arr)
    if(arr.length <= 1){ return arr }

    else{
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return sortArray(left, right)

    
    }
}


function sortArray(left, right){

    let newArray = []

    
    while (left.length && right.length) {
        
        if(left[0] < right[0]) {
            newArray.push(left.shift())
        } else {
            newArray.push(right.shift())
        }
    }
    return [...newArray, ...left, ...right]
}




console.log(mergeSort(arr))
