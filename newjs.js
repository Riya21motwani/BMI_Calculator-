const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const results= document.querySelector('#results');
   if(height=='' || height<0 || isNaN(height)){
             results.innerHTML=`Please give a valid height ${height} `;
   }
   
   else if(weight=='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight} `;
}
   
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<div>${bmi} </div>`;
    
   
   
   if(bmi<18.6){
    results.innerHTML=`<div>${bmi}
    <div>Under weight</div> </div>`;
   }
   else if(bmi>=18.6 && bmi<=24.9){
    results.innerHTML=`<div>${bmi}
    <div>Normal Weight</div> </div>`;
   }
 else if(bmi>=25 && bmi<=29.5){
    results.innerHTML=`<div>${bmi}
    <div>Overweight</div> </div>`;
   }
 

   else{
    results.innerHTML=`<div>${bmi}
    <div>Obese</div> </div>`;
   }

}





});