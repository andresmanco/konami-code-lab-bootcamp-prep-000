const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var index = 0;

function init() {
  // your code here
  const body = document.querySelector('body')

  body.addEventListener('keydown', function(e){
    console.log("apretaste una tecla")
<<<<<<< HEAD
    var k = e.key;
    
=======
    var k = e.k;
    console.log(k)
    console.log(codes[index])
>>>>>>> d238728ed6704090beafa6a5588a925b2d376cf4
    if(k === codes[index]){
      index++;
      console.log('primer IF')
      if(index === codes.length){
        console.log("Congratulations, WUJUUU!!!")
        index = 0;
      }
    }
    else{
      console.log('index a 0')
      index = 0;
    }
  })
}
