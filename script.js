let speech= new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices(); /*Get all the voices in the device */
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i])=new Option(voice.name,i));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});

/*to clear the text area after listening*/
var text=document.querySelector("textarea");
var button=document.getElementById("refresh");
button.addEventListener("click", function(){
    text.value="";
})