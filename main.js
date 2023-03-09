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

console.log(sorted)

// check for duplicates here and take them out

// merging after sorting an array

arr2 = [1,5,2,6,3,6,5,7,4,32,2]

// breaking the array into two parts
// left and right
left = []
right = [] 

for (let i = 0; i < arr2.length - 1;i++) {
    for(let j = 1; j < arr2.length - i - 1; j++)
    {
        if (arr2[j]> arr[j+ 1]) {
            console.log("do the comparison check")
        }
    }
}

