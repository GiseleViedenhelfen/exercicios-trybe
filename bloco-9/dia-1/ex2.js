const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, F) => {
  const transfTemp = callback(F);
  const tempoMsg = messageDelay();
  setTimeout(() => console.log(`Mars temperature is: ${transfTemp} degree Celsius`),tempoMsg);
}

sendMarsTemperature(getMarsTemperature, 20);

