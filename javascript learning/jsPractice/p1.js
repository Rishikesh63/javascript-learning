

//  let findTarget=(array, target)=>{
//     console.log(array.length)
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i; 
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);


// let sum=(array1,target1)=>{
// // console.log(array1.length)
// for(let i=0;i<array1.length;i++){
//     for(let j=1;j<array1.length;j++){
//         if (target1==array1[i]+array1[j]){
//             console.log([i,j])
//         }
//     }
// }
// }

// const myArray1=[3,4,5,6]
// const ans1=sum(myArray1,10)

let twoSum=(nums,target)=>{
    // console.log(nums.length)
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if (target==nums[i]+nums[j]){
                console.log([i,j])
            }
        }
    }
    }
    
    const nums=[2,7,11,15]
    const ans2=twoSum(nums,9)
    console.log(nums)
    console.log(nums)
    console.log(nums)

    
    
    

