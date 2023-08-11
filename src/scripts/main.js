AOS.init();

const dataEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaData = setInterval(function(){
    const now = new Date ();
    const timeStampAtual = now.getTime();

    const EventDate = timeStampEvento - timeStampAtual;

    const dayInMs = 1000 * 60 * 60 *24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs =  1000 * 60;

    const RemainDays = Math.floor(EventDate / dayInMs);
    const RemainHours = Math.floor((EventDate % dayInMs) / hourInMs);
    const RemainMinutes = Math.floor((EventDate % hourInMs) / minuteInMs);
    const RemainSeconds = Math.floor((EventDate % minuteInMs) / 1000);

    console.log(RemainDays);
    console.log(RemainHours);
    console.log(RemainMinutes);
    console.log(RemainSeconds);

    document.getElementById('contador').innerHTML = `${RemainDays}d ${RemainHours}h ${RemainMinutes}m ${RemainSeconds}s`;

    if (EventDate < 0){
            clearInterval(contaData);
            document.getElementById('contador').innerHTML = 'Evento expirado';
        }
}, 1000);