$(function () {
    let mouse_x = 0;
    let mouse_y = 0;
    let ball_x = 0;
    let ball_y = 0;

    let widthZona = +($('.zona').css('width').replace('px', ''));
    let heightZona = +($('.zona').css('height').replace('px', ''));
    let topZona = 40;
    let leftZona = $(window).width() / 2 - widthZona / 2;


    let widthBall = +($('#ball').css('width').replace('px', ''));
    let ballStartX = $(window).width() / 2 - widthBall / 2;
    let ballStartY = 500;
    let celStartY = ballStartY;
    let celStartX = ballStartX;

    let widthGolkiper = +($('#golkiper').css('width').replace('px', ''));
    let heightGolkiper = +($('#golkiper').css('height').replace('px', ''));
    let golkiperStartX = $(window).width() / 2 - widthGolkiper / 2;
    let golkiperStartY = 150;
    let deltaX_ = 0;
    let deltaY_ = 0;
    let second = 3; //5
    let n = 50;
    start();

    $('#ball').on('click', function () {
        if(mouse_x === 0 || mouse_y === 0){
           return
           }
        let golkiper_x = golkiperStartX;
        let golkiper_y = golkiperStartY;

        ball_x = ballStartX;
        ball_y = ballStartY;

        let deltaX = (ball_x - mouse_x) / n;
        let deltaY = (ball_y - mouse_y) / n;

        let golkiper = Math.floor(Math.random() * 4 + 1);
        console.log(golkiper);

        switch (golkiper) {
            case 1: {
                deltaX_ = (golkiperStartX - leftZona) / n;
                deltaY_ = (golkiperStartY - topZona) / n;

                break
            }
            case 2: {
                deltaX_ = (golkiperStartX - leftZona) / n;
                deltaY_ = (golkiperStartY - (topZona + heightZona - heightGolkiper)) / n;

                break
            }
            case 3: {
                deltaX_ = (golkiperStartX - (leftZona + widthZona - widthGolkiper)) / n;
                deltaY_ = (golkiperStartY - topZona) / n;

                break
            }
            case 4: {
                deltaX_ = (golkiperStartX - (leftZona + widthZona - widthGolkiper)) / n;
                deltaY_ = (golkiperStartY - (topZona + heightZona - heightGolkiper)) / n;
                break
            }
        }

        var i = 1;
        setTimeout(function list() {
            mouse_x = (ball_x - deltaX * i);
            mouse_y = (ball_y - deltaY * i);
            golkiper_x = (golkiper_x - deltaX_);
            golkiper_y = (golkiper_y - deltaY_);
            //console.log(golkiper_y + '----y');
            //console.log(golkiper_x + '---x');

            $('#ball').css('top', mouse_y);
            $('#ball').css('left', mouse_x);

            $('#golkiper').css('top', golkiper_y);
            $('#golkiper').css('left', golkiper_x);

            i++;
            if (i > (n)) {
                return;
            }

            setTimeout(list, second);
        }, second);
        
                setTimeout(function () {
                    $('#ball').css('top', '300px');
                    $('#ball').css('left', mouse_x);
                    return;
                }, (n * second * 3));
        
        setTimeout(function () {
            start();
            //debugger;
            return;
        }, (n * second * 7));

        return false;
    });
    $('.zona').on('click', function () {
        mouse_x = window.event.clientX - widthBall / 2;
        mouse_y = window.event.clientY - widthBall / 2;
        $('#cel').css('top', mouse_y);
        $('#cel').css('left', mouse_x);

    });

    function start() {
        mouse_x = 0;
        mouse_y = 0;
        $('#cel').css('top', celStartY);
        $('#cel').css('left', celStartX);
        $('#golkiper').css('top', golkiperStartY);
        $('#golkiper').css('left', golkiperStartX);
        $('#ball').css('top', ballStartY);
        $('#ball').css('left', ballStartX);
    }

   // alert('Гра "Пінальті" . Виберіть точку у воротах куди пробєте і натисніть на мяч для удару');
    

});
