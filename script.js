window.onload = function() {
    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);
    alert('Ziyaret Sayınız: ' + visits);
};
