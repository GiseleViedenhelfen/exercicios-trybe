const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, grausCelcius) => {
  const transfTemp = callback(grausCelcius);
  const tempoMsg = messageDelay();
  setTimeout(() => console.log(`Mars temperature is: ${transfTemp} degree Celsius`),tempoMsg);
}

sendMarsTemperature(getMarsTemperature, 20);

