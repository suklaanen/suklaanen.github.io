document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    var quotes = [
        "\" Asiat pitää tehdä kunnolla. \"",
        "\" Saattasin olla teille se lupaava juniori. \"",
        "\" Mussa palaa halu onnistua. \"",
        "\" Jos haluu pärjätä, niin työstään pitää tykätä. \"",
        "\" Ei mikään turha lupaus. \"",
        "\" Tänään ja huomenna. \"",
        "\" Tehdään tää hyvin. \"",
        "\" Asiakkaan pitää saada se, mitä hän tarvitsee ja siinä voidaan auttaa. \"",
        "\" Tuun sinne, missä tarvitaan. \"",
    ];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];

    var quoteElement = document.getElementById('quote');
    quoteElement.textContent = randomQuote;
    
});

const colorbar = document.getElementById('colorbar');

const scrollThreshold = 100;

window.addEventListener('scroll', () => {

    if (window.scrollY > scrollThreshold) {
        colorbar.classList.add('scrolled');
    } else {
        colorbar.classList.remove('scrolled');
    }
});