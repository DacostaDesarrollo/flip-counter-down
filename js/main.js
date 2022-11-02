addEventListener("DOMContentLoaded", (event) => {
    var el = document.querySelector(".clock");
    var valorDiario = 87000;
    var fechaIni    = dayjs("2022-10-30");
    var fechafin    = dayjs("2022-11-2");
    var now         = dayjs("2022-11-2");
    var dias        = fechafin.diff(fechaIni, "day");
    var clock;

    clock = new FlipClock(el, 00000000, {
        clockFace: "Counter",
        autoStart: true,
        countdown: false,
        minimumDigits: 8,
        callbacks: {
            start: () => {
            
                console.log('started at');
            },
            stop: () => {
                
                console.log('stopped after');
            }
        }
    });

    clock.on("start", () => {
        console.log('start');
    });

    clock.on("stop", () => {
        console.log("stop");
    });

    clock.on("interval", () => {
      console.log("interval", clock.value);
    });
});
