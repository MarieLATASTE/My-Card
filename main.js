const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")) {
            theme.style.setProperty("--theme-color", "#00ffff");
        }
        else if(color.contains("btn2")) {
            theme.style.setProperty("--theme-color", "#ffc0cb");
        }
        else if(color.contains("btn3")) {
            theme.style.setProperty("--theme-color", "#f10000");
        }
        else if(color.contains("btn4")) {
            theme.style.setProperty("--theme-color", "#4b0082");
        }
        else {
            theme.style.setProperty("--theme-color", "#ffd700");
        }
    });
});
