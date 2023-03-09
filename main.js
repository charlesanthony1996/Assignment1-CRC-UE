const arr = [1, 45, 3,7,4, 3, 532, 5]
const sorted = []
for (let i =0 ;i < arr.length - 1; i++) {
    // console.log(arr[i])
    for(let j = 0; j< arr.length -i - 1; j++) {
        // console.log(arr[j])
        if (arr[j] < arr[j+ 1]) {
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            sorted.push(temp)
            // console.log(sorted)
        }
        // console.log(sorted)
    }
    // console.log(sorted)
}

// uncomment this
// console.log(sorted)

// check for duplicates here and take them out

// merging after sorting an array

const arr2 = [1,5,2,6,3,6,5,7,4,32,2]

// breaking the array into two parts
// left and right
leftarray = []
rightarray = [] 

midpos = Math.floor(arr2.length / 2)
rightpos = arr2.slice(midpos)

// left part
for (let i = 0; i < midpos; i++) {
    // console.log(arr2[i])
    leftarray.push(arr2[i])
}

// log the left part of the array
// console.log(left)
// sort the left side
leftarray.sort()
console.log(leftarray)

// right part
for (let i = midpos+ 1; i < arr2.length; i++) {
    // console.log(arr2[i])
    rightarray.push(arr2[i]);
}


// sort the right side
rightarray.sort()

// log the right part of the array
// console.log(rightarray)

// add the two arrays and make it one
const sortedarray2 = leftarray.concat(rightarray)

console.log(sortedarray2)
// check why 32 is in between this?
// left pos is an array
// right pos is an array

// does this work?
console.log(sortedarray2.sort())


// implement this again while these two being arrays





// for (let i = 0; i < arr2.length - 1;i++) {
//     for(let j = 1; j < arr2.length - i - 1; j++)
//     {
//         if (arr2[j]> arr[j+ 1]) {
//             console.log("do the comparison check")
//         }
//     }
// }

