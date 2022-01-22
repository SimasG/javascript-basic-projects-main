// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hex = '0123456789ABCDEF'
const button = document.querySelector('.btn');
const colorText = document.querySelector('.color');


// Problems: 
// 1. Something is up with the charAt method -> SOLVED
// 2. Not sure if I'm returning the function result correctly -> SOLVED
// 3. Not sure if I'm nesting the function inside of the event listener correctly -> SOLVED

button.addEventListener('click', () => {

    let result = '#';
    const charactersLength = hex.length;
    for (let i = 0; i < 6; i++) {
        result += hex.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.body.style.backgroundColor = result;
    colorText.innerHTML = result;

})






// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// console.log(makeid(5));