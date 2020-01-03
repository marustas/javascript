
//let options ={
//background : 'red',
//width : 165,
//height : 100,
//font : {
//size : '10px',
//color : 'yellow'
// }
//};
//console.log(JSON.parse(JSON.stringify(options));

let inputRUB =document.getElementById('rub'),
    inputUSD = document.getElementById('usd');

inputRUB = addEventListener('input',()=>{
  let request = new XMLHttpRequest();

//request.open(method,url,async,login,pass);

  request.open('GET','js/current.json');
  request.setRequestHeader('Content-Type','application/json; charset=utf-8');
  request.send();
  request.addEventListener('readystatechange',function(){
      if (request.readyState === 4 && request.status == 200){
          let data = JSON.parse(request.response);
          
          inputUSD.value = inputRUB.value/data.usd;
      }
  });
})

