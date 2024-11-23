let CopEur = document.getElementById('CopEur');
let UsdCop = document.getElementById('UsdCop');
let bitcoin = document.getElementById('bitcoin');
let cargando = document.getElementById('gif');

async function cargarCotizaciones() {
    cargando.style.display = 'block';

    //Consultar cotización de peso colombiano a euro
    let obtenerCop = await fetch('https://open.er-api.com/v6/latest/COP');
    let datosCop = await obtenerCop.json();
    CopEur.textContent = datosCop.rates.EUR;

    //Consultar cotización de dólar a peso colombiano

    let obtenerDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosUSD = await obtenerDolar.json();
    UsdCop.textContent = datosUSD.rates.COP;
    

    //Consultar cotización de bitcoin a dólar
    let obtenerBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let datosBitcoin = await obtenerBitcoin.json();
    bitcoin.textContent = datosBitcoin.bpi.USD.rate;
}

function tiempoEspera(callback) {
    cargando.style.display = 'block';

    setTimeout(async function() {
        await callback();
        cargando.style.display = 'none';
    }, 2000);
}

tiempoEspera(cargarCotizaciones);