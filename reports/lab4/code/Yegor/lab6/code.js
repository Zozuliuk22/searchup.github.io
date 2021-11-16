function makeBarChart(data, width, height, barcolor) {
    
    if (!width) width = 500;
    if (!height) height = 350;
    if (!barcolor) barcolor = "blue";
    
    width -= 24; 
    height -= 14; 
    var chart = document.createElement("div");
    chart.style.position = "relative"; 
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.border = "solid black 1px";
    chart.style.paddingLeft = "10px";
    chart.style.paddingRight = "10px";
    chart.style.paddingTop = "10px";
    chart.style.paddingBottom = "0px";
    chart.style.backgroundColor = "white";
   
    var barwidth = 1;
   
    var maxdata = Math.max.apply(this, data);
    
    var scale = height/maxdata;
   
    for(var i = 0; i < data.length; i++) {
     var bar = document.createElement("div");
     var barheight = data[i] * scale; 
     bar.style.position = "absolute"; 
     bar.style.left = (barwidth*i+1+10)+"px";
     bar.style.top = height-barheight+10+"px";
     bar.style.width = (barwidth-2) + "px"; 
     bar.style.height = (barheight-1) + "px";
     if (data[i] >= 50) bar.style.border = "solid red 1px"; 
     if (data[i] < 50) bar.style.border = "solid blue 1px";
     bar.style.backgroundColor = barcolor;
     bar.style.fontSize = "0px";
     chart.appendChild(bar);
    }
    return chart;
   }