let arr = [5,8,9,1,4,2,4,7]

//console.log(arr)

function mergeSort(arr){
    //console.log(arr)

    //base case
    if (arr.length <= 1){
        return arr
    }
        let mid = Math.floor(arr.length / 2)
        console.log(mid)

        let left = arr.slice(0, mid)
        left = mergeSort(left)
        console.log(left)

        let right = arr.slice(mid)
        right = mergeSort(right)
        console.log(right)
    
    

    return sortSides(left, right)
}

function sortSides(left, right){
    let newArr = []

    while (left.length && right.length > 0){
        if (left[0] < right[0]){
            newArr.push(left.shift())
        } else {
            newArr.push(right.shift())
        }
    }

    return [...newArr, ...left, ...right]
}

console.log(mergeSort(arr))