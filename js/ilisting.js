function loadcoupon()
{
    document.getElementById('coupon').style.display="block";
    document.getElementById('car').style.opacity="0.2";
    document.getElementById('head').style.opacity="0.2";
   
}

closecoupon=()=>{
    document.getElementById('coupon').style.display="none";
    document.getElementById('car').style.opacity="1";
    document.getElementById('head').style.opacity="1";
}

changemode=()=>{
     
    let a=document.body;
    let b=document.getElementById('foot');
    let c=document.getElementById('collapsibleNavbar')
    let d=document.getElementById('nav');
    let e=d.getElementsByClassName('idesc');
    let f=d.getElementsByTagName('a');
    let g=document.getElementById('nav');
    let h=document.getElementById('nav1');
    
    let x=document.getElementById('modebutton');
    
    
    x.addEventListener("click", function(){ 
     let y=document.getElementsByTagName("h4");
     
     for (let index = 0; index < y.length; index++) {
      
     if(y[index].classList.contains("fonters"))
     {
      y[index].classList.remove("fonters");
      y[index].classList.add("fonters2");
     }
    
      else{
        y[index].classList.add("fonters");
      y[index].classList.remove("fonters2");
      }
    
    
    
      
     }
     
     for (let index = 0; index < e.length; index++) {
        if(!a.classList.contains('darkmode'))
        e[index].style.color="cornsilk";
        else
        e[index].style.color="#282c3f";
     }

     for (let index = 0; index < f.length; index++) {
        if(!a.classList.contains('darkmode'))
        f[index].style.color="cornsilk";
        else
        f[index].style.color="#282c3f";

        
     }
    
     
  a.classList.toggle('darkmode');
    b.classList.toggle('darkmode');
    c.classList.toggle('navdark');
    if(a.classList.contains('darkmode'))
    x.style.color="cornsilk";
    else
    x.style.color="black";
    if(a.classList.contains('darkmode'))
    {
    g.style.backgroundColor="#585858"
    h.style.backgroundColor="#585858"
    
    }
    else
    {
    g.style.backgroundColor="#ffff";
    h.style.backgroundColor="#ffff"
    
    }


  
  });

}