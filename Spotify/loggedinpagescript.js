console.log('Welcome to logged in page')
const letters = '0123456789ABCDEF';
let color = '#';
let profilepic=document.querySelector('.profilepicture')
async function getRandomColor() {
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 18)];
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
profilepic.innerHTML+='<img src="https://source.unsplash.com/random/30x30?sig=3" alt="ProfilePicture" class="profilepicture" height="20px" width="20px" style="position: relative;justify-content: center;text-align: center;top: 22%;left: 22%;border-radius: 50%;">'