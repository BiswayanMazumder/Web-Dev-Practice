console.log('Welcome to logged in page')
const letters = '0123456789ABCDEF';
let color = '#';
async function getRandomColor() {
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
async function main() {
    await getRandomColor();
    console.log(color);
    let rightside=document.querySelector('.firstrightpart')
    let appbar=document.querySelector('.appbar')
    appbar.style.backgroundColor=color;
    rightside.style.backgroundColor=color;
}
main();