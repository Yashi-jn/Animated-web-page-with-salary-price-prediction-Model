const slider=document.getElementById("experienceSlider");
const expValue=document.getElementById("expValue");
const salary=document.getElementById("salary");

slider.addEventListener("input", async function(){

let years=this.value;

expValue.innerText=years+" Years";

let response=await fetch(
"http://127.0.0.1:5000/predict",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
experience:years
})
}
);

let data=await response.json();

salary.innerText=
"₹"+Math.round(data.salary).toLocaleString();

});