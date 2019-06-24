var URL= "https://api.openweathermap.org/data/2.5/forecast?id=501175&appid=3ff44e7e9e11f54d9fac5eadb7920ab6";
$.getJSON(URL, updateData);

function Average(ArrTemp,start,end) {
  var i;
  var summ=0;
         for (i=start;i<=end;i++)
         {
           summ+=ArrTemp[i];
         }
        summ = summ/8;
        return Math.round(summ);
}
function SplitDate(datatext) {
  var arrayOfData = datatext.split(' ');
  return arrayOfData[0];
}
     function updateData(data){
       var i;
       var ArrTemp =[];
       for(i=0;i<40;i++){
         ArrTemp[i] = Math.round(data.list[i].main.temp_max-273);
       }
              var city = data.city.name;
       var temp = Average(ArrTemp,0,8);
       var desc = data.list[0].weather[0].description;
      var icon = data.list[0].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
      var date1 = SplitDate(data.list[0].dt_txt);
      $('#date1').html(date1);
        $('#tempa1').html(temp);
       $('#desc1').html(desc);
     $('#icon1').attr('src', iconurl);
     //____
     var temp = Average(ArrTemp,9,16);
     var desc = data.list[8].weather[0].description;
    var icon = data.list[8].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    var date1 = SplitDate(data.list[8].dt_txt);
    $('#date2').html(date1);
      $('#tempa2').html(temp);
     $('#desc2').html(desc);
   $('#icon2').attr('src', iconurl);
   //____
   var temp = Average(ArrTemp,17,24);
   var desc = data.list[16].weather[0].description;
  var icon = data.list[16].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  var date1 = SplitDate(data.list[16].dt_txt);
  $('#date3').html(date1);
    $('#tempa3').html(temp);
   $('#desc3').html(desc);
 $('#icon3').attr('src', iconurl);
 $('#city').html(city);
       console.log(data);
   }
