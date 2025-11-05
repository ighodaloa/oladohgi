//QUOTES
//random quotes array (all handselected by me)
const quotes = [
  { quote: "In this world the speaker is more important than their words.", author: "?" },
  { quote: "Your a good man with a good heart and it's hard for a good man to be king.", author: "Black Panther" },
  { quote: "Am I worth it? Did I put enough work in?", author: "Kendrick" },
  { quote: "Don't get burned like cigarette.", author: "Russ" },
  { quote: "Dream big, I'ma get to the top.", author: "Tjay" },
  { quote: "Believe in yourself. Or that's the place to start.", author: "Arther" },
  { quote: "Well, we've made a massive amount of progress in this last year, haven't we? Feels like a long journey. And I must say it's been a pleasure, to watch you mature and grow… But you know, you can never stop learning about yourself.", author: "ST" },
  { quote: "Keep on telling the young bulls grind don't quit cause it's all about timing.", author: "Cee" },
  { quote: "What made me great at some things made me lousy at others.", author: "Lou" },
  { quote: "Be proud of your dreams you should stand and shout.", author: "ST" },
  { quote: "I don't know about you but I value my life. Cause imagine I die.", author: "Cee" },
  { quote: "I know it, I go through it don't show it.", author: "Meek" },
  { quote: "I continue de struggle o, de double my hustle.", author: "Psquare" },
  { quote: "It doesn't cross anybodies mind, that what's happening around them, is unacceptable in the eyes of God.", author: "Drew" },
  { quote: "Gotta kick back sometimes and wonder- how life would've been if I never did take them risks and would I have prospered?", author: "Cee" },
  { quote: "Praise the lord for the peace.", author: "ST" },
  { quote: "Study hard is the best way to thank yourself. If you study hard today, you will enjoy the future.", author: "Nandita Dasgupta" },
  { quote: "Don't cry. Don't despair. Now is not the time for that.", author: "Giyuu Tomioka" },
  { quote: "I have to ignore all the pain in my body. Endure!", author: "Kamado" },
  { quote: "Make them try their luck, my God go win.", author: "Korede Bello" },
  { quote: "One more day.", author: "Brian" },
  { quote: "This is where you've gotta push past your limits. If you don't, then your path ends here.", author: "Yami" },
  { quote: "Wake up in the morning. Hallelujah!", author: "Rema" },
  { quote: "Morals won't ever forget them.", author: "Tjay" },
  { quote: "You are very gentle, I like you for that.", author: "Dad" },
  { quote: "Humanity is greater than status.", author: "?" },
  { quote: "I'll be there in a hurry when you call. Friends are there to catch you when you fall.", author: "Kirk Franklin" },
  { quote: "Grateful for the sh## I got cause I come from a hard life.", author: "Tjay" },
  { quote: "Gotta dominate. That's the only way you gon get to the next level in anything in life.", author: "Deion Sanders" },
  { quote: "Sometimes I'm weird. But it's not sometimes, it's always.", author: "Alexis O'Malley" },
  { quote: "Only way past is through.", author: "?" },
  { quote: "Sick and tired of it all take me far away.", author: "Burna" },
  { quote: "I know what to do.", author: "Aaron Krause" },
  { quote: "So preoccupied with grind and hustle, fight and tussle.", author: "Knucks" },
  { quote: "Came out alive omo me I thank God.", author: "Rema" },
  { quote: "Can't stop shooting cause that only means I stopped trying.", author: "Alexis" },
  { quote: "Need to get myself together I'm a mess.", author: "21" },
  { quote: "I know what's right for me I got a plan to which I'm sticking.", author: "?" },
  { quote: "Who decides what's normal.", author: "Marion Stokes" },
  { quote: "Everybody in life has their own problems, I know for a fact I have mines.", author: "D" },
  { quote: "Hustle is a decision and you can decide to out hustle everyone there.", author: "zer0" },
  { quote: "Padi man, nobody like work. But you must hustle if you want chop.", author: "Ayra" },
  { quote: "Love when I can still laugh through tough times.", author: "D" },
  { quote: "Everybody else is playing chess and your in a field playing monopoly by yourself.", author: "?" },
  { quote: "Lost friends but it's my innocence I miss.", author: "ST" },
  { quote: "At the time, it was bad, it was all in my mind. Cause in hindsight, it could've been worse.", author: "Cee" },
  { quote: "THERE IS NO TOMMOROW.", author: "Apollo Creed" },
  { quote: "There are no shortcuts if there were we would've found them and crammed in more work.", author: "Alexis O'Malley" },
  { quote: "For the sake of someone other than yourself you can exert infinite strength.", author: "Tokoito Yuichiro" },
  { quote: "It is worth taking a hit for someone if it means you will shed less blood.", author: "D" },
  { quote: "F##k all the n##gas, get money. Motto.", author: "TiaCorine" },
  { quote: "Everything won't go to plan that's not how it goes I'm afraid s##t happens.", author: "Cee" },
  { quote: "Drop me in a jungle, tree to tree start swinging like Tarzan.", author: "Cee" },
  { quote: "I can only fabricate the truth so much.", author: "D" },
  { quote: "Have I ever been wrong? I mean like, you know when it counts.", author: "Pigeon mlm" },
  { quote: "Working so hard every night and day. And now we get the pay back. Trying so hard, saving up the paper. Now we get to lay back.", author: "Gwen Stefani" },
  { quote: "Me I dey feel pain, but I move forward and I switch lanes. Because Odogwu no be nickname.", author: "Burna" },
  { quote: "I fell on my face, got up on my own.", author: "Carti" },
  { quote: "If we don't make mistakes we cannot learn what to work on.", author: "Dr. Paula" },
  { quote: "If we are not monsters we're food, and I could never be food.", author: "Sully" },
  { quote: "This is not a DIY project don't try this I'm just fulfilling a promise.", author: "Electroboom" },
  { quote: "Thinking doesn't overcome fear, action does.", author: "?" },
  { quote: "We finally made it let's pop us some bottles.", author: "Baby" },
  { quote: "Couldn't do no shining, cause I had to find me some paper first.", author: "Rod" },
  { quote: "When you feel like giving up, know your close.", author: "ST" },
  { quote: "Collect my tears. You could fill a pool and breaststroke in it.", author: "Cee" },
  { quote: "The tides in the water are shifting. Change is approaching.", author: "D" },
  { quote: "I dun fell off, I dun gave up, I dun jumped back.", author: "Rod" },
  { quote: "Know how it feels to be broke of course. I've been down bad and I've been up town.", author: "Cee" },
  { quote: "I no say e no easy, my brother. But still dey take am easy, my brother. As long as you are breathing, my brother. As long as you no sink inside water.", author: "Burna" },
  { quote: "My work had always taken up a lot of my time. I have more free time now, and over the years I've added a lot of hobbies to my life.", author: "Rick Mercurio" },
  { quote: "Had to give myself my own flowers.", author: "ST" },
  { quote: "I would say I'm finally here, but n##ga I'm trying to heal.", author: "Rod" },
  { quote: "I'm not tryna do this forever, just until i die, and then I quit.", author: "Marty Meierotto" },
  { quote: "I'm not sweet Estella, try as I might. I never was. I'm Cruella, born brilliant, born bad, and a little bit mad. I am not like her. I'm better.", author: "Cruella" },
  { quote: "There was a time where I mistakenly believed society operated the same way.", author: "Kento Nanami" },
  { quote: "I want to live a quiet life.", author: "Kira Yoshikage" },
  { quote: "I hear everything that is said. It don't go over my head.", author: "Cee" },
  { quote: "I talk to myself on my own I'm tapped.", author: "Cee" },
  { quote: "Underdogs with good intentions.", author: "Kimya Dawson" },
  { quote: "A reward for all those times I was stressed.", author: "D" },
  { quote: "Came a long way, still got a long way to go.", author: "Cee" },
  { quote: "That's not the shape of my heart.", author: "Sting" },
  { quote: "Just got chased in the whip. I'm good, sang in the car to I'm a survivor.", author: "ST" },
  { quote: "Free roam is nice, but I think I'm gonna miss story mode.", author: "?" },
  { quote: "Make you dey listen well because I no fit shout.", author: "Burna" },
  { quote: "I feel like if your not delusional, you will not get far in life.", author: "Ms London" },
  { quote: "\"Neuroplasticity\"", author: "Scientists" },
  { quote: "The day I don't show up with my half that's the day we'll talk about closing this place.", author: "Jimmy McGill" },
  { quote: "Don't get caught for pus, don't die for nyash.", author: "ST" },
  { quote: "If you never allow yourself to experience the discomfort of failure, you may miss out on the opportunity to find the autonomy, and the intrinsic motivation necessary to be truly happy.", author: "Daisy Day" },
  { quote: "Embrace what you don't know. Because you might discover that you can trust yourself in ways that you never thought were possible.", author: "Daisy Day" },
  { quote: "I've been becoming impatient, still I sit back and feel ease cause of patience. I think in time ima feel like I made it.", author: "D" },
  { quote: "Tough time don't last, tough people do.", author: "?" },
  { quote: "Where do you see this ending? With me on top, like always.", author: "Saul Goodman" },
  { quote: "In mathematics it's called a given.", author: "Amrithya" },
  { quote: "It was plan A now it's plan B.", author: "Young Dizz" },
  { quote: "Why tap? Go sleep, go sleep.", author: "Khabib" },
  { quote: "This s##t doesn't even give me any dopamine I just can't stop.", author: "Quinten" },
  { quote: "My life in the hood soon comes to an end. B###h it's the end of the beginning.", author: "cench" },
  { quote: "I couldn't see light at the end of the tunnel but I believed.", author: "ST" },
  { quote: "Try everything once. if it sticks, it sticks. If it doesn't, at least you tried.", author: "?" },
  { quote: "Don't fumble tryna 40 chess it.", author: "Agent" },
  { quote: "Cree-cree-creep in the changin' room at school and teef from the kids that are privileged.", author: "Cee" },
  { quote: "What could only be described as a masterclass in delusional optimism.", author: "Officially Opinionated" },
  { quote: "On a mission full aware of all the odds.", author: "Officially Opinionated" },
  { quote: "More time I'm emotionless, It's been a while now since I bust a tear.", author: "Cee" },
  { quote: "My girl ain't calm. She just numb to emotion, it's hard to affect her.", author: "ST" },
  { quote: "I accept say I change, me I no be same guy.", author: "Bado" },
  { quote: "I don't even care about the prize, I just wanna be #1.", author: "d" },
  { quote: "I've got paranoia there too much Jake's, I'm not going through this again.", author: "Cench" },
  { quote: "Back then it was hard for me, these days I'm getting it easily.", author: "Cench" },
  { quote: "Can't lie, man I ain't the same brudda that I once was.", author: "Skepta" },
  { quote: "And I want it, I want my life so bad.", author: "Sia" },
  { quote: "I had to work so hard. I really wanted the jobs that I wanted, and I wouldn't take no for an answer in the sweetest way.", author: "Lea Salonga" },
  { quote: "I'm not interested in status. I live alone.", author: "Spider Rose" },
  { quote: "I wouldn't even say I get a sense of enjoyment, it's almost like working.", author: "P" },
  { quote: "Get in your bag and get out your feelings. Show me what your worth.", author: "Nemzzz" },
  { quote: "Our main objective is to provide Wi-fi and that's all :)", author: "Harshavardhan" },
  { quote: "The world has been gaslighting me for the past few years now, soon I will prove it.", author: "D" },
  { quote: "You just got dunked on, it can't be your park.", author: "MK" },
  { quote: "Your fake fangs are only as sharp as they are thanks to years of training. I've possessed Godlike strength from the moment I was born.", author: "Moz" },
  { quote: "Hyoga! Damn you! To hell with you and your spear of sorcery!", author: "Moz" },
  { quote: "People think say na swag but I was loosing my mind.", author: "Bado" },
  { quote: "Just a warning: this lab is intense.", author: "Jeremy" },
  { quote: "I didn't want the life my parents picket out for me. I rebelled for the sake of rebelling.", author: "Yutaro" },
  { quote: "If I can't face what I'm facing now, I can't see a future where I'm stronger!", author: "Gene" },
  { quote: "It was time syou barked and I ain't even know why you was barking, but I just knew it meant something.", author: "Uzi" },
  { quote: "I havent been to sleep in 96 hours.", author: "hairmeat" }
];

//select a random quote
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

//display in console (debugging)
console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);

//inject into HTML
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
  document.getElementById("author").textContent = `- ${randomQuote.author}`;
});


//IMAGES
//random quotes array (memes pulled from reddit)
fetch("https://meme-api.com/gimme")
  .then(res => res.json())
  .then(data => {
    const img = document.getElementById("meme-img");
    img.src = data.url;
});


  //"Reach Me!"
const toggle = document.getElementById('contactToggle');
const dropdown = document.getElementById('contactDropdown');
const closeButton = document.getElementById('closeButton');
const mobileMode = document.getElementById('mobileMode');

// Toggle dropdown only in mobile
toggle.addEventListener('click', (e) => {
  if (window.getComputedStyle(mobileMode).display === 'block') {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  }
});
// If the user toggles dropdown and leaves mobile mode before exiting out of the dropdown. We need to put an end to that dropdown...
window.addEventListener('resize', () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    console.log('Mobile mode!');
  } else {
    console.log('Desktop mode!');
    
    // When switching to desktop, hide the mobile dropdown if it's open
    if (window.getComputedStyle(dropdown).display === 'flex') {
      dropdown.style.display = 'none';
    }
  }
});

// Close dropdown on clicking close button
closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.style.display = 'none';
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  dropdown.style.display = 'none';
});