


var browserZoomLevel = Math.round(window.devicePixelRatio * 100);


// ზუმის დროს პროცენტი
window.onresize = ()=>{
    var browserZoomLevel = Math.round(window.devicePixelRatio * 100);

    console.log(browserZoomLevel)
}