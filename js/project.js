var project  = function(name,cfg){
  var component = new base(name,cfg);
  console.log(cfg.data)
  $.each(cfg.data,function(idx,item){
    var pro = $('<div class="pro">');
    var pro_name = $('<div class="pro_name">');
    var pro_year = $('<div class="pro_year">');
    var pro_job = $('<div class="pro_job">');
    var pro_ex = $('<div class="pro_ex">');

    pro_name.text(item[0]);
    pro_year.text(item[1]);
    pro_job.text(item[2]);
    pro_ex.text(item[3]);

    pro.append(pro_name).append(pro_year).append(pro_job).append(pro_ex);
    component.append(pro);
  })
  return component
}
