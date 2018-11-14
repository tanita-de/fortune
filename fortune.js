  $(function(){
    $("#bt1").on("click",function(){
      var yourname = $("#yourname").val();
      if(yourname === ""){
        $("#namebox span").html("名前を入力してください")
      }else{
        $("#namebox").html("<h1>" + yourname +"さんの占い結果</h1>")
        var random =Math.floor( Math.random()*5);
        var imgs= ["daikiti.png","tyukiti.png","kiti.png","suekiti.png","kyou.png"];
        //alert(random);
        var text= ["<h1>おめでとう！良い夢見ろよ！</h1>","<h1>100円拾うレベルのラッキーに<br>であうかもね！</h1>",
                  "<h1>普通だな。<br>代わり映えの無い日常を楽しめ〜</h1>","<h1>1000円失くすレベルの不幸に<br>要注意だぞ。</h1>",
                  "<h1>帰り道、気をつけるこったな…</h1>"];
                  $("#main img").attr("src",imgs[random]);
                  $("#box1").html(text[random]);
                  //$("#main img").animate({
                    //"width":"300px",
                    //"height":"500",
                    //"opacity":"1"
                  //})
        $("#bt1").remove();
      }
    });
  });
