function init() {


    //메뉴, 네비, 인디게이터 클릭하면 페이지 이동
    let idx = 0;
    let scrollState = { y: 0, y2: 0, state: 'down' };
    let inter;
    let offsetTop = [
        $('section').eq(0).offset().top,
        $('section').eq(1).offset().top,
        $('section').eq(2).offset().top,
        $('section').eq(3).offset().top
    ];


    $('body').css('height', $('.contents').height() * 2);

    let k=0;
    $('.menu > a').on('click', function () {
        event.preventDefault();
        idx = $(this).index();
        if(idx>k){
            k=idx; idx--;
        }else{
            k=idx; idx++;
        }
        $(window).scrollTop(1000 * k);
        // pageMove();
    });
    
    $('aside > a').on('click', function () {
        event.preventDefault();
        idx = $(this).index();
        if(idx>k){
            k=idx; idx--;
        }else{
            k=idx; idx++;
        }
        $(window).scrollTop(1000 * k);

    });

    // 메뉴,네비, 인디게이트 클릭 시 페이지 이동


    function pageMove() {
        
        if (idx == 0) {
            $('header').removeClass('active');
        } else {
            $('header').addClass('active');
        }

        $('#fullpage').css({
            transform: `translateY(-${offsetTop[idx]}px)`
        });

        update(idx);
    };

    function update(n) {

        (n == 0) ? $('aside').fadeOut() : $('aside').fadeIn();
        $('.menu >a, aside > a').removeClass('active');
        $(`.menu > a:eq(${n}), aside a:eq(${n})`).addClass('active');

    };


    function scrollFn() {
        scrollState.y = $(window).scrollTop();

        if (scrollState.y > scrollState.y2) {
            scrollState.state = true;
        } else {
            scrollState.state = false;
        }

        scrollState.y2 = scrollState.y;
    }

    $(window).on('scroll', function () {
        scrollFn();
        clearTimeout(inter);
        inter = setTimeout(() => {
            if (scrollState.state) {
                if (idx < 3) idx++;
            } else {
                if (idx > 0) idx--;
            }
            pageMove();



            if( idx == 1 ){
                console.log('a')
                $('.donut-container >li').addClass('active');
    
                $('.count').each(function(i){
                    let count = 0;
                    const num = Number($('.count').eq(i).text());
        
                    let countInterval = setInterval(function () {
                        if (count < num) {
                            count++;
        
                            $('.count').eq(i).text(`${count}%`);
                            
                        }else{
                            clearInterval(countInterval);
                        }
                            
                    }, 20);
                })
    
    
            }

            

        }, 50);

    })





}
$(window).on('load', init);


