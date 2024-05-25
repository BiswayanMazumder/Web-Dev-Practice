// console.log('Welcome to pritam')
async function getdata(url) {
    let response = await fetch(`${url}`)
    let x = await response.json();
    console.log(x);

}
async function main() {
    console.log('Welcome to spotify')
     let data=await getdata('https://jsonplaceholder.typicode.com/posts')
     console.log(data);
    console.log('Welcome to netfly')
}
main()