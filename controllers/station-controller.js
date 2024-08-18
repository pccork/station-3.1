import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import dayjs from "dayjs";


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const lastCode = stationAnalytics.getLastCode(station); 
    const minTemp = stationAnalytics.getMinTemp(station);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minWindSpeed = stationAnalytics.getMinWindSpeed(station);
    const maxWindSpeed = stationAnalytics.getMaxWindSpeed(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    const maxPressure = stationAnalytics.getMaxPressure(station);
    const now = dayjs();
    dayjs().format('YYYY-MM-DD [|] HH:mm:ss');
    const date = now.format('YYYY-MM-DD [|] HH:mm:ss');
    



    const viewData = {
      title: "Station",
      station: station,/*this line is needed*/
      lastCode,
      minTemp,
      maxTemp,
      minWindSpeed,
      maxWindSpeed,
      minPressure,
      maxPressure,     
    };
    viewData.date=date,
    response.render("station-view", viewData);
  },

  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    //Set up day and time object  
    const now = dayjs();
    dayjs().format('YYYY-MM-DD [|] HH:mm:ss');
    const date = now.format('YYYY-MM-DD [|] HH:mm:ss');
    const newReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    newReport.date=date,
    console.log(`adding report ${newReport.title}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },

 

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },


  async updateStation(station, updatedStation) {
    station.name = updatedStation.name;
    station.latitude = updatedStation.latitude;
    report.longitude = updatedReport.longitude;
    await db.write();
  },








};
