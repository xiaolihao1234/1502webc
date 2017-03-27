/**
 * Created by acer on 2017/3/21.
 */
$(function(){
    $('img').load(function(){
        var box=$('.box');
        var boxHeight={
            leftBox:[],
            centerBox:[],
            rightBox:[]
        };
        for(var i=0;i<box.length;i++){
            var now=i%8;   //nowµÄÖµÎª0 £¬1 2
            switch (now){
                case 0:
                    box.eq(i).css('left','10px');
                    boxHeight.leftBox.push(box.eq(i).height());
                    var now2=Math.floor(i/3);

                    if(now==0){
                        box.eq(i).css('top',0);
                    }else{
                        var tatal=0;
                        for(var j=0;j<now2;j++){
                            tatal=boxHeight.leftBox[j]+10;
                        }
                        box.eq(i).css('top',tatal+'px');
                    }


                    break;

                case 1:
                    box.eq(i).css('left','270px');
                    boxHeight.centerBox.push(box.eq(i).height());
                    if(now==0){
                        box.eq(i).css('top',0);
                    }else{
                        var tatal=0;
                        for(var j=0;j<now2;j++){
                            tatal=boxHeight.centerBox[j]+10;
                        }
                        box.eq(i).css('top',tatal+'px');
                    }
                    break;

                case 2:
                    box.eq(i).css('left','530px');
                    boxHeight.rightBox.push(box.eq(i).height());

                    if(now==0){
                        box.eq(i).css('top',0);
                    }else{
                        var tatal=0;
                        for(var j=0;j<now2;j++){
                            tatal=boxHeight.rightBox[j]+10;
                        }
                        box.eq(i).css('top',tatal+'px');
                    }
                    break;

                case 3:
                    box.eq(i).css('left','790px');
                    break;

                case 4:
                    box.eq(i).css('left','1050px');
                    break;

                case 5:
                    box.eq(i).css('left','1310px');
                    break;

                case 6:
                    box.eq(i).css('left','1570px');
                    break;
                case 7:
                    box.eq(i).css('left','1830px');
                    break;

                case 8:
                    box.eq(i).css('left','2090px');
                    break;
            }
        }
    })

})