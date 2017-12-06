/*function runSearch(){
	var search = document.getElementById('searchBox').value;
$.ajax({
	type:"GET",
	url : "https://www.googleapis.com/books/v1/volumes?q="+search,
	success : function(dataWeGetFromTheApi){
     //console.log(dataWeGetFromTheApi)
     var searchArray = dataWeGetFromTheApi.items
     //
     for(i = 0; i<searchArray.length; i++){
     	var displayDiv = document.createElement('div')
     	var displayText = document.createTextNode(searchArray[i].volumeInfo.title)

     	displayDiv.appendChild(displayText)
     	document.getElementById('result').appendChild(displayDiv);
     }

	}
})
}
document.getElementById('searchBtn').addEventListener('click', runSearch, false)*/function bookSearch(){
     var search = document.getElementById("searchBox").value;
     document.getElementById("results").innerHTML = "";

     $.ajax({
    url : "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType : "json",
    type : 'GET',

    success: function(data) {
               // console.log(data);

         for(var i = 0; i < data.items.length; i++){
               var jdata = data.items[i].volumeInfo;

               var newColSm4 = document.createElement('div');
               var newImg    = document.createElement('img');
               var newH2     = document.createElement('h2');
               var newH3     = document.createElement('h3');
               var newH4     = document.createElement('h4');
               var newAnchor = document.createElement('a');

               newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item';
               newAnchor.className = 'btn btn-primary';

               newH2.innerText = jdata.title;
               newAnchor.innerText = 'Learn More';

               newAnchor.href = jdata.infoLink;
               newAnchor.setAttribute('target', '_blank');

               if(jdata.imageLinks) {
                    newImg.src = jdata.imageLinks.thumbnail;
               } else{
                    newImg.src = 'img/nobook.jpg';
               }
               };

               if(jdata.publishedDate){
                    newH4.innerText = jdata.publishedDate;
               }
                else {
                    newH4.innerText = 'no publish date found';
               }

               if(jdata.authors) {
                    newH3.innerText = jdata.authors[0];
               } else {
                    newH3.innerText = 'no author found';
               };

               newColSm4.appendChild(newImg);
               newColSm4.appendChild(newH2);
               newColSm4.appendChild(newH3);
               newColSm4.appendChild(newH4);
               newColSm4.appendChild(newAnchor);

               var results = document.getElementById("results");
               results.appendChild(newColSm4);
         }
    });
};
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', bookSearch, false);
