


const container = document.querySelector('.info');

const  loader1 =  document.querySelector('#loader')

console.log(loader1)




 async function get  ()  {

  container.innerHTML = '';
  loader1.style.display = 'block';
  const request = await fetch('https://meme-api.com/gimme');
  const respond = await request.json();
  loader1.style.display = 'none';

  console.log(respond )
  buidlDom(respond.url, respond.title)
};

get();


const buidlDom = (img, text) => {

  container.innerHTML = ` 
  <div>
  <img src="${img}" alt="" >
    <p>${text}</p>
    </div>
     `

}


// const holder = document.querySelector('.text');
// const loader = document.querySelector('.loader');



function p1 () {
  return new Promise ( (resolve, reject) => {

    let condition = true;

    setTimeout( () => {
      if(condition) {
       resolve('Data Recieved')
      } else {
        reject('Data Rejected')
      }
    }, 5000)
  
  })
}

// async  function check () {
 
//   // holder.innerHTML = '' ;
//   // loader.style.display = 'block';
//   // const get =  await p1().then( data => {
//   //  holder.innerHTML = data;
//   // }).catch( err => {
//   //  holder.innerHTML = err;
//   //  console.log(err)
//   // })

//   // loader.style.display = 'none';

//   try {
//     holder.innerHTML = '' ;
//     loader.style.display = 'block';
//     const get =  await p1()
//     holder.innerHTML = get;

//   } catch (err) {
//     holder.innerHTML = err
//   }
//   loader.style.display = 'none';



// }




