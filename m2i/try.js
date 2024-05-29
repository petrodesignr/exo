// for message area

function handleTextAreaInput() {
  const myTextArea = document.querySelector("textarea");

  myTextArea.addEventListener('input', (e) => {
    const words = e.target.value.trim().split(/\s+/);
    const wordCount = words.filter(word => word !== '').length;

    e.target.classList.toggle("has-value", e.target.value);

    if (wordCount >= 2 && wordCount <= 5) {
      e.target.classList.add("valid");
      console.log("test");
    } else {
      e.target.classList.remove("valid");
      console.log("qsdf");
    }

    checkAllInputsValidity();
  });
}

handleTextAreaInput();


    //for the input area


const inputs = document.querySelectorAll("input"),
  spinner = document.querySelectorAll(".spinner"),
  button = document.querySelector("button");

 
function checkAllInputsValidity() {
  let allValid = true;
  [...inputs].forEach(input => {
    if (!input.classList.contains('valid')) {
      allValid = false;
    }
  });
  const button = document.querySelector('button.send'); // get the button element
  if (allValid) {
    button.classList.remove('disabled');
  } else {
    button.classList.add('disabled');
  }
}


[...inputs].map((elem, index) => {
      elem.addEventListener('input', (e) => {
        spinner[index].classList.add("visible")
        e.target.classList.toggle("has-value", e.target.value)
        setTimeout(() => {spinner[index].classList.remove("visible")}, 500)
        switch(e.target.type) {
            case 'text':
                if(e.target.value.length >= 2 && e.target.value.length <= 16) {
                    e.target.classList.add("valid")
                }
                else {
                    e.target.classList.remove("valid")
                }
                break
            case 'email':
                const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                if (e.target.value.match(re)) {
                e.target.classList.add('valid')
                }
                else {
                e.target.classList.remove('valid')
                }
                break
            case 'tel':
                if (!isNaN(e.target.value) && e.target.value.length === 10) {
                e.target.classList.add('valid')
                }
                else {
                e.target.classList.remove('valid')
                }
                break
            default:
                break
            }

        checkAllInputsValidity(); 

      })
    })
    