let init = function(){
    let images = document.querySelectorAll('.js-image');
    console.log(images);
    for(let i = 0 ; i < images.length ; i++){
        let image = images[i];
        image.onclick = showAnswer;
    }
}
let showAnswer = function(e){
    let image = e.target;

    // console.log(image.dataset.unblur);
    let answer = image.dataset.unblur;
    // console.log(image.id);
    image.src = answer;

    setTimeout(reBlur, 4000 , image);
}
let reBlur = function(image, blurImg){
    // console.log(image);

    let name = image.id;
    console.log(name);
    name = "images/" + "blur" + name + ".jpg";
    console.log(name);
    image.src = name;

}


window.onload = init;