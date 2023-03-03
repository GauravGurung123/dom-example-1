function onFormSubmit() {
       const formData = {};
       formData.username = document.getElementById("username").value;
       formData.age = document.getElementById("age").value;
       
       console.log(formData)
       alert(`Your form is submitted successfully, 
		\n User Name: ${formData.username}
		\n Age: ${formData.age}`)
       resetForm(); 
       document.getElementById('Sample').style.color = 'green';
       document.getElementById("Sample").innerHTML='Form submit succesfully'
}


function resetForm() {
 	document.getElementById("FORM1").reset();
       document.getElementById("Sample").innerHTML="Form has been reset";
}
