addEventListener("DOMContentLoaded", (event) => {
    const el = document.querySelector(".clock");
    const total         = 10000000;
    const valorDiario   = 87000;
    const fechaIni      = dayjs("2022-10-26");
    const fechafin      = dayjs("2022-11-10");
    const fechaActual   = dayjs(dayjs().format("YYYY-MM-DD"));
    const dias          = fechafin.diff(fechaIni, "day");
    const diasActuales  = fechaActual.diff(fechaIni, "day");
    const tipoDia       = typeDay(dayjs());
    //dividimos el total en la cantidad de dias que dura la promo
    let valorDia        = total / dias;
    //multiplicamos el valor del dia por los días que lleva la promo
    let valorActual     = (valorDia * diasActuales) - valorDiario;


    console.log('duración dias de la promo',dias);
    console.log("valor por día", valorDia);
    console.log("dias transcurridos", diasActuales);
    console.log("valor actual", valorActual);

    var clock;

    clock = new FlipClock(el, parseInt(valorActual), {
      clockFace: "Counter",
      autoStart: true,
      countdown: false,
      minimumDigits: 8,
      callbacks: {
        start: () => {
          console.log("started at");
        },
        stop: () => {
          console.log("stopped after");
        },
      },
    });

    clock.on("start", () => {
        //console.log('start');
    });

    clock.on("stop", () => {
        console.log("stop");
    });

    clock.on("interval", () => {
      console.log("interval", clock.value);
    });
    

    function typeDay(m) {
      var g = null; //return g

      if (!m || !m.isValid()) {
        return;
      } //if we can't find a valid or filled moment, we return.

      var split_afternoon = 12; //24hr time to split the afternoon
      var split_evening = 17; //24hr time to split the evening
      var currentHour = parseFloat(m.format("HH"));
      console.log(currentHour);
      if (currentHour >= split_afternoon && currentHour <= split_evening) {
        g = "afternoon";
      } else if (currentHour >= split_evening) {
        g = "evening";
      } else {
        g = "morning";
      }

      return g;
    }
});
