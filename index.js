var randomstuff = [
    'yeah another update sorry',
    'imagine having to update your page',
    'big update???',
    'i have to rewrite everything...',
    'i need help',
    'not really',
    'gay luigi',
    'version 3.0',
    'i should add more stuff',
    'maybe im adding repo histories',
    'friends??',
    'balls',
    'your mom was here',
    'yo monika do be thicc, would bang ngl',
    'what else do i put here',
    'my past history?',
    'i started with roblox exploits lol',
    'it was 2017/18 okay? :(',
    'uhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    'doing this at 4 am',
    'en vez de caen gays, caen minas :sunglasses:',
    'idk lol',
    'beep beep!',
    'alright thats everything for this'
];

document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];

document.body.addEventListener('keydown', (key) => {
    if(key.key == "r")
    {
        document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];
    }
});
