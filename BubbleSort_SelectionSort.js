/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
// temp = 5
// [5,2,7]
// [2,5,7,0,1,3]
function bubbleSort(nums){
    for(var i=0; i < nums.length; i++){
        for(var j=1; j<nums.length; j++){
            var temp = nums[i]
            if(nums[0] > nums[1]){
                temp = nums[1];
                nums[1] = nums[0];
                nums[0] = temp;
            }
            if(nums[i] < nums[j]){
                temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums
}
console.log(bubbleSort([2,5,7,0,1,3]))

function bubble2Sort(nums){
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            let s1 = nums[i]
            let s2 = nums[i+1]
            nums[i+1] = s1
            nums[i] = s2
        }
    }

    for(let i=0; i<nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            return bubble2Sort(nums)
        }
        return nums
    }
}
console.log(bubble2Sort([5,7,0,1,3]))


/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
function selectionSort(nums){
    for(var i=0; i < nums.length; i++){
        for(var j=1; j<nums.length; j++){
            var temp = nums[i]
            if(nums[0] > nums[1]){
                temp = nums[1];
                nums[1] = nums[0];
                nums[0] = temp;
            }
            if(nums[j] > nums[i]){
                temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums
}
console.log(selectionSort([2,5,7,0,1,3]))