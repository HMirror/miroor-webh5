var base = function(name,cfg){
  var cfg =  cfg || {};
  var id= ('me_component_'+Math.random()).replace('.','_');

  var sign  = 'me_component_'+cfg.type;
  var component = $('<div class="me_component '+sign+' me_component_'+name+'" id="'+id+'"></div>');


  cfg.text && component.text(cfg.text);
  cfg.width && component.width(cfg.width);
  cfg.height && component.height(cfg.height);
  cfg.css && component.css(cfg.css);
  cfg.bg && component.css('background','url('+cfg.bg+') no-repeat');
  if(cfg.center===true){//水平垂直居中
      component.css({
          marginLeft:(cfg.width/2 * -1) + 'px',
          left:'50%'
      })
  }

  component.on('afterLoad',function(){
       setTimeout(function(){
           component.addClass(sign+'_load').removeClass(sign+'_leave');
           cfg.animateIn && component.animate(cfg.animateIn);
       },cfg.delay||0)

        return false;
    })
    component.on('onLeave',function(){
       setTimeout(function () {
           component.addClass(sign+'_leave').removeClass(sign+'_load');
           cfg.animateOut && component.animate(cfg.animateOut);
       },cfg.delay||0)

        return false;
    })

  return component
}
