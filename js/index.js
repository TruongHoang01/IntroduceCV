// ẩn thông tin cá nhân
const inputEmail = document.querySelector('#InputEmail');
const showInfo = document.querySelector('.show-info');
const formGetInfo = document.querySelector('.get-info');
const btnInfoPer = document.querySelector('.btn-info-per');


// mail tĩnh: banhathoang01@gmail.com

function validate (){
    const regexEmail = /^([A-Z a-z 0-9 \._]+)@([A-Z a-z]+).([A-Z a-z]{2,6})$/;
    var notify = document.querySelector('.notify-validate');
    var email = document.querySelector('#InputEmail').value;
    if(email.trim()=="") {
        notify.textContent = "Email is valid!!";
        notify.classList.add("text-danger");
        notify.classList.remove("text-success")
        notify.classList.remove("text-warning");
    }
    else if(regexEmail.test(email)){
        if(email =="banhathoang01@gmail.com"){
            notify.textContent = "Email submitted successfully!";
            notify.classList.add("text-success");
            notify.classList.remove("text-danger")
            notify.classList.remove("text-warning");
        }
        else {
            notify.textContent = "Your Email is wrong!";
            notify.classList.add("text-warning");
            notify.classList.remove("text-danger")
            notify.classList.remove("text-success");
        }
    } 
    else {
       notify.textContent= "Wrong validate email";
       notify.classList.add("text-danger");
       notify.classList.remove("text-success")
       notify.classList.remove("text-warning");
    }
}

//delay
function delay () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve();
      }, 1500);
    });
  }

btnInfoPer.addEventListener('click', ()=>{
    var notify = document.querySelector('.notify-validate');
    validate();
    if(notify.textContent == "Email submitted successfully!")
        delay()
        .then(
            (result)=>{
                alert("Show your information!!!");
                formGetInfo.classList.add('hidden');
                showInfo.classList.remove('hidden');
            }
        )
})  


// Ẩn thông tin cá nhân
const btnViewMore = document.querySelectorAll('.btn-view-more');
const btnHideInfo = document.querySelectorAll('.btn-view-less');
const showJob = document.querySelectorAll('.content-info-job');
for(let i =0 ; i<btnViewMore.length; i++){
    btnViewMore[i].addEventListener('click', ()=>{
        // console.log("stt: "+i)
        // console.log(showJob[i].className)
        showJob[i].classList.remove('hidden');
        btnViewMore[i].classList.add('hidden');
        btnHideInfo[i].classList.remove('hidden');
    })
}

for(let i =0 ; i<btnHideInfo.length; i++){
    btnHideInfo[i].addEventListener('click', ()=>{
        // console.log("stt: "+i)
        // console.log(showJob[i].className)
        showJob[i].classList.add('hidden');
        btnViewMore[i].classList.remove('hidden');
        btnHideInfo[i].classList.add('hidden');
    })
}
