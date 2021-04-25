const button = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
   'Eu estou bem',
   'Suave',
   'Show de pelotita'
]

const weather = [
   'Você nem se quer sai de casa, por quê quer saber ?',
   'Eu vou la saber',
   'Infelizmente ainda não possuo essa tecnologia',
   'Sei lá',
   'Deve ta quente, não tenho sensassão térmica para saber'
]

const extraSpeeches = [
   'Não entendi o que você falou',
   'As perguntas válidas que você pode fazer para mim são: Como está você e Como está o clima hoje.'
]


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
   console.log('Voice is activated!!');
};

recognition.onresult = function(event){
   const current = event.resultIndex;

   const transcript = event.results[current][0].transcript;
   content.textContent = transcript;

   readOutLoud(transcript);
};

button.addEventListener('click', () => {
   recognition.start();
});

function readOutLoud(message){
   const speech = new SpeechSynthesisUtterance();

   if(message.includes('como está você')){
      const finalSpeech = greetings[Math.floor(Math.random() * greetings.length)]
      speech.text = finalSpeech;
   }else if(message.includes('Como está o clima')){
      const finalSpeech = weather[Math.floor(Math.random() * weather.length)]
      speech.text = finalSpeech;
   }else{
      const finalSpeech = extraSpeeches[Math.floor(Math.random() * extraSpeeches.length)]
      speech.text = finalSpeech;
   }

   speech.volume = 1;
   speech.rate = 1;
   speech.pitch = 1;

   window.speechSynthesis.speak(speech);
}