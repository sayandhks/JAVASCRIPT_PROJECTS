function check(){
    let entry=document.getElementsByTagName("input")[0].value
    let rev=entry.split("").reverse().join("")
    if (entry===rev){
        alert("PALINDROME !")
        
    }else{
        alert("NOT PALINDROME !")
        
    }
    document.getElementsByTagName("input")[0].value=""
    
}