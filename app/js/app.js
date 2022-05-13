let count = 1;

window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
    console.log('scrolling up');
    if (count < 1) {
        let div_one_1 = document.getElementById('div-one-1');
        div_one_1.style.left =count + 'vw';
        let div_one_2 = document.getElementById('div-one-2');
        div_one_2.style.right =count + 'vw';
        console.log(count + 'vw');
        count = count + 1;
    }
 }
 else if (event.deltaY > 0)
 {
    console.log('scrolling down');
    if (count > -50) {
        count = count - 1;
        let div_one_1 = document.getElementById('div-one-1');
        div_one_1.style.left =count + 'vw';
        let div_one_2 = document.getElementById('div-one-2');
        div_one_2.style.right =count + 'vw';
        console.log(count + 'vw');
    }
  
 }
});
function fnDown() {
    let div_one_1 = document.getElementById('div-one-1');
    let div_one_2 = document.getElementById('div-one-2');
    var inter_down = setInterval(() => {
       if (count > -51) {
           div_one_1.style.left =count + 'vw';
           div_one_2.style.right =count + 'vw';
           count = count - 1;  
           console.log(count + 'vw');   
       } 
       else {
           clearInterval(inter_down);
           
       }      
    }, 8)
}

function fnUp() {
    let div_one_1 = document.getElementById('div-one-1');
    let div_one_2 = document.getElementById('div-one-2');
    var inter_up =  setInterval(() => {
        if (count < 1) {
            div_one_1.style.left =count + 'vw';
            div_one_2.style.right =count + 'vw';
            count = count + 1 
            console.log(count)        
        } 
        else {
            clearInterval(inter_up);
            
        } 
      }, 8)

      downn = false

}
