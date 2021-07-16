const clickZone = document.querySelector(".clickZone")
const explain = document.querySelector(".explain")

const Audio1 = new Audio();
const Audio2 = new Audio();

Audio1.src = "https://docs.google.com/uc?export=download&id=1fxPEROVEOkmaLrx0TynifL68OS8uJ3SK";
Audio2.src = "https://docs.google.com/uc?export=download&id=1g-OqTG1SnlPKxFy4K_DLYhDirMwIl4KQ";

const Audios = [Audio1, Audio2]

explain.innerHTML = `<h2>응원이 필요한가요?</h2> 아무 곳이나 누르세요`;

{
    let play = "no"; //play 상태: no
    let playAudio = null;
    
    clickZone.addEventListener("click", clickClickZone)
    
    function clickClickZone(){
        if(play === "no"){
            playAudio = Audios[Math.floor(Math.random()*1.99 +0)]
            playAudio.play();
            playAudio.loop = true;//무한 반복

            play = "yes";
            this.classList.toggle("red");
            explain.innerHTML = `<h2>응원을 그만할까요?</h2> 아무 곳이나 누르세요`;
        }else if(play === "yes"){
            playAudio.currentTime = 0;
            playAudio.pause();
            
            play = "no";
            this.classList.toggle("red");
            explain.innerHTML = "<h2>응원이 필요한가요?</h2> 아무 곳이나 누르세요";
        }
    }
}