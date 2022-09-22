let array = [1,2,3,6,9,8,7,4]
function swap(){
        array.unshift(array.pop()) 
        for(i in array) document.getElementById(`${i}`).innerText = array[i]      
}
