window.document.onreadystatechange = removeHashtagsBeforeAnnotations

// waits untill annotations are loaded and remove hashtags
function removeHashtagsBeforeAnnotations() {

    document.querySelectorAll("code").forEach((node) => {
        let str = node.innerHTML
        node.innerHTML = str.replace(/(# )(\([0-9]*\))/g, "$2")
    })
   
};

var oldHref = document.location.href; // initial url
window.onload = function () {

    var bodyList = document.querySelector("body") // select body

    var observer = new MutationObserver((mutations) => {

        mutations.forEach(() => {

            // if user changed location
            if (oldHref != document.location.href) {
                oldHref = document.location.href; // update href to match current location
                removeHashtagsBeforeAnnotations() // wait for annotations and remove hashtags
            }
        });
    });
    observer.observe(bodyList, {childList: true, subtree: true}); // start observing body for mutations
};


