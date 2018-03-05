var skill = function(name,cfg){
  var component = new base(name,cfg);
  console.log(cfg.data)
  $.each(cfg.data,function(idx,item){
     // console.log(item);
      var line=$('<div class="line">');
      var name=$('<div class="name">');
      var bar_bottom=$('<div class="bar_bottom" >');
      var bar_top=$('<div class="bar_top">');
      var rate=$('<div class="rate">');

      var width_bottom=item[1]*100 + '%';
      var width_top=item[2]*100 + '%';
      var bgColor='';
      if(item[4]){
          bgColor='style="background-color:'+item[4]+'"';

      }

      bar_top.html('<div class="bg" '+bgColor+'></div>');
      rate.text(item[3]);
      bar_bottom.css('width',width_bottom);
      bar_top.css('width',width_top);
      name.text(item[0]);
      bar_bottom.append(bar_top)
      line.append( name ).append( bar_bottom ).append( rate );
      component.append(line);
  });
   return component;
}
