class X {
    trendingNewsSection() {
        $("#sectionName").html("Trending News")
        $("#trendingNews").html("");       
        if (getLocalStorage("trendingNews")) {
            $.each(getLocalStorage("trendingNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                var { hostname } = new URL(v.link);
                var $listItem = $(`
                                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">
                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>        
                                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5>
                                            <p class="mb-0 mt-1 opacity-75 small">${hostname}, ${timediff}</p>
                                        </div>
                                        <img src="https://www.google.com/s2/favicons?sz=32&domain=${hostname}" alt="" width="32" height="32" class="rounded-circle flex-shrink-0 mb-1">
                                    </div>  
                                                                                                                         
                                </li>                               
                                `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank');                   
                });
                $("#trendingNews").append($listItem);
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getTrendingNews();
        }
    }
    topNewsSection() {
        $("#sectionName").html("Top News")
        $("#topNews").html("");       
        if (getLocalStorage("topNews")) {
            $.each(getLocalStorage("topNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime / 1000);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                var { hostname } = new URL(v.link);
                let desc = v.description ? v.description : ``
                var $listItem = $(`
                                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5>                                            
                                            <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>
                                            <p class="mb-0 mt-1 opacity-75 small">${desc}</p>
                                        </div>
                                        <img src="https://www.google.com/s2/favicons?sz=32&domain=${hostname}" alt="" width="32" height="32" class="rounded-circle flex-shrink-0 mb-1">
                                    </div>	
                                </li>                               
                                `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank'); 
                });
                $("#topNews").append($listItem);
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getTopNews();
        }
    }
    eventNewsSection() {
        $("#sectionName").html("Latest Events")
        $("#eventNews").html("");
        if (getLocalStorage("eventNews")) {
            $.each(getLocalStorage("eventNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime / 1000);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                var { hostname } = new URL(v.link);
                let desc = v.description ? v.description : ``
                var $listItem = $(`
                                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer" id="${k}-hour">                                        
                                    <div class="d-flex gap-2 w-100 justify-content-between">
                                        <div>
                                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5>                                            
                                            <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>
                                            <p class="mb-0 mt-1 opacity-50 small">${desc}</p>
                                        </div>
                                        <img src="https://www.google.com/s2/favicons?sz=32&domain=${hostname}" alt="" width="32" height="32" class="rounded-circle flex-shrink-0 mb-1">
                                    </div>	
                                </li>                               
                                `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank'); 
                });
                $("#eventNews").append($listItem);
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getEventsNews();
        }
    }
    techNewsSection() {
        $("#sectionName").html("Tech News")
        $("#techNews").html("");       
        if (getLocalStorage("techNews")) {
            $.each(getLocalStorage("techNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                try {
                    var { hostname } = new URL(v.link);
                    let imgsrc = v.thumbnail ? v.thumbnail : ``
                    var $listItem = $(`                    
                    <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                        <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                                <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                                <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                            </div>
                            <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-4 rounded">
                        </div>	
                       
                    </li>
                    `);
                    $listItem.on("click", function (e) {
                        window.open(v.link, '_blank'); 
                    });
                    $("#techNews").append($listItem);
                } catch (err) {
                    // console.log(v.link, err);
                }
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getTechNews();
        }

    }
    entNewsSection() {
        $("#sectionName").html("Entertainment News")
        $("#entNews").html("");
        if (getLocalStorage("entNews")) {
            $.each(getLocalStorage("entNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                try {
                    var { hostname } = new URL(v.link);
                    let imgsrc = v.thumbnail ? v.thumbnail : ``
                    var $listItem = $(`                    
                    <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                        <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                                <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                                <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                            </div>
                            <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-4 rounded">
                        </div>	
                       
                    </li>
                    `);
                    $listItem.on("click", function (e) {
                        window.open(v.link, '_blank'); 
                    });
                    $("#entNews").append($listItem);
                } catch (err) {
                    // console.log(v.link, err);
                }
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getEntertainmentNews();
        }

    }
    businessNewsSection() {
        $("#sectionName").html("Business News")
        $("#businessNews").html("");
        if (getLocalStorage("businessNews")) {
            $.each(getLocalStorage("businessNews"), function (k, v) {
                var unixtime = v.created;
                var currTime = Date.now();
                var timediff = Math.round(currTime / 1000 - unixtime);
                if (timediff / 60 / 60 < 1) {
                    timediff = Math.round(timediff / 60) + " minutes ago";
                } else if (Math.round(timediff / 60 / 60) === 1) {
                    timediff = Math.round(timediff / 60 / 60) + " hour ago";
                } else {
                    timediff = Math.round(timediff / 60 / 60) + " hours ago";
                }
                try {
                    var { hostname } = new URL(v.link);
                    let imgsrc = v.thumbnail ? v.thumbnail : ``
                    if (imgsrc == "") {
                        var $listItem = $(`                    
                        <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                            <div class="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                                    <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                                </div>
                                <img src="https://www.google.com/s2/favicons?sz=32&domain=${hostname}" alt="" width="32" height="32" class="rounded-circle flex-shrink-0 mb-1">                               
                            </div>	
                           
                        </li>
                        `);
                        $listItem.on("click", function (e) {
                            window.open(v.link, '_blank'); 
                        });
                        $("#businessNews").append($listItem);
                    } else {
                        var $listItem = $(`                    
                    <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                        <div class="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                                <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                                <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                            </div>
                            <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-4 rounded">
                        </div>	
                       
                    </li>
                    `);
                        $listItem.on("click", function (e) {
                            window.open(v.link, '_blank');
                        });
                        $("#businessNews").append($listItem);
                    }
                } catch (err) {
                    // console.log(v.link, err);
                }
            });
        } else {
            $("body").css({ "opacity": "0.2" });
            $("body").css({"cursor": "wait"});
            getBusinessNews();
        }

    }   
    wikiSection() {
        $("#sectionName").html("Trending Articles")
        $("#wikiArticles").html(""); 
        if (getLocalStorage("wiki")) {
            $.each(getLocalStorage("wiki").mostread, function (k, v) {
                let imgsrc = v.thumbnail ? v.thumbnail.source : ``
                var $listItem = $(`                    
                <li class="list-group-item border-bottom py-4 bg-light mb-1" >                                        
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <details class="top-details" style="cursor:pointer"><summary><h5 class="mb-0 mt-0 fw-bold">${v.title}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg></h5>
                            <p class="mb-0 mt-1 small">${v.description}</p>                            
                            </summary>
                            <p class="mb-0 mt-1 small">${v.extract}</p>  
                            <p class="mb-0 mt-1 small"><a href="${v.link}" target="_blank">Read full article on Wikipedia</a></p>   
                            </details>                                                        
                        </div>
                        <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-0 rounded">
                    </div>	
                   
                </li>
                `);               
                $("#wikiArticles").append($listItem);
            });
        } else {
            $("body").css({"opacity": "0.2"});     
            $("body").css({"cursor": "wait"});
            getWiki();            
        }
    }
    risingNewsSection(){
        $("#sectionName").html("Rising News")
        $("body").css({"opacity": "0.2"});     
        $("body").css({"cursor": "wait"});
        getTimeline();
    }
    homeSection() {$("#sectionName").html("Home")}
    newsSection(){}
    countryNewsSection() {$("#sectionName").html("Country News")}
    languageNewsSection() {$("#sectionName").html("Language News")}
    searchNewsSection(){$("#sectionName").html("Search News")}
}
countryVal = "IN";
languageVal = "ENG";
window.addEventListener('hashchange', function () {
    try{
        $("#offcanvasMenu").offcanvas('hide');
    }catch(err){}    
    let x = new X();
    x[location.hash.replace("#", "")]();
    $(`section:not("${location.hash}")`).hide();
    $(`${location.hash}`).show();
    topFunction();
}, false);
onPageLoad();
function onPageLoad() {
    if (!location.hash || location.hash == "#") {
        window.location = "#homeSection";
    }
    let x = new X();
    x[location.hash.replace("#", "")]();
    $(`section:not("${location.hash.replace("#", ".")}")`).hide();
    $(`${location.hash}`).show();
    topFunction();
}
function p() {
    let x = new X();
    x[location.hash.replace("#", "")]();
    $(`section:not("${location.hash}")`).hide();
    $(`${location.hash}`).show();
    topFunction();
}
function getTrendingNews() {    
    urls = ["https://www.reddit.com/r/worldnews/top/.json?sort=top&t=hour",
        "https://www.reddit.com/r/worldnews/top/.json?sort=top&t=day",
        "https://www.reddit.com/r/worldnews/new/.json",
        "https://www.reddit.com/r/worldnews/hot/.json"
    ]
    async.mapLimit(urls, 4, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.log(err.response);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].data.children.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.data.url);
                if (item_index === -1) {
                    arr.push({ "title": item.data.title, "created": item.data.created, "link": item.data.url, "source": item.data.domain })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });       
        setLocalStorage("trendingNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getTopNews() {
    urls = ["https://emm.newsbrief.eu/emmMap/tunnel?sid=emmMap&?stories=top&language=en",
    ]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.trace(err);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].items.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.url);
                if (item_index === -1) {
                    arr.push({ "title": item.title, "created": Date.parse(item.startDate), "link": item.mainItemLink, "source": item.mainItemSource.url,"description": item.description })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        const stop = Date.now()        
        setLocalStorage("topNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getEventsNews() {
    urls = ["https://emm.newsbrief.eu/emmMap/tunnel?sid=emmMap&?stories=events&language=en",
    ]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.trace(err);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].items.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.url);
                if (item_index === -1) {
                    arr.push({ "title": item.title, "created": Date.parse(item.startDate), "link": item.mainItemLink, "source": item.mainItemSource.url, "description": item.description, "snippet": item.event.snippet })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        setLocalStorage("eventNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getTechNews() {
    const start = Date.now()
    urls = ["https://www.reddit.com/r/technews/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/technology/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/gadgets/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/google/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/apple/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/technews/hot/.json?sort=top&t=day&limit=20",
        "https://www.reddit.com/r/technology/hot/.json?sort=top&t=day&limit=20",
    ]
    async.mapLimit(urls, 10, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.log(err.response);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].data.children.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.data.url);
                if (item.data.url.includes("redd.it") || item.data.url.includes("reddit.com") || item.data.url.includes("imgur.com") || item.data.url.includes("gfycat.com")) {
                    //do nothing
                } else {
                    if (item_index === -1) {
                        arr.push({ "title": item.data.title, "created": item.data.created, "link": item.data.url, "source": item.data.domain, "thumbnail": item.data.thumbnail })
                    }
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        const stop = Date.now()
        // console.log(`Time Taken to execute TechNews = ${(stop - start) / 1000} seconds`);
        setLocalStorage("techNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getEntertainmentNews() {
    urls = ["https://www.reddit.com/r/entertainment/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/entertainment/hot/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/boxoffice/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/boxoffice/hot/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/television/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/television/hot/.json?sort=top&t=day&limit=10",
    ]
    async.mapLimit(urls, 10, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.log(err.response);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].data.children.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.data.url);
                if (item.data.url.includes("youtube") || item.data.url.includes("youtu.be") || item.data.url.includes("twitter.com") || item.data.url.includes("redd.it") || item.data.url.includes("reddit.com") || item.data.url.includes("imgur.com") || item.data.url.includes("gfycat.com")) {
                    //do nothing
                } else {
                    if (item_index === -1) {
                        arr.push({ "title": item.data.title, "created": item.data.created, "link": item.data.url, "source": item.data.domain, "thumbnail": item.data.thumbnail })
                    }
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        const stop = Date.now()
        // console.log(`Time Taken to execute TechNews = ${(stop - start) / 1000} seconds`);
        setLocalStorage("entNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getBusinessNews() {
    urls = ["https://www.reddit.com/r/business/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/business/hot/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/economics/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/economics/hot/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/economy/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/economy/hot/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/finance/top/.json?sort=top&t=day&limit=10",
        "https://www.reddit.com/r/finance/hot/.json?sort=top&t=day&limit=10",
    ]
    async.mapLimit(urls, 10, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.log(err.response);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        for (index in results) {
            results[index].data.children.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.data.url);
                if (item.data.url.includes("youtube") || item.data.url.includes("youtu.be") || item.data.url.includes("twitter.com") || item.data.url.includes("redd.it") || item.data.url.includes("reddit.com") || item.data.url.includes("imgur.com") || item.data.url.includes("gfycat.com")) {
                    //do nothing
                } else {
                    if (item_index === -1) {
                        arr.push({ "title": item.data.title, "created": item.data.created, "link": item.data.url, "source": item.data.domain, "thumbnail": item.data.thumbnail })
                    }
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        // const stop = Date.now()
        // console.log(`Time Taken to execute TechNews = ${(stop - start) / 1000} seconds`);
        setLocalStorage("businessNews", arrr, 15 * 60000);
        p();
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
$("#button-countryNews").on("click", function(){
    $("body").css({ "opacity": "0.2" });
    getCountryNews(countryVal);
})
function getCountryNews(hash) {
    urls = ["https://api.gdeltproject.org/api/v2/doc/doc?query=sourcecountry:" + hash + "%20sourcelang:eng&mode=artlist&format=json&maxrecords=75&sort=datedesc",
    ]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.trace(err);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []        
        for (index in results) {
            results[index].articles.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.url);
                if (item_index === -1) {
                    arr.push({ "title": item.title, "created": item.seendate, "link": item.url, "source": item.domain, "thumbnail": item.socialimage })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });       
        $("#countryNews").html("");
        $.each(arrr, function (k, v) {
            var mDate = v.created.slice(0, 4) + "-" + v.created.slice(4, 6) + "-" + v.created.slice(6, 8)
                + " " + v.created.slice(9, 11) + ":" + v.created.slice(11, 13)
                + ":" + v.created.slice(13, 15);
            var unixtime = Date.parse(mDate);
            var currTime = Date.now();
            var timediff = Math.round(currTime / 1000 - unixtime / 1000);
            if (timediff / 60 / 60 < 1) {
                timediff = Math.round(timediff / 60) + " minutes ago";
            } else if (Math.round(timediff / 60 / 60) === 1) {
                timediff = Math.round(timediff / 60 / 60) + " hour ago";
            } else {
                timediff = Math.round(timediff / 60 / 60) + " hours ago";
            }
            try {
                var { hostname } = new URL(v.link);
                let imgsrc = v.thumbnail ? v.thumbnail : ``
                var $listItem = $(`                    
                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                            <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                        </div>
                        <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-4 rounded">
                    </div>	
                   
                </li>
                `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank');
                });
                $("#countryNews").append($listItem);
            } catch (err) {
                // console.log(v.link, err);
            }
        });        
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
        $("#countryNews").focus();
    })
}
$("#button-languageNews").on("click", function(){
    $("body").css({ "opacity": "0.2" });
    getLanguageNews(languageVal);
})
function getLanguageNews(hash) {
    urls = ["https://api.gdeltproject.org/api/v2/doc/doc?query=sourcelang:" + hash + "&mode=artlist&format=json&maxrecords=75&sort=datedesc",
    ]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            console.trace(err);
        }

    }, (err, results) => {
        if (err) { console.log(err); }
        arr = []
        // console.log(results);
        for (index in results) {
            results[index].articles.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.url);
                if (item_index === -1) {
                    arr.push({ "title": item.title, "created": item.seendate, "link": item.url, "source": item.domain, "thumbnail": item.socialimage })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        $("#languageNews").html(``);
        $.each(arrr, function (k, v) {
            var mDate = v.created.slice(0, 4) + "-" + v.created.slice(4, 6) + "-" + v.created.slice(6, 8)
                + " " + v.created.slice(9, 11) + ":" + v.created.slice(11, 13)
                + ":" + v.created.slice(13, 15);
            var unixtime = Date.parse(mDate);
            var currTime = Date.now();
            var timediff = Math.round(currTime / 1000 - unixtime / 1000);
            if (timediff / 60 / 60 < 1) {
                timediff = Math.round(timediff / 60) + " minutes ago";
            } else if (Math.round(timediff / 60 / 60) === 1) {
                timediff = Math.round(timediff / 60 / 60) + " hour ago";
            } else {
                timediff = Math.round(timediff / 60 / 60) + " hours ago";
            }
            try {
                var { hostname } = new URL(v.link);
                let imgsrc = v.thumbnail ? v.thumbnail : ``
                var $listItem = $(`                    
                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                            <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                        </div>
                        <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-4 rounded">
                    </div>	
                   
                </li>
                `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank');
                });
                $("#languageNews").append($listItem);
            } catch (err) {
                // console.log(v.link, err);
            }
        });
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
$("#button-keyword").on("click", function(){    
    $("body").css({ "opacity": "0.2" });    
    getKeywordNews($("#keyword").val());
})
function getKeywordNews(hash) {
    urls = ["https://api.gdeltproject.org/api/v2/doc/doc?query=" + $.trim(hash) + "%20sourcelang:eng&mode=artlist&format=json&maxrecords=75&sort=datedesc"]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.trace(err);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []
        // console.log(results);
        for (index in results) {
            results[index].articles.forEach(item => {
                var item_index = arr.findIndex(x => x.link == item.url);
                if (item_index === -1) {
                    arr.push({ "title": item.title, "created": item.seendate, "link": item.url, "source": item.domain, "thumbnail": item.socialimage })
                }
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });
        // console.log(arrr);
        $("#searchNews").html(``);
        $.each(arrr, function (k, v) {
            var mDate = v.created.slice(0, 4) + "-" + v.created.slice(4, 6) + "-" + v.created.slice(6, 8)
                + " " + v.created.slice(9, 11) + ":" + v.created.slice(11, 13)
                + ":" + v.created.slice(13, 15);
            var unixtime = Date.parse(mDate);
            var currTime = Date.now();
            var timediff = Math.round(currTime / 1000 - unixtime / 1000);
            if (timediff / 60 / 60 < 1) {
                timediff = Math.round(timediff / 60) + " minutes ago";
            } else if (Math.round(timediff / 60 / 60) === 1) {
                timediff = Math.round(timediff / 60 / 60) + " hour ago";
            } else {
                timediff = Math.round(timediff / 60 / 60) + " hours ago";
            }
            try {
                var { hostname } = new URL(v.link);
                let imgsrc = v.thumbnail ? v.thumbnail : ``
                var $listItem = $(`                    
        <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
            <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
                    <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
                    <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
                </div>
                <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-2 rounded">
            </div>	
           
        </li>
        `);
                $listItem.on("click", function (e) {
                    window.open(v.link, '_blank');
                });
                $("#searchNews").append($listItem);
            } catch (err) {
                // console.log(v.link, err);
            }
        });
        // p();
        $("body").css({ "opacity": "1" });
        $("body").css({ "cursor": "" });

    })
}
function getTimeline() {
    urls = ["https://api.gdeltproject.org/api/v2/doc/doc?timespan=1h&query=sourcelang:eng%20(domain:bbc.com%20OR%20domain:cnn.com%20OR%20domain:economictimes.indiatimes.com%20OR%20domain:theguardian.com)&mode=TimelineVolInfo&sort=hybridrel&format=json",
            "https://api.gdeltproject.org/api/v2/doc/doc?timespan=3h&query=sourcelang:eng%20(domain:news18.com%20OR%20domain:theprint.in%20OR%20domain:livemint.com%20OR%20domain:thehindu.com)&mode=TimelineVolInfo&sort=hybridrel&format=json"
           ]   
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.trace(err);
        }

    }, (err, results) => {
        // if (err) { console.log(err); }
        arr = []        
        for (index in results) {
            results[index].timeline[0].data.forEach(item => {
                arr.push({"created": item.date.replace("T","").replace("Z",""), "articles": item.toparts})
            });
        }
        arrr = arr.sort(function (a, b) {
            return b.created - a.created;
        });              
        $("#risingNews").html(``);
        $.each(arrr, function (k, v) {                       
            $.each(v.articles,function(k,v){    
                var { hostname } = new URL(v.url);
                var $listItem = $(`
                <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>        
                            <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5>
                            <p class="mb-0 mt-1 opacity-75 small">${hostname}</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?sz=32&domain=${hostname}" alt="" width="32" height="32" class="rounded-circle flex-shrink-0 mb-1">
                    </div>  
                                                                                                         
                </li>                               
                `);
                $listItem.on("click", function (e) {
                    window.open(v.url, '_blank');                   
                });
                $("#risingNews").append($listItem);
            })
        });
        
        $("body").css({ "opacity": "1" });
        $("body").css({"cursor": ""});
    })
}
function getWiki() {
    const start = Date.now()
    var MyDate = new Date();
    year = MyDate.getFullYear();
    month = ('0' + (MyDate.getMonth() + 1)).slice(-2);
    day = ('0' + (MyDate.getDate())).slice(-2);
    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
    urls = [url]
    async.mapLimit(urls, 1, async function (url) {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (err) {
            // console.log(err.response);
        }

    }, (err, results) => {
        // if (err) { console.log(err); back.send("wiki", "error") }
        // else {
            // console.log(results);		
            // const stop = Date.now()
            // console.log(`Time Taken to execute WIKI = ${(stop - start) / 1000} seconds`);
            wiki = {}
            arr = []
            $.each(results[0].mostread.articles, function (k, v) {
                arr.push({ title: v.displaytitle, thumbnail: v.thumbnail, extract: v.extract, description: v.description, views: v.views, link: v.content_urls.desktop.page });
            });
            wiki.mostread = arr;
            arr = [];
            $.each(results[0].onthisday, function (k, v) {
                iarr = []
                $.each(v.pages, function (i, j) {
                    iarr.push({ title: j.displaytitle, thumbnail: j.thumbnail, extract: j.extract, description: j.description, link: j.content_urls.desktop.page });
                })
                arr.push({ text: v.text, year: v.year, pages: iarr })
            });
            wiki.OTD = arr;
            arr = []
            wiki.featuredImage = { title: results[0].image.title, thumbnail: results[0].image.thumbnail, description: results[0].image.description.html, artist: results[0].image.artist }
            wiki.tfa = { title: results[0].tfa.displaytitle, description: results[0].tfa.description, thumbnail: results[0].tfa.thumbnail, extract: results[0].tfa.extract, link: results[0].tfa.content_urls.desktop.page }
            setLocalStorage("wiki", wiki, 15 * 60000);
            p();
            $("body").css({"opacity": "1"});
            $("body").css({"cursor": ""});
        // };
    })
}
autocomplete();
function autocomplete() {
    var countrytags = ["Afghanistan - AF", "Akrotiri Sovereign Base Area - AX", "Albania - AL", "Algeria - AG", "American Samoa - AQ", "Andorra - AN", "Angola - AO", "Anguilla - AV", "Antarctica - AY", "Antigua and Barbuda - AC", "Argentina - AR", "Armenia - AM", "Aruba - AA", "Ashmore and Cartier Islands - AT", "Australia - AS", "Austria - AU", "Azerbaijan - AJ", "Bahamas, The - BF", "Bahrain - BA", "Baker Island - FQ", "Bangladesh - BG", "Barbados - BB", "Bassas da India - BS", "Belarus - BO", "Belgium - BE", "Belize - BH", "Benin - BN", "Bermuda - BD", "Bhutan - BT", "Bolivia - BL", "Bosnia-Herzegovina - BK", "Botswana - BC", "Bouvet Island - BV", "Brazil - BR", "British Indian Ocean Territory - IO", "British Virgin Islands - VI", "Brunei - BX", "Bulgaria - BU", "Burkina Faso - UV", "Burundi - BY", "Cambodia - CB", "Cameroon - CM", "Canada - CA", "Cape Verde - CV", "Cayman Islands - CJ", "Central African Republic - CT", "Chad - CD", "Chile - CI", "China - CH", "Christmas Island - KT", "Clipperton Island - IP", "Cocos Keeling Islands - CK", "Colombia - CO", "Comoros - CN", "Congo - CF", "Cook Islands - CW", "Coral Sea Islands - CR", "Costa Rica - CS", "Cote dIvoire - IV", "Croatia - HR", "Cuba - CU", "Cyprus - CY", "Czech Republic - EZ", "Czechoslovakia - LO", "Democratic Republic of the Congo - CG", "Denmark - DA", "Dhekelia Sovereign Base Area - DX", "Djibouti - DJ", "Dominica - DO", "Dominican Republic - DR", "East Timor - TT", "Ecuador - EC", "Egypt - EG", "El Salvador - ES", "Equatorial Guinea - GV", "Equatorial Guinea - EK", "Eritrea - ER", "Estonia - EN", "Ethiopia - ET", "Etorofu, Habomai, Kunashiri and Shikotan Islands - PJ", "Europa Island - EU", "Falkland Islands Islas Malvinas - FK", "Faroe Islands - FO", "Fiji - FJ", "Finland - FI", "France - FR", "French Guiana - FG", "French Polynesia - FP", "French Southern and Antarctic Lands - FS", "Gabon - GB", "Gambia - GA", "Gaza Strip - GZ", "Georgia - GG", "Germany - GM", "Ghana - GH", "Gibraltar - GI", "Glorioso Islands - GO", "Greece - GR", "Greenland - GL", "Grenada - GJ", "Guadeloupe - GP", "Guam - GQ", "Guatemala - GT", "Guernsey - GK", "Guinea-Bissau - PU", "Guyana - GY", "Haiti - HA", "Heard Island and McDonald Islands - HM", "Honduras - HO", "Hong Kong - HK", "Howland Island - HQ", "Hungary - HU", "Iceland - IC", "India - IN", "Indonesia - ID", "Iran - IR", "Iraq - IZ", "Ireland - EI", "Isle of Man - IM", "Israel - IS", "Italy - IT", "Jamaica - JM", "Jan Mayen - JN", "Japan - JA", "Jarvis Island - DQ", "Jersey - JE", "Johnston Atoll - JQ", "Jordan - JO", "Juan de Nova Island - JU", "Kazakhstan - KZ", "Kenya - KE", "Kingman Reef - KQ", "Kiribati - KR", "Kosovo - KV", "Kuwait - KU", "Kyrgyzstan - KG", "Laos - LA", "Latvia - LG", "Lebanon - LE", "Lesotho - LT", "Liberia - LI", "Libya - LY", "Liechtenstein - LS", "Lithuania - LH", "Luxembourg - LU", "Macau - MC", "Macedonia - MK", "Madagascar - MA", "Malawi - MI", "Malaysia - MY", "Maldives - MV", "Mali - ML", "Malta - MT", "Marshall Islands - RM", "Martinique - MB", "Mauritania - MR", "Mauritius - MP", "Mayotte - MF", "Mexico - MX", "Micronesia - FM", "Midway Islands - MQ", "Moldova - MD", "Monaco - MN", "Mongolia - MG", "Montenegro - MJ", "Montserrat - MH", "Morocco - MO", "Mozambique - MZ", "Myanmar - BM", "Namibia - WA", "Nauru - NR", "Navassa Island - BQ", "Nepal - NP", "Netherlands - NL", "Netherlands Antilles - NT", "New Caledonia - NC", "New Zealand - NZ", "Nicaragua - NU", "Niger - NG", "Nigeria - NI", "Niue - NE", "No Mans Land - NM", "Norfolk Island - NF", "North Korea - KN", "Northern Mariana Islands - CQ", "Norway - NO", "Oceans - OS", "Oman - MU", "Pakistan - PK", "Palau - PS", "Palmyra Atoll - LQ", "Panama - PM", "Papua New Guinea - PP", "Paracel Islands - PF", "Paraguay - PA", "Peru - PE", "Philippines - RP", "Pitcairn Islands - PC", "Poland - PL", "Portugal - PO", "Puerto Rico - RQ", "Qatar - QA", "Reunion - RE", "Romania - RO", "Russia - RS", "Rwanda - RW", "Saint Helena - SH", "Saint Kitts and Nevis - SC", "Saint Lucia - ST", "Saint Martin - RN", "Saint Pierre and Miquelon - SB", "Saint Vincent and the Grenadines - VC", "Saint-Barthelemy Island - TB", "Samoa - WS", "San Marino - SM", "Sao Tome and Principe - TP", "Saudi Arabia - SA", "Senegal - SG", "Serbia - RI", "Seychelles - SE", "Sierra Leone - SL", "Singapore - SN", "Slovenia - SI", "Solomon Islands - BP", "Somalia - SO", "South Africa - SF", "South Georgia and the South Sandwich Islands - SX", "South Korea - KS", "South Sudan - OD", "Spain - SP", "Spratly Islands - PG", "Sri Lanka - CE", "Sudan - SU", "Suriname - NS", "Svalbard - SV", "Swaziland - WZ", "Sweden - SW", "Switzerland - SZ", "Syria - SY", "Taiwan - TW", "Tajikistan - TI", "Tanzania - TZ", "Thailand - TH", "Togo - TO", "Tokelau - TL", "Tonga - TN", "Trinidad and Tobago - TD", "Tromelin Island - TE", "Tunisia - TS", "Turkey - TU", "Turkmenistan - TX", "Turks and Caicos Islands - TK", "Tuvalu - TV", "Uganda - UG", "Ukraine - UP", "Undersea Features - UF", "Undesignated Sovereignty - UU", "United Arab Emirates - AE", "United Kingdom - UK", "United States - US", "Uruguay - UY", "Uzbekistan - UZ", "Vanuatu - NH", "Vatican City - VT", "Venezuela - VE", "Vietnam, Democratic Republic of - VM", "Virgin Islands - VQ", "Wake Island - WQ", "Wallis and Futuna - WF", "West Bank - WE", "Western Sahara - WI", "Yemen - YM", "Zambia - ZA", "Zimbabwe - ZI"];
    var languagetags = ["Afrikaans - AFR", "Albanian - SQI", "Arabic - ARA", "Armenian - HYE", "Azerbaijani - AXE", "Bengali - BEN", "Bosnian - BOS", "Bulgarian - BUL", "Catalan - CAT", "Chinese - ZHO", "Croatian - HRV", "Czech - CES", "Danish - DAN", "Dutch - NLD", "Estonian - EST", "Finnish - FIN", "French - FRA", "Galician - GLG", "Georgian - KAT", "German - DEU", "Greek - ELL", "Gujarati - GUJ", "Hebrew - HEB", "Hindi - HIN", "Hungarian - HUN", "Icelandic - ISL", "Indonesian - IND", "Italian - ITA", "Japanese - JPN", "Kannada - KAN", "Kazakh - KAZ", "Korean - KOR", "Latvian - LAV", "Lithuanian - LIT", "Macedonian - MKD", "Malay - MSA", "Malayalam - MAL", "Marathi - MAR", "Mongolian - MON", "Nepali - NEP", "Norwegian - NOR", "NorwegianNynorsk - NNO", "Persian - FAS", "Polish - POL", "Portuguese - POR", "Punjabi - PAN", "Romanian - RON", "Russian - RUS", "Serbian - SRP", "Sinhalese - SIN", "Slovak - SLK", "Slovenian - SLV", "Somali - SOM", "Spanish - SPA", "Swahili - SWA", "Swedish - SWE", "Tamil - TAM", "Telugu - TEL", "Thai - THA", "Tibetan - BOD", "Turkish - TUR", "Ukrainian - UKR", "Urdu - URD", "Vietnamese - VIE"];
   
    var $inputC = $("#countries");
    $inputC.typeahead({
        source: countrytags,
        autoSelect: true
    });
    $inputC.on("change",(function() {
        var current = $inputC.typeahead("getActive");
        if (current) {          
          if (current.toUpperCase() == $inputC.val().toUpperCase()) {
            countryVal = current.slice(-2);
            // getCountryNews(value);
          } 
        } 
      }));  
      var $input = $("#languages");
      $input.typeahead({
          source: languagetags,
          autoSelect: true
      });
      $input.on("change",(function() {
          var current = $input.typeahead("getActive");
          if (current) {            
            if (current.toUpperCase() == $input.val().toUpperCase()) {
              languageVal = current.slice(-3);              
            //   $("body").css({ "opacity": "0.2" });
            //   getLanguageNews(value);            
            } 
          } 
        })); 
}


// document.getElementById("keyword").addEventListener("keyup", searchNewsByKeyword);
// function searchNewsByKeyword() {  
//     var x = document.getElementById("keyword");
//     if (x.value.length >= 5) {
//         urls = ["https://api.gdeltproject.org/api/v2/doc/doc?query=" + x.value + "%20sourcelang:eng&mode=artlist&format=json&maxrecords=75&sort=datedesc",
//         ]
//         async.mapLimit(urls, 1, async function (url) {
//             try {
//                 const response = await fetch(url)
//                 return response.json()
//             } catch (err) {
//                 // console.trace(err);
//             }

//         }, (err, results) => {
//             // if (err) { console.log(err); }
//             arr = []
//             // console.log(results);
//             for (index in results) {
//                 results[index].articles.forEach(item => {
//                     var item_index = arr.findIndex(x => x.link == item.url);
//                     if (item_index === -1) {
//                         arr.push({ "title": item.title, "created": item.seendate, "link": item.url, "source": item.domain, "thumbnail": item.socialimage })
//                     }
//                 });
//             }
//             arrr = arr.sort(function (a, b) {
//                 return b.created - a.created;
//             });
//             $("#searchNews").html(``);
//             $.each(arrr, function (k, v) {
//                 var mDate = v.created.slice(0, 4) + "-" + v.created.slice(4, 6) + "-" + v.created.slice(6, 8)
//                     + " " + v.created.slice(9, 11) + ":" + v.created.slice(11, 13)
//                     + ":" + v.created.slice(13, 15);
//                 var unixtime = Date.parse(mDate);
//                 var currTime = Date.now();
//                 var timediff = Math.round(currTime / 1000 - unixtime / 1000);
//                 if (timediff / 60 / 60 < 1) {
//                     timediff = Math.round(timediff / 60) + " minutes ago";
//                 } else if (Math.round(timediff / 60 / 60) === 1) {
//                     timediff = Math.round(timediff / 60 / 60) + " hour ago";
//                 } else {
//                     timediff = Math.round(timediff / 60 / 60) + " hours ago";
//                 }
//                 try {
//                     var { hostname } = new URL(v.link);
//                     let imgsrc = v.thumbnail ? v.thumbnail : ``
//                     var $listItem = $(`                    
//             <li class="list-group-item border-bottom py-4 bg-light mb-1" style="cursor:pointer">                                        
//                 <div class="d-flex gap-2 w-100 justify-content-between">
//                     <div>
//                         <img src="https://www.google.com/s2/favicons?sz=16&domain=${hostname}" alt="" width="16" height="16" class="rounded-circle flex-shrink-0">                                
//                         <h5 class="mb-0 mt-0 fw-bold">${v.title}</h5> 
//                         <p class="mb-0 mt-1 opacity-50 small">${hostname}, ${timediff}</p>                                                             
//                     </div>
//                     <img src="${imgsrc}" alt="" width="64" height="64" class="flex-shrink-0 sqimg mt-2 rounded">
//                 </div>	
               
//             </li>
//             `);
//                     $listItem.on("click", function (e) {
//                         window.open(v.link, '_blank');
//                     });
//                     $("#searchNews").append($listItem);
//                 } catch (err) {
//                     // console.log(v.link, err);
//                 }
//             });
//             p();
//             $("body").css({ "opacity": "1" });
//             $("body").css({ "cursor": "" });

//         })
//     }
    
// }
