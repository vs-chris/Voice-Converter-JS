let speech = new SpeechSynthesisUtterance();
const textArea = document.querySelector(".voice-app textarea")
const selectOption = document.querySelector(".voice-app div select");
const button = document.querySelector(".voice-app div button");
let voices;

function textButton() {
    speech.text = textArea.value;
    speech.voice = voices[selectOption.options.selectedIndex];
    speech.lang = voices[selectOption.options.selectedIndex].lang;
    speechSynthesis.speak(speech);
}

function loadOptions() {
    voices = window.speechSynthesis.getVoices();

    if (voices.length == 0) {
        console.log("still not working")
    } else {
        console.log("loaded successfully")

        let newVoices = voices.map((value) => {
            return value.voiceURI;
        })

        for (x of newVoices) {
            console.log(x);
            let newOption = document.createElement("option");
            newOption.innerHTML = x;
            selectOption.appendChild(newOption);
        }
        clearInterval(interval);
    }
}

let interval = setInterval(loadOptions, 50);
button.onclick = textButton;