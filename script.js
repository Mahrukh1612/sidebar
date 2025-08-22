const sidebar = document.querySelector('.sidebarGo');
const hamburger = document.querySelector('.ham');
const cross = document.querySelector('.cross');
  
    // console.log('script running...');
    document.querySelector('.cross').style.display = 'none';
    document.querySelector('.hamburger').addEventListener("click", () => {
        document.querySelector('.sidebar').classList.toggle('sidebarGo');
        if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
           
            document.querySelector('.ham').style.display = 'inline';
            document.querySelector('.cross').style.display = 'none';
        }
        else {
            document.querySelector('.ham').style.display = 'none';
            setTimeout(() => {
    
                document.querySelector('.cross').style.display = 'inline';
            }, 300);
        }
    })


const contactform = document.getElementById('contactform');
  contactform.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert("Your message is sent to our email.")
  })


















// console.log('script running...');
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.contains('.sidebarGo');
//         if( document.querySelector('.sidebar').classList.contains('.sidebarGo')){
// document.querySelector('.ham').style.display = 'inline';
// document.querySelector('.cross').style.display = 'none';
//         }
//         else{
//             document.querySelector('.ham').style.display = 'none';
// document.querySelector('.cross').style.display = 'inline';
//         }
//     });




