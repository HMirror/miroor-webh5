var main =  function(){

  this.pack = $('<div class="me">').hide();
  this.page = [];
  $('body').append(this.pack);

  this.addPage = function(name,text){
    var page= $('<div class="me_page section">')
    if(name !==undefined){
      page.addClass(name)
    }
    if(text != undefined){
          page.text(text);
      }
    this.pack.append(page);
    this.page.push(page);

    return this;
  };


  this.addComponent= function(name,cfg){
    var cfg=cfg||{};
    cfg= $.extend({
        type:'base'
    },cfg);
    var component;
    var page=this.page.slice(-1)[0];
    switch(cfg.type) {
      case 'base':
          component = new base(name,cfg);
          break;
      case 'skill':
          component = new skill(name,cfg);
          break;
      case 'project':
          component = new project(name,cfg);
          break;
      default:
    }
    page.append(component);
    return this;
}

//页面初始化
  this.loader= function(){
    this.pack.fullpage({
      'sectionsColor':['#35cd9a','#e16887','#35cd9a','#e16887','#35cd9a','#35a1ff'],
        onLeave:function( index,nextIndex,direction ){
          $(this).find('.me_component').trigger('onLeave');
        },
        afterLoad:function(anchorLink, index){
          $(this).find('.me_component').trigger('afterLoad');
        },
    });

    this.page[0].find(".me_component").trigger('afterLoad');
    this.pack.show();
  }
  return this;
}
