

$('.count').each(function (i) {
    let count = 0;
    const num = Number($('.count').eq(i).text());

    let countInterval = setInterval(function () {
        if (count < num) {
            count++;

            $('.count').eq(i).text(`${count}%`);

        } else {
            clearInterval(countInterval);
        }

    }, 20);
})