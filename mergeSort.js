
let arr = [3, 2, 1, 13, 8, 5, 0, 1]

//main function
function mergeSort(arr){

    //initial split in half code
    let splitRight = [];
    let splitLeft = [];

    splitLeft = arr.slice(0, 4)
    splitRight = arr.slice(4)

    console.log(splitLeft + " Left")
    console.log(splitRight + " Right")

    mergeHelper(splitLeft, splitRight)
};

mergeSort(arr)

// driver function
function mergeHelper(left, right){
    //can i use the above arrays? YES
    console.log(left)
    console.log(right)

     //leftSplit1 = left.slice(0, left.length / 2)
     //console.log(leftSplit1)


     //this functions chunks arrays into single array
     let chunks = function(arr, size){
        let results = [];
        while(arr.length){
            results.push(arr.splice(0,size))
        }

        return results
     }


     //leftSplit2 = left.slice(left.length / 2)
     //console.log(leftSplit2)
    
    //single arrays in order
    let leftSide = chunks(left, 1)
     leftSide.sort(function(a,b){return a-b})
     console.log(leftSide)


     let mergedL = [].concat(...leftSide)

     console.log(mergedL)

     // right side

     //single arrays here in order
     let rightSide = chunks(right, 1)     
     rightSide.sort(function(a,b){return a-b})
     console.log(rightSide)


     let mergedR = [].concat(...rightSide)

     console.log(mergedR)
    
     let finalSort = [].concat(mergedL, mergedR).sort(function(a,b){return a-b})
     console.log(finalSort)
}


