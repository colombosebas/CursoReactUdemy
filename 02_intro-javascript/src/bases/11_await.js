// const getImagenPromesa = () => new Promise((resolve) => resolve('htpps://asdasdasdasdasd'))
// getImagenPromesa().then(console.log);

const getImage = async() => {
    try{
        const apiKey = '1tSLujvNvQMzEBQnDO29W0Gtc4LKNsjh';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    catch(error){
        console.error(error)
    }
}
getImage();
