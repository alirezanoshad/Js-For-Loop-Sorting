//Basic arrays with numbers to examine The Function
let loz =[8,15,6,79];
let poz =[4,80,9]; 
//sortin Function using 2 for inside other one  without using sort()
function NumberSorting(array) {
    //Declaring the number of numbers in array
    let n = array.length;
    //know each comepring need 2 number... to compare them we need to compare n number, n-1 times
    //First loop in orfer to find out how many times we need to campare..
    for (let i = 0; i < n-1; i++) {
        //Second lopp in order to Actually Compare Numbers in one single Array 
        for (let j = 0; j < n - 1 - i; j++) {
            if(array[j]>array[j+1]){
                //in order to Swap numbers
                let swap = array[j]
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
            
        }
        
    }
    return array
}
console.log(NumberSorting(loz))
console.log(NumberSorting(poz))

