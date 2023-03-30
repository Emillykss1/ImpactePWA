var cacheName = "pwaImpacte+-v1.0";

self.addEventListener('install', Event => {

    self.skipWaiting();

    Event.waitUnitil(
        caches.open(cacheName)
        .then(cache => cache.addALL([

            './index.html',

            './assets/css/bootstrap.min.css',
            './assets/js/bootstrap.min.js',

            '.assets/img/hero-img.svg',
            '.assets/img/ONG-confiavel-como-transmitir-a-sua-mensagem.webp',
            '.assets/img/about-2.jpg',
            '.assets/img/associaoespaocurumim.webp',
            '.assets/img/Pequena-Casa-da-Criança.png',
            '.assets/img/Animalar (1).png',
            '.assets/img/Doutores da amazondia (1) (1) (1).png',
            '.assets/img/logo-Amigosdobem.webp',
            '.assets/img/logo-gamba-OG.jpg',
            '.assets/img/SOS-RACISMO-GIPUZKOA (1).jpg',
            '.assets/img/acampe-imagem.jpg',
            '.assets/img/ONG-Brasil.webp',
            '.assets/img/ong-sosbichos-capa.webp',
            '.assets/img/Adere1-_1_.webp',
            '.assets/img/fundacao-abrinq.webp',
            '.assets/img/tocasegura.webp',
            '.assets/img/sosdocancer.webp',
            '.assets/img/logoAcaoEducacao (1).png',
            '.assets/img/associaoespaocurumim.webp',
            '.assets/img/apata-tania-angiolucci.webp',
            '.assets/img/amadahelena.webp',
         ]))
    );
});

self.addEventListener('message', function (event){
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {
    //Atualização Internet
    /* event.respondWith(async function () {
        try {
            return await fetch(event.request);
            } catch (err) {
                return caches.match(event.request);
            } 
        } ()) ; */

        //Atualização cache
        event.respondWith(
            caches.match(event.request)
            .then(function (response){
                if (response){
                    return response;
                }
                return fetch(event.request);
            })
        );
        });