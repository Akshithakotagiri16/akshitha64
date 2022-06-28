async function display(){
    const url=" https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid={243433539869b67b09918c0e8b63e8af}";
    const response=await fetch(url);
    var data = await response.json();
    return Promise.resolve(data);
}
display().then(function(data){
    console.log(data)
    let{results}=
    result.forEach(element =>{
        let{title,imDbRating}=element;
        console.log("movie name is"+title+"rating"+imDbRating)
    })
})