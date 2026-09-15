const SHEET_NAME="방문예약";
function doPost(e){
 try{
  const d=JSON.parse(e.postData.contents||"{}");
  if(!d.name||!d.phone||!d.visitDate||!d.visitTime)return out({ok:false,message:"필수값 누락"});
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME);
  if(!sh){sh=ss.insertSheet(SHEET_NAME);sh.appendRow(["접수일시","현장명","성명","연락처","방문일","방문시간","유입","페이지"]);}
  sh.appendRow([new Date(),d.site||"",d.name,d.phone,d.visitDate,d.visitTime,d.source||"네이버 블로그",d.pageUrl||""]);
  const msg="["+(d.site||"현장")+" 방문예약]\n성명: "+d.name+"\n연락처: "+d.phone+"\n방문일시: "+d.visitDate+" "+d.visitTime+"\n유입: "+(d.source||"네이버 블로그");
  sendSms(msg);
  return out({ok:true});
 }catch(err){return out({ok:false,message:String(err)});}
}
function out(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}

/* SMS 비밀키는 HTML이나 채팅에 넣지 마세요.
   현재 홈페이지에서 실제로 정상 작동 중인 SMS 발송 코드를 이 함수에 연결하고,
   수신번호/키/Secret은 Apps Script의 '스크립트 속성'에 저장하세요. */
function sendSms(message){
 const p=PropertiesService.getScriptProperties();
 const recipient=p.getProperty("RECIPIENT_PHONE");
 if(!recipient)throw new Error("RECIPIENT_PHONE 미설정");
 // TODO: 기존 정상 작동 SMS 서버측 발송 로직 연결
 throw new Error("기존 SMS 발송 로직 연결 필요");
}