let string = '';
let buttons = document.querySelectorAll('.button');
let inputBox = document.querySelector('.inputBox')

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string)
      document.querySelector('.inputBox').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = '';
      document.querySelector('.inputBox').value = string;
    }
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.inputBox').value = string;
    }
  })
})