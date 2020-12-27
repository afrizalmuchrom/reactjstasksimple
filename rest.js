let pesanNasiGoreng = new Promise(function(resolve, reject){
    setTimeout(() => reject('nasi goreng berhasil dibuat'), 3000)
})

pesanNasiGoreng.catch(result => console.log('hasil '+ result))

let taskarr = ['ini','itu','ono'];
  
taskarr.map(el => {
  console.log(el);
})