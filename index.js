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
    'it was 2017/2018 okay? :(',
    'uhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    'doing this at 4 am',
    'en vez de caen gays, caen minas :sunglasses:',
    'idk lol',
    'beep beep!',
    'alright thats everything for this'
    'no'
    'I fucked your mom lmao'
    'Do I exist?'
    'Uhh megalovania is a banger'
    'I cummed in a sock before... it was bad.'
];

document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];

document.body.addEventListener('keydown', (key) => {
    if(key.key == "r")
    {
        document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];
    }
});
