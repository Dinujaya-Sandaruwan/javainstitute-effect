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
count = count - 1;
  console.log('scrolling down');
  let div_one_1 = document.getElementById('div-one-1');
  div_one_1.style.left =count + 'vw';
  let div_one_2 = document.getElementById('div-one-2');
  div_one_2.style.right =count + 'vw';
  console.log(count + 'vw');
  
 }
});

let downn = false;

function fnDown() {
    let count = 1;
    let div_one_1 = document.getElementById('div-one-1');
    let div_one_2 = document.getElementById('div-one-2');
    if (downn == false) {
        setInterval(() => {
            if (count < 51) {
                div_one_1.style.left ='-' + count + 'vw';
                div_one_2.style.right ='-' + count + 'vw';
                count = count + 1;  
                console.log('-' + count + 'vw')   
                
            }       
          }, 8)
    }
    downn = true; 
}

function fnUp() {
    let count = -50;
    if (downn == true) {
        setInterval(() => {
            if (count < 1) {
                let div_one_1 = document.getElementById('div-one-1');
                div_one_1.style.left =count + 'vw';
                let div_one_2 = document.getElementById('div-one-2');
                div_one_2.style.right =count + 'vw';
                count = count + 1 
                console.log(count)        
            } 
          }, 8)

          downn = false
    }

}
