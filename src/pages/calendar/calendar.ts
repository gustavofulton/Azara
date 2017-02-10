import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from 'ionic-native';

/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
  events: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Calendar.createCalendar('MyCalendar').then(
    //   (msg) => { alert(msg); },
    //   (err) => { alert(err); }
    // );
    // var title

    // var createCalOptions = Calendar.getCalendarOptions();
    // createCalOptions.calendarName = "My Cal Name";
    // // createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
    // var success = function(message) { alert("Success: " + JSON.stringify(message)); };
    // var error = function(message) { alert("Error: " + message); };
    // Calendar.createCalendar(createCalOptions);
  }
  Open() {
    var now = new Date();
    Calendar.openCalendar(now);
  };

  CreateEvent() {
    var startDate = new Date(); // beware: month 0 = january, 11 = december
    var endDate = new Date();
    Calendar.createEventInteractively("Calendar", "East Lansing", "Insert your notes here", startDate, endDate).then(
      (msg) => { alert(msg); },
      (err) => { alert(err); }
    );
  };

}
