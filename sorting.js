//bubble
//selection
//insertion
const array2 = [29, 10, 14, 37, 13];

function bubbleSort(arr){
    let n = arr.length;
for(let i=0; i<n-1; i++){
    for(let j=0; j<n-i-1; j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
    }
    return arr;
}
}

function selectionSort(arr){
    
    
}

console.log(selectionSort(array2));