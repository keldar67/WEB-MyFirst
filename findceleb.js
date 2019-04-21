

function getWikiList(){
    fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=John%20Smith")
    .then(function(resp) 
        {
            console.log(resp);
            return resp.json();
        }
    )
    .then(function(data) 
        {
            console.log(data)
        }
    );
}

getWikiList()