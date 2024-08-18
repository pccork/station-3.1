export const stationAnalytics = {
  getLastCode (station) {
    let lastCode =null;
    if (station.reports.length> 0) {
      lastCode = station.reports[station.reports.length -1].code;
    }
    console.log(lastCode);
    if(lastCode >=200 && lastCode <299 ){lastCode = "thunderstrom"; 
    } else if(lastCode >=300 && lastCode <499 ){lastCode = "drizzle"; 
    } else if(lastCode >=500 && lastCode <599 ){lastCode = "rain";
    } else if(lastCode >=600 && lastCode <699 ){lastCode = "snow";
    } else if(lastCode >=700 && lastCode <799 ){lastCode = "haze";
    } else if(lastCode =800){lastCode = "sunny";   
    } else (lastCode = "cloudy");          
    return lastCode;
  },

    getMinTemp(station) {
      let minTemp = null;
      if (station.reports.length> 0) {
        minTemp = station.reports[0].temperature;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].temperature < minTemp) {
            minTemp = station.reports[i].temperature;
          }
        }
      }
      console.log(minTemp);
      return minTemp;
    },
    getMaxTemp(station) {
      let maxTemp = null;
      if (station.reports.length> 0) {
        maxTemp = station.reports[0].temperature;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].temperature > maxTemp) {
            maxTemp = station.reports[i].temperature;
          }
        }
      }
      console.log(maxTemp);
      return maxTemp;
    },

    getMinWindSpeed(station) {
      let minWindSpeed = null;
      if (station.reports.length> 0) {
        minWindSpeed = station.reports[0].windSpeed;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].windSpeed < minWindSpeed) {
            minWindSpeed = station.reports[i].windSpeed;
          }
        }
      }
      console.log(minWindSpeed);
      return minWindSpeed;
    },
    getMaxWindSpeed (station) {
      let maxWindSpeed = null;
      if (station.reports.length> 0) {
        maxWindSpeed = station.reports[0].windSpeed;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].windSpeed > maxWindSpeed) {
            maxWindSpeed  = station.reports[i].windSpeed;
          }
        }
      }
      console.log(maxWindSpeed );
      return maxWindSpeed ;
    },

    getMinPressure(station) {
      let minPressure = null;
      if (station.reports.length> 0) {
        minPressure = station.reports[0].pressure;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].pressure < minPressure) {
            minPressure = station.reports[i].pressure;
          }
        }
      }
      console.log(minPressure);
      return minPressure;
    },
    getMaxPressure (station) {
      let maxPressure = null;
      if (station.reports.length> 0) {
        maxPressure = station.reports[0].pressure;
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].pressure > maxPressure) {
            maxPressure  = station.reports[i].pressure;
          }
        }
      }
      console.log(maxPressure );
      return maxPressure ;
    },

    











  };