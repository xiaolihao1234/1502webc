/**
 * Created by Administrator on 2017/3/23.
 */


$(function(){

    $(".sao").click(function(){
       alert("此功能暂不开放") ;
    });


    var num1=1;
        $("#tjian1").click(function(){
            if(num1>0){
                num1--;
            }
           var dan= $("#t_dan1").text();

            $("#tshu1").text(num1);
            $("#t_qian1").text(dan*num1);
        });
        $("#tjia1").click(function(){
            num1++;
            var dan= $("#t_dan1").text();
            $("#tshu1").text(num1);
            $("#t_qian1").text(dan*num1);
        });

    var num2=1;
    $("#tjian2").click(function(){
        if(num2>0){
            num2--;
        }
        var dan= $("#t_dan2").text();

        $("#tshu2").text(num2);
        $("#t_qian2").text(dan*num2);
    });
    $("#tjia2").click(function(){
        num2++;
        var dan= $("#t_dan2").text();
        $("#tshu2").text(num2);
        $("#t_qian2").text(dan*num2);
    });

    var num3=1;
    $("#tjian3").click(function(){
        if(num3>0){
            num3--;
        }
        var dan= $("#t_dan3").text();

        $("#tshu3").text(num3);
        $("#t_qian3").text(dan*num3);
    });
    $("#tjia3").click(function(){
        num3++;
        var dan= $("#t_dan3").text();
        $("#tshu3").text(num3);
        $("#t_qian3").text(dan*num3);
    });
    $(".ch_q").click(function(){
        //alert("asdasd");
      if($(this).prop("checked")){
          $(".c_xuan").prop("checked",true);
      }else{
          $(".c_xuan").prop("checked",false);
      }
    });

    $("#tdel_1").click(function(){
        $(this).parent().parent().remove();
    });
    $("#tdel_2").click(function(){
        $(this).parent().parent().remove();
    });
    $("#tdel_3").click(function(){
        $(this).parent().parent().remove();
    });
    $(".q_pb1").click(function(){
        $(".c_xuan:checked").parent().parent().remove();
    })







});