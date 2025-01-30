const textArea= document.querySelector('.quote').querySelector('.textArea');
const btn = document.getElementById('newQuote');
const person = document.querySelector('.person');

const quotations = [{quote: `You must be the change you wish to see in the world.`, person: `Mahatma Gandhi`},
{quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier.`, person: `Mother Teresa`},
{quote: `The only thing we have to fear is fear itself.`, person: `Franklin D. Roosevelt`},
{quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`, person: `Martin Luther King Jr.`},
{quote: `Do one thing every day that scares you.`, person: `Eleanor Roosevelt`},
{quote: `Well done is better than well said.`, person: `Benjamin Franklin`},
{quote: `The best and most beautiful things in the world cannot be seen or even touched`, person: ` they must be felt with the heart.`, person: `Helen Keller`},
{quote: `It is during our darkest moments that we must focus to see the light.`, person: `Aristotle`},
{quote: `Do not go where the path may lead, go instead where there is no path and leave a trail.`, person: `Ralph Waldo Emerson`},
{quote: `Be yourself; everyone else is already taken.`, person: `Oscar Wilde`},
{quote: `You will face many defeats in life, but never let yourself be defeated.` , person: `Maya Angelou`},
{quote: `Go confidently in the direction of your dreams! Live the life you've imagined.` , person: `Henry David Thoreau`},
{quote: `In the end, it's not the years in your life that count. It's the life in your years.` , person: `Abraham Lincoln`},
{quote: `Never let the fear of striking out keep you from playing the game.` , person: `Babe Ruth`},
{quote: `In this life we cannot do great things. We can only do small things with great love.` , person: `Mother Teresa`},
{quote: `Many of life's failures are people who did not realize how close they were to success when they gave up.` , person: `Thomas A. Edison`},
{quote: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.` , person: `Dr. Seuss`},{quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.` , person: `Martin Luther King Jr`},
{quote: `Well done is better than well said.` , person: `Benjamin Franklin`},
{quote: `Do one thing every day that scares you.` , person: `Eleanor Roosevelt`},
{quote: `Be yourself; everyone else is already taken.` , person: `Oscar Wilde`},
{quote: `It is during our darkest moments that we must focus to see the light.` , person: `Aristotle`}];

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotations.length);
    textArea.innerText=quotations[random].quote;
    person.innerText=quotations[random].person;
})