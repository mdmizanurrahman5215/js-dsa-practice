

let arr = [5, 12, 7, 20, 3, 15, 8, 1, 10, 6, 19];

let max = Math.max(arr[0], arr[1]) 
let sMax =Math.min(arr[0], arr[1]) 


for( let i = 2 ; i <arr.length ; i++){
    if(max < arr[i]){
        max = arr[i]
    } else if( sMax < arr[i]){
         sMax = arr[i]
    }else if(max < sMax ){
        max = sMax

    }
}
console.log(sMax);
