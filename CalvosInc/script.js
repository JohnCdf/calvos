for( i = 0; i < latestlist.length; i++ ) {
    title = "<h1>"+latestlist[i].title+"</h1><hr/>";
    img = "<img src='" + latestlist[i].imagesrc+"'/>";
    desc = "<p>"+latestlist[i].desc+"</p>";

    view.cardpush(title,img,desc)
}


function returnCarpictures(){
    return carPictures;
}
