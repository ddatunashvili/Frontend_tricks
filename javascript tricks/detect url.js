
onload = (event) => { 
    var url = window.location.hash.split("#")[1]
    console.log(url)
    if(url == "branding") {
        document.querySelector(".qodef-m-filter-items a:nth-child(1)").click()
    }

    if(url == "logo") {
        document.querySelector(".qodef-m-filter-items a:nth-child(2)").click()
    }
    if(url == "social") {
        document.querySelector(".qodef-m-filter-items a:nth-child(3)").click()
    }
    if(url == "web") {
        document.querySelector(".qodef-m-filter-items a:nth-child(4)").click()
    }
}
