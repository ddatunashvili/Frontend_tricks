var anchor = document.createElement('a')
    
anchor.href = '/it-consulting-services/' 
$(".h1 .services_title").wrapInner(anchor)

// ალტერნატივა
$(".course_column .title").each(function(i, o) {    
    var l = links[i]
    var anchor = document.createElement('a') 
        //   t.setAttribute("href", l)
    anchor.href = l 
    obj = $(this); 
    obj.wrapInner(anchor)

    });
    
