!function(){function e(){var e=Reveal.getCurrentSlide(),a=e.querySelector("aside.notes"),o={notes:"",markdown:!1,socketId:n,state:Reveal.getState()};e.hasAttribute("data-notes")&&(o.notes=e.getAttribute("data-notes")),a&&(o.notes=a.innerHTML,o.markdown="string"==typeof a.getAttribute("data-markdown")),t.emit("statechanged",o)}if(!window.location.search.match(/receiver/gi)){var t=io.connect(window.location.origin),n=Math.random().toString().slice(2);console.log("View slide notes at "+window.location.origin+"/notes/"+n),window.open(window.location.origin+"/notes/"+n,"notes-"+n),t.on("new-subscriber",function(t){e()}),t.on("statechanged-speaker",function(e){Reveal.setState(e.state)}),Reveal.addEventListener("slidechanged",e),Reveal.addEventListener("fragmentshown",e),Reveal.addEventListener("fragmenthidden",e),Reveal.addEventListener("overviewhidden",e),Reveal.addEventListener("overviewshown",e),Reveal.addEventListener("paused",e),Reveal.addEventListener("resumed",e),e()}}();