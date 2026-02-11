document.addEventListener('DOMContentLoaded', () => {
    // Target Date: February 10, 2036
    const targetDate = new Date('February 10, 2036 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Timer finished
            document.getElementById('countdown').innerHTML = "<div>MOONBASE SHOULD BE READY!</div>";
            return;
        }

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('years').innerText = String(years).padStart(2, '0');
        document.getElementById('days').innerText = String(days).padStart(3, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    };

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
});
