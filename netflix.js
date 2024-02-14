function Clickme(){
    document.location.href='netflixsignin.html';
}
function Submitd(){
    let a= document.getElementById('namee').value;
    let b=document.getElementById('pwd').value;
    if(a==''||a==null){
        alert('enter yout name');
          
        return false;
    }else if(b==''||b==null){
        alert('enter your password')
        return false;

    } 
    document.location.href = 'netflixsubmit.html';
    
}
function clllickk(){
    // document.location.href='step1.html'
    let n=document.getElementById('seee').value;
    if(n==''||n==null){
        alert('enter your email')
        return false;
    }
    document.location.href='step1.html';
}
 
 
 
