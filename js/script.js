const convertToFarhenheit = () => {
    // Get input value
    const celcius = parseFloat(document.getElementById('celcius').value);
    
    // Calculate Fahrenheit
    const fahrenheit = (celcius * 9/5) + 32;
    
    // Update input field with result
    document.getElementById('fahrenheit').value = fahrenheit;
    
    // Update calculation explanation
    const calculation = `${celcius}°C × 9/5 + 32 = ${fahrenheit}°F`;
    document.getElementById('calculation').value = calculation;
    
    // Update explanation
    const explanation = 'To convert from Celsius to Fahrenheit, multiply the temperature by 9/5 and add 32.';
    document.getElementById('explanation').value = explanation;
  }
  