
let options = {
    root: null,
    rootMargin: '10px',
    threshold: 0
};
let observer = new IntersectionObserver(callbackFunc, options);
let observer2 = new IntersectionObserver(callbackFunc2, options);

function callbackFunc(entries, observer) {
    entries.forEach(entry => {
        //console.log(entry);
        var txt = "view" + entry.isIntersecting;
        document.getElementById(entry.target.id).className = txt;
    });
}

function callbackFunc2(entries, observer) {
    entries.forEach(entry => {
        var txt = "view" + entry.isIntersecting;
        [...document.querySelectorAll('.front-bar')].map((each) => { each.id = txt; });
        //document.getElementById(entry.target.id).className = txt;
    });
}





[...document.querySelectorAll('.front-bar')].map((each) => { observer2.observe(each); });

observer.observe(document.getElementById('p1'));
observer.observe(document.getElementById('p2'));


