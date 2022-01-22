function onload() {
    const QueryString = window.location.search; 
    const urlParams = new URLSearchParams(QueryString); 
    var url = urlParams.get('url');
    var player = new Playerjs({id:"player", poster:"./Images/BG.jpg", file:url});
}
