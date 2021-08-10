const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")) {
            theme.style.setProperty("--theme-color", "#3867d6");
        }
        else if(color.contains("btn2")) {
            theme.style.setProperty("--theme-color", "#fc427b");
        }
        else if(color.contains("btn3")) {
            theme.style.setProperty("--theme-color", "#ff0033");
        }
        else if(color.contains("btn4")) {
            theme.style.setProperty("--theme-color", "#4b0082");
        }
        else {
            theme.style.setProperty("--theme-color", "#004930");
        }
    });
});
