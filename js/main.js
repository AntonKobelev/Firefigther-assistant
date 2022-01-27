$(document).ready(function () {
  for (let i = 100; i <= 300; i = i + 5) {
    $("#pminoch").append('<option value="' + i + '">' + i + "</option>");
  }

  for (let i = 100; i <= 300; i = i + 5) {
    $("#pminvkl").append('<option value="' + i + '">' + i + "</option>");
  }

  // for (let i = -50; i <= 50; i = i + 10) {
  //   $("#tvozvr").append('<option value="' + i + '">' + i + "</option>");
  // }


  $("#submit").click(function (e) {
    e.preventDefault();
    let pminvkl = parseInt($("#pminvkl").val());
    let pminoch = parseInt($("#pminoch").val());
    let workingofconditions = $("#workingofconditions").val() == "2.5" ? 2.5 : 3;
    let tvkl = $("#tvkl").val();
    let toch = $("#toch").val();
    let vb = parseInt($("#vb").val());
    let qvodz = parseInt($("#qvodz").val());
    let rustrab = parseInt($("#rustrab").val());
    let tvozvr =  parseInt($("#tvozvr").val());
    let p1vkl = parseInt($("#p1vkl").val()) || 0;
    let p1och = parseInt($("#p1och").val()) || 0;;
    let p2vkl = parseInt($("#p2vkl").val()) || 0;;
    let p2och = parseInt($("#p2och").val()) || 0;;
    let p3vkl = parseInt($("#p3vkl").val()) || 0;;
    let p3och = parseInt($("#p3och").val()) || 0;;
    let p4vkl = parseInt($("#p4vkl").val()) || 0;;
    let p4och = parseInt($("#p4och").val()) || 0;;
    let p5vkl = parseInt($("#p5vkl").val()) || 0;;
    let p5och = parseInt($("#p5och").val()) || 0;;
    let ksj = $("#ksj").val();


    if (
      workingofconditions != "selected" &&
      tvozvr != "selected" &&
      vb &&
      qvodz &&
      rustrab &&
      tvkl &&
      toch &&
      p1vkl &&
      p2vkl
    ) {
      if (
        isNumber(pminvkl) &&
        isNumber(vb) &&
        isNumber(qvodz) &&
        isNumber(rustrab) &&
        isNumber(tvozvr) &&
        isNumber(p1vkl) &&
        isNumber(p2vkl)
      ) {
        let tvkl_time = tvkl.split(":");
        let toch_time = toch.split(":");
        let tvkl_time_itog =
          parseInt(tvkl_time[0]) * 60 + parseInt(tvkl_time[1]);
        let toch_time_itog =
          parseInt(toch_time[0]) * 60 + parseInt(toch_time[1]);
        let pmaxpad = ((pminvkl - rustrab) / 2.5).toFixed(0);
        $("#pmaxpad span").text(pmaxpad);

        let pvih = (pminvkl - pmaxpad).toFixed(0);
        $("#pvih span").text(pvih);

 
     
        let twithsjatyivosduh = Math.floor(((pmaxpad * vb) / (qvodz * ksj)));
       
    
        
        $("#twithsjatyivosduh span").text(timeConvert(twithsjatyivosduh));


        
        let tvihwithsjatyivosduh = (tvkl_time_itog + twithsjatyivosduh).toFixed(
         0
        );
        $("#tvihwithsjatyivosduh span").text(timeConvert(tvihwithsjatyivosduh));



        let tobjwithsjatyivosduh =Math.floor(
          (((pminvkl - rustrab) * vb) / (qvodz * ksj))
        );

 
        
        $("#tobjwithsjatyivosduh span").text(timeConvert(tobjwithsjatyivosduh));

  
        let tvozvrwithsjatyivosduh = tvkl_time_itog + tobjwithsjatyivosduh;
        $("#tvozvrwithsjatyivosduh span").text(timeConvert(tvozvrwithsjatyivosduh));


        let p1vklitog, p2vklitog, p3vklitog, p4vklitog, p5vklitog = 0;

        if(p1vkl && p1och) {
          p1vklitog = p1vkl - p1och;
        } else {
          p1vklitog = 0;
        }

        if(p2vkl && p2och) {
          p2vklitog = p2vkl - p2och;
        }  else {
          p2vklitog = 0;
        }

        if(p3vkl && p3och) {
          p3vklitog = p3vkl - p3och;
        } else {
          p3vklitog = 0;
        }

        if(p4vkl && p4och) {
          p4vklitog = p4vkl - p4och;
        } else {
          p4vklitog = 0;
        }

        if(p5vkl && p5och) {
          p5vklitog = p5vkl - p5och;
        }  else {
          p5vklitog = 0;
        }

        let pmaxpad1 =0;
        

        pmaxpad1 = Math.max(p1vklitog, p2vklitog, p3vklitog, p4vklitog, p5vklitog);

  

        let pkvihwithsjatyivosduh = parseInt(Math.ceil(
          pmaxpad1 + 0.5 * pmaxpad1 + rustrab
        ));
        $("#pkvihwithsjatyivosduh span").text(pkvihwithsjatyivosduh);



        if(pminoch) {
          let trabwithsjatyivosduh = parseInt(
            (((pminoch - pkvihwithsjatyivosduh) * vb) / (qvodz * ksj))
          );

          $("#trabwithsjatyivosduh span").text(timeConvert(trabwithsjatyivosduh));

          let tkvihwithsjatyivosduh = parseInt(
            toch_time_itog + trabwithsjatyivosduh
          );
       
          $("#tkvihwithsjatyivosduh span").text(timeConvert(tkvihwithsjatyivosduh));

        } else {
          $("#trabwithsjatyivosduh span").text(0);
          $("#tkvihwithsjatyivosduh span").text(0);
        }
     

    
        



       

      } else {
        alert("Все значения должны быть числом.");
      }
    } else {
      alert("Заполните все поля");
    }
    
  
  });

  $("#p1vkl, #p1och, #p2vkl, #p2och, #p3vkl, #p3och, #p4vkl, #p4och, #p5vkl, #p5och").change(function () { 

    let p1vkl = parseInt($("#p1vkl").val()) || '';
    let p1och = parseInt($("#p1och").val()) || '';
    let p2vkl = parseInt($("#p2vkl").val()) || '';
    let p2och = parseInt($("#p2och").val()) || '';
    let p3vkl = parseInt($("#p3vkl").val()) || '';
    let p3och = parseInt($("#p3och").val()) || '';
    let p4vkl = parseInt($("#p4vkl").val()) || '';
    let p4och = parseInt($("#p4och").val()) || '';
    let p5vkl = parseInt($("#p5vkl").val()) || '';
    let p5och = parseInt($("#p5och").val()) || '';
    let pminvklitog = 0;
    let pminochitog = 0;
    let pminvklitogarray = [];
    let pminochitogarray = [];

    if(p1vkl != '') {
      pminvklitogarray.push(p1vkl);
    }

    if(p2vkl.length  != '') {
      pminvklitogarray.push(p2vkl);
    }


    if(p3vkl.length  != '') {
      pminvklitogarray.push(p3vkl);
    }

    if(p4vkl.length  != '') {
      pminvklitogarray.push(p4vkl);
    }

    if(p5vkl.length  != '') {
      pminvklitogarray.push(p5vkl);
    }



    if(p1och.length  != '') {
      pminochitogarray.push(p1och);
    }

    if(p2och.length  != '') {
      pminochitogarray.push(p2och);
    }


    if(p3och.length  != '') {
      pminochitogarray.push(p3och);
    }

    if(p4och.length  != '') {
      pminochitogarray.push(p4och);
    }

    if(p5och.length  != '') {
      pminochitogarray.push(p5och);
    }


    if(pminvklitogarray.length > 0) {
      pminvklitog = Math.min(...pminvklitogarray);
      $("#pminvkl").val(pminvklitog.toFixed(0));
    } else {
      $("#pminvkl").val('');
    }

    if(pminochitogarray.length > 0) {
      pminochitog = Math.min(...pminochitogarray);
      $("#pminoch").val(pminochitog.toFixed(0));
    } else {
      $("#pminoch").val('');
    }
    
    

    
    

  })

  $("#tvozvr, #pminvkl, #p1vkl, #p1och, #p2vkl, #p2och, #p3vkl, #p3och, #p4vkl, #p4och, #p5vkl, #p5och").change(function () {
    let pminvkl = pminkrog(parseInt($("#pminvkl").val()));
    let tvozvr = tvozvrckrog(parseInt($("#tvozvr").val()));
    let ksjval = 0;

    if(pminvkl < 100) {
      pminvkl = 100;
    }

    
    if(pminvkl > 300) {
      pminvkl = 300;
    }

    if(tvozvr < -50) {
      tvozvr = -50;
    }

    if(tvozvr > 50) {
      tvozvr = 50;
    }


    if (pminvkl != "selected" && tvozvr != "selected" && isNumber(pminvkl) && isNumber(tvozvr)) {
      //давление 100
      if (pminvkl == 100 && tvozvr == -50) {
        ksjval=0.8726;
      }
      if (pminvkl == 100 && tvozvr == -40) {
        ksjval=0.898;
      }
      if (pminvkl == 100 && tvozvr == -30) {
        ksjval=0.9233;
      }
      if (pminvkl == 100 && tvozvr == -20) {
        ksjval=0.9442;
      }

      if (pminvkl == 100 && tvozvr == -10) {
        ksjval=0.9546;
      }

      if (pminvkl == 100 && tvozvr == 0) {
        ksjval=0.965;
      }

      if (pminvkl == 100 && tvozvr == 10) {
        ksjval=0.9754;
      }
      if (pminvkl == 100 && tvozvr == 20) {
        ksjval=0.9857;
      }
      if (pminvkl == 100 && tvozvr == 30) {
        ksjval=0.9945;
      }

      if (pminvkl == 100 && tvozvr == 40) {
        ksjval=0.9996;
      }

      if (pminvkl == 100 && tvozvr == 50) {
        ksjval=1.0046;
      }

      //давление 150

      if (pminvkl == 150 && tvozvr == -50) {
        ksjval=0.87;
      }
      if (pminvkl == 150 && tvozvr == -40) {
        ksjval=0.8978;
      }
      if (pminvkl == 150 && tvozvr == -30) {
        ksjval=0.9256;
      }
      if (pminvkl == 150 && tvozvr == -20) {
        ksjval=0.9487;
      }

      if (pminvkl == 150 && tvozvr == -10) {
        ksjval=0.9612;
      }

      if (pminvkl == 150 && tvozvr == 0) {
        ksjval=0.9737;
      }

      if (pminvkl == 150 && tvozvr == 10) {
        ksjval=0.9862;
      }
      if (pminvkl == 150 && tvozvr == 20) {
        ksjval=0.9987;
      }
      if (pminvkl == 150 && tvozvr == 30) {
        ksjval=1.0092;
      }

      if (pminvkl == 150 && tvozvr == 40) {
        ksjval=1.0153;
      }

      if (pminvkl == 150 && tvozvr == 50) {
        ksjval=1.0213;
      }

      //давление 200

      if (pminvkl == 200 && tvozvr == -50) {
        ksjval=0.9084;
      }
      if (pminvkl == 200 && tvozvr == -40) {
        ksjval=0.9317;
      }
      if (pminvkl == 200 && tvozvr == -30) {
        ksjval=0.955;
      }
      if (pminvkl == 200 && tvozvr == -20) {
        ksjval=0.975;
      }

      if (pminvkl == 200 && tvozvr == -10) {
        ksjval=0.9872;
      }

      if (pminvkl == 200 && tvozvr == 0) {
        ksjval=0.9995;
      }

      if (pminvkl == 200 && tvozvr == 10) {
        ksjval=1.0118;
      }
      if (pminvkl == 200 && tvozvr == 20) {
        ksjval=1.024;
      }
      if (pminvkl == 200 && tvozvr == 30) {
        ksjval=1.0345;
      }

      if (pminvkl == 200 && tvozvr == 40) {
        ksjval=1.0406;
      }

      if (pminvkl == 200 && tvozvr == 50) {
        ksjval=1.0468;
      }

      //давление 250

      if (pminvkl == 250 && tvozvr == -50) {
        ksjval=0.9698;
      }
      if (pminvkl == 250 && tvozvr == -40) {
        ksjval=0.9866;
      }
      if (pminvkl == 250 && tvozvr == -30) {
        ksjval=1.0034;
      }
      if (pminvkl == 250 && tvozvr == -20) {
        ksjval=1.0183;
      }

      if (pminvkl == 250 && tvozvr == -10) {
        ksjval=1.0286;
      }

      if (pminvkl == 250 && tvozvr == 0) {
        ksjval=1.039;
      }

      if (pminvkl == 250 && tvozvr == 10) {
        ksjval=1.0493;
      }
      if (pminvkl == 250 && tvozvr == 20) {
        ksjval=1.0597;
      }
      if (pminvkl == 250 && tvozvr == 30) {
        ksjval=1.0686;
      }

      if (pminvkl == 250 && tvozvr == 40) {
        ksjval=1.0741;
      }

      if (pminvkl == 250 && tvozvr == 50) {
        ksjval=1.0797;
      }

      //давление 300

      if (pminvkl == 300 && tvozvr == -50) {
        ksjval=1.0423;
      }
      if (pminvkl == 300 && tvozvr == -40) {
        ksjval=1.0526;
      }
      if (pminvkl == 300 && tvozvr == -30) {
        ksjval=1.063;
      }
      if (pminvkl == 300 && tvozvr == -20) {
        ksjval=1.0725;
      }

      if (pminvkl == 300 && tvozvr == -10) {
        ksjval=1.0803;
      }

      if (pminvkl == 300 && tvozvr == 0) {
        ksjval=1.088;
      }

      if (pminvkl == 300 && tvozvr == 10) {
        ksjval=1.0957;
      }
      if (pminvkl == 300 && tvozvr == 20) {
        ksjval=1.1035;
      }
      if (pminvkl == 300 && tvozvr == 30) {
        ksjval=1.1102;
      }

      if (pminvkl == 300 && tvozvr == 40) {
        ksjval=1.1145;
      }

      if (pminvkl == 300 && tvozvr == 50) {
        ksjval=1.1187;
      }

      $("#ksj").val(ksjval.toFixed(2));
    }
  });
  function isNumber(num) {
    return typeof num === "number" && !isNaN(num);
  }

  function tvozvrckrog(val) {
    let v;
    //округление температуры в пределах -50 до 50 с шагом 10.
    if(val < -50) {
      v = -50;
    }

    else if(val > 50) {
      v = 50;
    }
    else {
        v = Number.isInteger(val/10) ? val : Math.ceil((val - 10) / 10 ) * 10;
      
   
     if(v < -50) {
      v = -50;
    }

    else if(v > 50) {
      v = 50;
    }
    }
    return v;
  }


  function pminkrog(val) {
    let v;
    //округление температуры в пределах -50 до 50 с шагом 10.
    v = Number.isInteger(val/50) ? val : Math.ceil((val - 50) / 50 ) * 50;

    return v;
  }

  function timeConvert(twithsjatyivosduh) {
        let twithsjatyivosduhItog;
        twithsjatyivosduh = Math.abs(twithsjatyivosduh)

        if(twithsjatyivosduh == 0) {
          twithsjatyivosduh = 1;
        }

        if(twithsjatyivosduh <=59) {
          if(twithsjatyivosduh >= 10) {
            twithsjatyivosduhItog = "00:"+twithsjatyivosduh;
          } else {
            twithsjatyivosduhItog = "00:0"+twithsjatyivosduh;
          }
          
        } else {
          let time = (twithsjatyivosduh/60).toString().split('.');
          let hour = time[0] < 10 ? "0"+time[0]: time[0];
          let minute='00';
          if(time[1]) {
            let minute_1 = 0+"."+time[1];
            minute = (60*minute_1).toFixed();
            minute= minute < 10 ? "0"+minute: minute;
          }    
        
          twithsjatyivosduhItog = hour+":"+minute;
        }

        return twithsjatyivosduhItog;

  }

  e.preventDefault();
 
});
