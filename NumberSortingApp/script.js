let arr=[];
let no=document.getElementById("no");
let p=document.getElementById("p");
let add=document.getElementById("add");
let result=document.getElementById("result");
let p1=document.getElementById("p1");
add.addEventListener('click',()=>{
    let number=Math.floor(no.value);
    
    if (number=="" && isNaN(number) ) {
        alert("No numbers to sort. Please add numbers first.");
    }
    else{
        if(number!="" && !isNaN(number)){
            arr.push(number); 
            p1.textContent=`The number that is added to array ${arr}`;
        }
       
       
    }
    no.value="";
});

result.addEventListener('click',()=>{
    if (arr.length === 0) {
        alert("No numbers to sort. Please add numbers first.");
    }
    else{
        for(let i=0;i<arr.length;i++){
            for(let j=i;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        p.textContent=`The sorted list is ${arr}`;
    }
   
  
})
