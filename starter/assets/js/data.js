const form = document.getElementById('first');//call our form with the id assigned to it 

form.addEventListener('submit', callbackFunction);//call callbackFunction when submit button is clicked
let tasks=[];         
function callbackFunction(event) {
    event.preventDefault();
    // prevent reloading the page
    const myFormData = new FormData(event.target);//
    const formDataObj = {};//data objet
    myFormData.forEach((value, key) => (formDataObj[key] = value));//loop to fill the object formData with the right values 
    tasks.push(formDataObj);//add the new formData to array tasks
    document.forms[0].reset();//to clean the form for the next entries

};

// backtext