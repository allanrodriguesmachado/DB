function timer() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const watch = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            watch.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('start')) {
            watch.classList.remove('paused');
            clearInterval(timer);
            startClock();
        }

        if (element.classList.contains('pause')) {
            clearInterval(timer);
            watch.classList.add('paused')
        }

        if (element.classList.contains('zero')) {
            clearInterval(timer);
            watch.innerHTML = '00:00:00';
            seconds = 0;
            watch.classList.remove('paused');
        }
    });
}

timer();