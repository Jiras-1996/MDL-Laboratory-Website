function myFunction() 
{
  //Set data from Spread Sheet
  var spreadSheetID = "Your SpreadsheetsID";
  var ss = SpreadsheetApp.openById(spreadSheetID);
  var sheet = ss.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  
  //Logger.log(lastRow);
  //Logger.log(lastColumn);

  //Set data for Google Calendar
  var ชื่อนามสกุลผู้จอง = sheet.getRange(lastRow, 4).getValue();
  var เบอร์โทรศัพท์หรือเบอร์ติดต่อภายใน = sheet.getRange(lastRow, 5).getValue();
  var ห้องปฏิบัติการที่ต้องการจอง = sheet.getRange(lastRow, 6).getValue();
  var วันที่และเวลาที่ต้องการใช้ห้อง  = new Date(sheet.getRange(lastRow, 8).getValue());
  var วันที่และเวลาที่สิ้นสุดการใช้ห้อง = new Date(sheet.getRange(lastRow, 9).getValue());
  var หัวข้อปฏิบัติการ = sheet.getRange(lastRow, 11).getValue()

  /*
  Logger.log("ชื่อ นามสกุลผู้จอง:" + ชื่อนามสกุลผู้จอง);
  Logger.log("เบอร์โทรศัพท์หรือเบอร์ติดต่อภายใน:" + เบอร์โทรศัพท์หรือเบอร์ติดต่อภายใน);
  Logger.log("ห้องปฏิบัติการที่ต้องการจอง:" + ห้องปฏิบัติการที่ต้องการจอง);
  Logger.log("วันที่ และเวลาที่ต้องการใช้ห้อง:" + วันที่และเวลาที่ต้องการใช้ห้อง);
  Logger.log("วันที่ และเวลาที่สิ้นสุดการใช้ห้อง:" + วันที่และเวลาที่สิ้นสุดการใช้ห้อง);
  Logger.log("หัวข้อปฏิบัติการ:" + หัวข้อปฏิบัติการ);
  */

  //Creates a calendar event using the submitted data
  var calendar = CalendarApp.getCalendarById("Your CalendarID");
  var titles = ('คุณ ' + ชื่อนามสกุลผู้จอง + ' ' + 'Tel: ' + เบอร์โทรศัพท์หรือเบอร์ติดต่อภายใน + ' ' + 'ห้อง: ' + ห้องปฏิบัติการที่ต้องการจอง);
  var descriptions = 'หัวข้อปฏิบัติการ : '+'"'+ หัวข้อปฏิบัติการ+'"';
  calendar.createEvent(titles, วันที่และเวลาที่ต้องการใช้ห้อง, วันที่และเวลาที่สิ้นสุดการใช้ห้อง, {description: descriptions});
}

