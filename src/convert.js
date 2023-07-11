const convt_btn = document.getElementById('btn');
const cont_result =  document.getElementById('container-result');
const result = document.getElementById('result');

convt_btn.addEventListener('click',()=>{
    const tempInput = document.getElementById('temperature');
    const One_unit = document.getElementById('unit');
    const Two_unit = document.getElementById('to_unit');

    const temperature = Number(tempInput.value);
    const unit = One_unit.value;
    const to_unit = Two_unit;

    let tempConversion;
     
    if (unit === 'celsius' && to_unit === 'fahrenheit') {
        tempConversion = temperature * 9 / 5 + 32;
      } else if (unit === 'celsius' && to_unit === 'kelvin') {
        tempConversion = temperature + 273.15;
      } else if (unit === 'fahrenheit' && to_unit === 'celsius') {
        tempConversion = (temperature - 32) * 5 / 9;
      } else if (unit === 'fahrenheit' && to_unit === 'kelvin') {
        tempConversion = (temperature - 32) * 5 / 9 + 273.15;
      } else if (unit === 'kelvin' && to_unit === 'celsius') {
        tempConversion = temperature - 273.15;
      } else if (unit === 'kelvin' && to_unit === 'fahrenheit') {
        tempConversion = (temperature - 273.15) * 9 / 5 + 32;
      } else {
        tempConversion = temperature;
      }

      result.textContent = `${tempConversion.toFixed(2)} ${to_unit.toUpperCase()}`;
      cont_result.style.display = 'flex';
});