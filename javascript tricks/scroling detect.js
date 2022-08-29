

// სქროლვისას
window.onscroll = ()=> {  
    // თუ  ელემენტი გამოჩნდება სტიკი გახადე (ელემენტის საწყისი ნაწილი)
    if(isInViewport(triger) == false){
    element.style.top='10%'
    element.style.position='fixed'
    // თუ ელემენტი არ ჩანს იყოს სადაც არის
    }else{
    element.style.position='inherit'
    element.style.top=' '
    }


    // თუ დასქროლილია სქროლბარის 88% ზე მეტი გააქრე სტილები 
    if(getScrollPercent() > 88){
    element.style.position=''
    element.style.top=' '
    }

} 
