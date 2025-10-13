//QUOTES
//random quotes array (all handselected by me)
const quotes = [
  { quote: "In this world the speaker is more important than their words.", author: "?" },
  { quote: "And I'm working hard I be up while everybody sleep.", author: "Tjay" },
  { quote: "Your a good man with a good heart and it's hard for a good man to be king.", author: "Black Panther" },
  { quote: "Am I worth it? Did I put enough work in?", author: "Kendrick" },
  { quote: "And I'm so dizzy, don't know what hit me, but I'll be alright.", author: "J. Legend" },
  { quote: "My heads underwater, but I'm breathing fine.", author: "J. Legend" },
  { quote: "Don't get burned like cigarette.", author: "Russ" },
  { quote: "Dream big, I'ma get to the top.", author: "Tjay" },
  { quote: "Y'all ain't think I would get what I got. But I stayed true to myself. No losing myself. Improving my self. I'm on the road to the riches.", author: "Tjay" },
  { quote: "Believe in yourself. Or that's the place to start.", author: "Arther" },
  { quote: "Cash in and cash out. I am not looking for clout. I knew I would figure it out. I took the millionaire route.", author: "Wunna" },
  { quote: "They tried to set me up. They tried to get in my head and stuff.", author: "Lee" },
  { quote: "Well, we've made a massive amount of progress in this last year, haven't we? Feels like a long journey. And I must say it's been a pleasure, to watch you mature and grow… But you know, you can never stop learning about yourself.", author: "ST" },
  { quote: "I was down bad and they asked how I am I got up like a man and I said I'm alright.", author: "Cee" },
  { quote: "I met a lot of these rappers. And, and we ain't got nothin in common.", author: "Cee" },
  { quote: "Keep on telling the young bulls grind don't quit cause it's all about timing.", author: "Cee" },
  { quote: "And I know it's hard to find a way. But your bound to see brighter days.", author: "Rod" },
  { quote: "What made me great at some things made me lousy at others.", author: "Lou" },
  { quote: "Be proud of your dreams you should stand and shout.", author: "ST" },
  { quote: "I don't know about you but I value my life. Cause imagine I die.", author: "Cee" },
  { quote: "I know it, I go through it don't show it.", author: "Meek" },
  { quote: "I just wanna dance under the sunset, make nobody stop my enjoyment.", author: "Joeboy" },
  { quote: "I continue de struggle o, de double my hustle", author: "Pquare" },
  { quote: "It doesn't cross anybodies mind, that what's happening around them, is unacceptable in the eyes of God.", author: "Drew" },
  { quote: "Gotta kick back sometimes and wonder- how life would've been if I never did take them risks and would I have prospered?", author: "Cee" },
  { quote: "Praise the lord for the peace", author: "ST" },
  { quote: "Study hard is the best way to thank yourself. If you study hard today, you will enjoy the future.", author: "Nandita Dasgupta" },
  { quote: "Don't cry. Don't despair. Now is not the time for that.", author: "Giyuu Tomioka" },
  { quote: "For the longest time, I never understood what was so great about some dude walking on a rock. Cause in reality, the rockets are launched and flown by scientists and engineers.", author: "Rikiel" },
  { quote: "Almost there don't give up now", author: "Rihanna" },
  { quote: "Ohhhhhh God, don't let me go down, don't let me go down", author: "Burna" },
  { quote: "I have to ignore all the pain in my body. Endure!", author: "Kamado" },
  { quote: "Everything could change, depends on what you do today. You gotta live with each decision that you choose to make", author: "Polo" },
  { quote: "Make them try their luck, my God go win.", author: "Korede Bello" },
  { quote: "With all the drive in the world swear you still need gas.", author: "Big Sean" },
  { quote: "As I've gotten older, I've realized what separates good from great. It's how bad they want it", author: "D" },
  { quote: "You go bow for the result o", author: "Burna" },
  { quote: "Chop life. No let life chop you", author: "?" },
  { quote: "One more day", author: "Brian" },
  { quote: "This is where you've gotta push past your limits. If you don't, then your path ends here", author: "Yami" },
  { quote: "Wake up in the morning. Hallelujah!", author: "Rema" },
  { quote: "I swear I not go dull", author: "Asake" },
  { quote: "Morals won't ever forget them", author: "Tjay" },
  { quote: "Told my n###as just ten toes, stand tall yeah", author: "a boogie" },
  { quote: "You are very gentle, I like you for that", author: "Dad" },
  { quote: "Dagonteee Dagontee, Dangonte still de find money o", author: "Burna" },
  { quote: "Humanity is greater than status", author: "?" },
  { quote: "Stay in my lane play the game how the game go", author: "Rod" },
  { quote: "Na everybody go chop breakfast", author: "Burna" },
  { quote: "Who I be to come de sleep", author: "Burna" },
  { quote: "I got sisters and brothers to feed. I ain't going out like no idiot, I'm a OG", author: "Thugga" },
  { quote: "F##k all this fame. I got trauma inside of my brain", author: "Tjay" },
  { quote: "Never gave a f###, I got me so I don't need them", author: "Rod" },
  { quote: "They want me dead or alive, I'm just tryna survive", author: "Jazz Cartier" },
  { quote: "I'll be there in a hurry when you call. Friends are there to catch you when you fall", author: "Kirk Franklin" },
  { quote: "Grateful for the sh## I got cause I come from a hard life", author: "Tjay" },
  { quote: "Thank God we ain't on no T-shirts", author: "Creek Boyz" },
  { quote: "Gotta dominate. That's the only way you gon get to the next level in anything in life", author: "Deion Sanders" },
  { quote: "Sometimes I'm weird. But it's not sometimes, it's always.", author: "Alexis O'Malley" },
  { quote: "Only way past is through", author: "?" },
  { quote: "Man go fight for nonsense", author: "Burna" },
  { quote: "Sick and tired of it all take me far away", author: "Burna" },
  { quote: "Can't be simple minded anymore or drown I gotta swim", author: "Lee" },
  { quote: "I know what to do.", author: "Aaron Krause" },
  { quote: "So preoccupied with grind and hustle, fight and tussle.", author: "Knucks" },
  { quote: "A lot of n###as b##ch made, stay in they feelings.", author: "Superstar Pride" },
  { quote: "When I was tryna work, n###as never tried to turn up. But when it's time to turn up, everybody turns up.", author: "ST" },
  { quote: "Came out alive omo me I thank God", author: "Rema" },
  { quote: "Can't worry about the past too much because we always tryna move forward in life. At every step we tryna just go to the next day", author: "?" },
  { quote: "Can't stop shooting cause that only means I stopped trying", author: "Alexis" },
  { quote: "If your not cheating you're not trying", author: "Eddie Guerrero" },
  { quote: "Can get my feelings hurt today, I won't give a f### tommorow", author: "Glorilla" },
  { quote: "Need to get myself together I'm a mess", author: "21" },
  { quote: "You have to outwork everybody", author: "D" },
  { quote: "I know what's right for me I got a plan to which I'm sticking", author: "?" },
  { quote: "Who decides what's normal", author: "Marion Stokes" },
  { quote: "Everybody in life has their own problems, I know for a fact I have mines", author: "D" },
  { quote: "Hustle is a decision and you can decide to out hustle everyone there.", author: "zer0" },
  { quote: "Keep it real I don't f##k with y'all lil n###as, I can't even fake it", author: "baby" },
  { quote: "Padi man, nobody like work. But you must hustle if you want chop", author: "Ayra" },
  { quote: "Love when I can still laugh through tough times", author: "D" },
  { quote: "Everybody else is playing chess and your in a field playing monopoly by yourself", author: "?" },
  { quote: "I feel like I laugh too much for someone who's not in a position to be laughing", author: "D" },
  { quote: "Lost friends but it's my innocence I miss", author: "ST" },
  { quote: "Broke people should never laugh", author: "Nicki" },
  { quote: "At the time, it was bad, it was all in my mind. Cause in hindsight, it could've been worse.", author: "Cee" },
  { quote: "I don't think that them man there serious", author: "Cee" },
  { quote: "A man stands up for himself, but a stronger man stands up for others", author: "?" },
  { quote: "THERE IS NO TOMMOROW", author: "Apollo Creed" },
  { quote: "What happens when you get hit so hard, that you question your capability to keep on pushing? To God be the glory you gathered enough courage not to quit. But in the blink of eye, you got hit again. Only difference, it was 10x times harder. What happens next?", author: "D" },
  { quote: "There are no shortcuts if there were we would've found them and crammed in more work", author: "O'Malley" },
  { quote: "Someone is working harder than you", author: "?" },
  { quote: "For the sake of someone other than yourself you can exert infinite strength.", author: "Tokoito Yuichiro" },
  { quote: "It ain't personal, if it's buisness. And that's why we ain't showing emotion.", author: "Cee" },
  { quote: "I am a tree standing tall in the sea, forever maintaining my peace.", author: "D" },
  { quote: "It is worth taking a hit for someone if it means you will shed less blood.", author: "D" },
  { quote: "The f##k they gon say now", author: "Ice" },
  { quote: "F##k all the n# #gas, get money. Motto", author: "TiaCorine" },
  { quote: "Everything won't go to plan that's not how it goes I'm afraid s##t happens", author: "Cee" },
  { quote: "Drop me in a jungle, tree to tree start swinging like Tarzan", author: "Cee" },
  { quote: "I got that dog in me for real. And it's gonna come out when it needs to come out", author: "Scoot Henderson" },
  { quote: "I'm tryna shake sh##", author: "D" },
  { quote: "I can only fabricate the truth so much", author: "D" },
  { quote: "Have I ever been wrong? I mean like, you know when it counts.", author: "Pigeon mlm" },
  { quote: "Working so hard every night and day And now we get the pay back. Trying so hard, saving up the paper Now we get to lay back.", author: "?" },
  { quote: "When things bitter, she dey hang on. When things better, she dey thank God.", author: "Omah Lay" },
  {
    quote: `D: Sophomore year, that junk crazy. Before you know it we gonna be seniors."\nIfe: And that's gonna be the end of it.`,
    author: "Ife"
  },
  { quote: "Me I dey feel pain, but I move forward and I switch lanes. Because Odogwu no be nickname", author: "Burna" },
  { quote: "I no go give into the pressure", author: "Joeboy" },
  { quote: "I fell on my face, got up on my own", author: "Carti" },
  { quote: "Oh to be stoic, to be resilient.", author: "D" },
  { quote: "Struggling what made us, hustling what saved us.", author: "Rod" },
  { quote: "If we don't make mistakes we cannot learn what to work on", author: "Dr. Paula" },
  { quote: "Fear what people think, if I'm happy might keep it quiet.", author: "D" },
  { quote: "If we are not monsters we're food, and I could never be food.", author: "Sully" },
  { quote: "Been doubted so many times in my life, sometimes I surprise myself", author: "Knucks" },
  { quote: "This is not a DIY project don't try this I'm just fulfilling a promise", author: "Electroboom" },
  { quote: "Thinking doesn't overcome fear, action does", author: "?" },
  { quote: "We finally made it let's pop us some bottles", author: "Baby" },
  { quote: "You cross the finish line and taste victory… Do I regret that my hands tasted it first? Then my knees second. I'm on my knees shedding tears cause I been f##ked every year never knew if I would ever even make it", author: "D" },
  { quote: "Couldn't do no shining, cause I had to find me some paper first.", author: "Rod" },
  { quote: "When you feel like giving up, know your close.", author: "ST" },
  { quote: "I made that mistake and that's on me. I just gotta own up to it like a f##king man", author: "D" },
  { quote: "Collect my tears. You could fill a pool and breaststroke in it", author: "Cee" },
  { quote: "The tides in the water are shifting. Change is approaching", author: "D" },
  { quote: "I dun fell off, I dun gave up, I dun jumped back", author: "Rod" },
  { quote: "Know how it feels to be broke of course. I've been down bad and I've been up town.", author: "Cee" },
  { quote: "Weight of the world on my shoulders I kept my head up", author: "DaBaby" },
  { quote: "I no say e no easy, my brother. But still dey take am easy, my brother. As long as you are breathing, my brother. As long as you no sink inside water", author: "Burna" },
  { quote: "My work had always taken up a lot of my time. I have more free time now, and over the years I've added a lot of hobbies to my life.", author: "?" },
  { quote: "Keep it private till it's permanent", author: "?" },
  { quote: "Had to give myself my own flowers", author: "ST" },
  { quote: "I would say I'm finally here, but n##ga I'm trying to heal", author: "Rod" },
  { quote: "I'm not tryna do this forever, just until i die, and then I quit.", author: "Marty Meierotto" },
  { quote: "I'm not sweet Estella, try as I might. I never was. I'm Cruella, born brilliant, born bad, and a little bit mad. I am not like her. I'm better.", author: "Cruella" },
  { quote: "There was a time where I mistakenly believed society operated the same way", author: "Kento Nanami" },
  { quote: "I'm with Lockheed Martin. That is the one I want to hear", author: "Daddy" },
  { quote: "I fought through it all. But that s##t hurt me severely", author: "Polo G" },
  { quote: "I'll be hanging on like I'm Mufasa", author: "Kidd lee" },
  { quote: "I'm finding out what being royal's all about", author: "Sofia" },
  { quote: "I want to live a quiet life", author: "Kira Yoshikage" },
  { quote: "If I keep it a buck, there was times when I thought that I wouldn't survive", author: "Damzz" },
  { quote: "BS in CS, truth is the transcript ain't never seen em.", author: "D" },
  { quote: "BS in CS, wish the transcript never seen them.", author: "?" },
  { quote: "Starting selling white, we won't sell it no more", author: "Meek" },
  { quote: "I hear everything that is said. It don't go over my head", author: "Cee" },
  { quote: "Ruby grew up on her own she don't have a problem with being alone", author: "Cee" },
  { quote: "I talk to myself on my own I'm tapped", author: "Cee" },
  { quote: "Underdogs with good intentions", author: "Kimya Dawson" },
  { quote: "And still, I rise", author: "Maya Angelou" },
  { quote: "Whatever you do today, you'll have to sleep with tonight.", author: "Aaron Tippin" },
  { quote: "A reward for all those times I was stressed.", author: "D" },
  { quote: "Came a long way, still got a long way to go", author: "Cee" },
  { quote: "That's not the shape of my heart", author: "Sting" },
  { quote: "Just got chased in the whip. I'm good, sang in the car to I'm a survivor", author: "ST" },
  { quote: "Free roam is nice, but I think I'm gonna miss story mode.", author: "?" },
  { quote: "Make you dey listen well because I no fit shout", author: "Burna" },
  { quote: "I feel like if your not delusional, you will not get far in life", author: "Ms London" },
  { quote: "Neuroplasticity", author: "Scientists" },
  { quote: "The day I don't show up with my half that's the day we'll talk about closing this place", author: "Jimmy McGill" },
  { quote: "Don't get caught for pus, don't die for nyash", author: "ST" },
  { quote: "If you never allow yourself to experience the discomfort of failure, you may miss out on the opportunity to find the autonomy, and the intrinsic motivation necessary to be truly happy.", author: "Daisy Day" },
  { quote: "Embrace what you don't know. Because you might discover that you can trust yourself in ways that you never thought were possible", author: "Daisy Day" },
  { quote: "I've been becoming impatient, still I sit back and feel ease cause of patience. I think in time ima feel like I made it.", author: "D" },
  { quote: "Tough time don't last, tough people do", author: "?" },
  { quote: "Where do you see this ending? With me on top, like always", author: "Saul Goodman" },
  { quote: "Sometimes you gotta defy the odds and you can only do that by trusting your gut", author: "Polo g" },
  { quote: "The nail that sticks out gets hammered down", author: "?" },
  { quote: "In mathematics it's called a given", author: "Amrithya" },
  { quote: "It was plan A now it's plan B", author: "Young Dizz" },
  { quote: "Inside a cage there's nowhere to run, and I have to go forward.", author: "Makunouchi" },
  { quote: "We don't say that we going through s##t but this life is a game and I'm flowing through it", author: "Jen Carter" },
  { quote: "I might not be the smartest person there, at first", author: "Derrick Harris" },
  { quote: "I knew my stuff and if I didn't, I googled it", author: "Abiola Olamoyegun" },
  { quote: "Why tap? Go sleep, go sleep", author: "Khabib" },
  { quote: "This s##t doesn't even give me any dopamine I just can't stop", author: "Quinten" },
  { quote: "I took loss on top of a loss and n###a I still ain't quit the game", author: "nino" },
  { quote: "My life in the hood soon comes to an end. B###h it's the end of the beginning", author: "cench" },
  { quote: "I couldn't see light at the end of the tunnel but I believed", author: "t" },
  { quote: "Try everything once. if it sticks, it sticks. If it doesn't, at least you tried.", author: "?" },
  { quote: "Don't fumble tryna 40 chess it", author: "Agent" },
  { quote: "Cree-cree-creep in the changin' room at school and teef from the kids that are privileged", author: "Cee" },
  { quote: "What could only be described as a masterclass in delusional optimism.", author: "Officially Opinionated" },
  { quote: "On a mission full aware of all the odds.", author: "Officially Opinionated" },
  { quote: "You don't need flowers when you know you put in your 10,000 hours", author: "Skepta" },
  { quote: "More time I'm emotionless, It's been a while now since I bust a tear", author: "Cee" },
  { quote: "My girl ain't calm. She just numb to emotion, it's hard to affect her.", author: "ST" },
  { quote: "I accept say I change, me I no be same guy", author: "Bado" },
  { quote: "I don't even care about the prize, I just wanna be #1.", author: "IG" },
  { quote: "I've got paranoia there too much Jake's, I'm not going through this again.", author: "Cench" },
  { quote: "Back then it was hard for me, these days I'm getting it easily.", author: "Cench" },
  { quote: "Can't lie, man I ain't the same brudda that I once was", author: "Skepta" },
  { quote: "And I want it, I want my life so bad.", author: "Sia" },
  { quote: "I had to work so hard. I really wanted the jobs that I wanted, and I wouldn't take no for an answer in the sweetest way.", author: "Lea Salonga" },
  { quote: "I'm not interested in status. I live alone.", author: "Spider Rose" },
  { quote: "I wouldn't even say I get a sense of enjoyment, it's almost like working.", author: "Precious" },
  { quote: "Get in your bag and get out your feelings. Show me what your worth.", author: "Nemzzz" },
  { quote: "Our main objective is to provide Wi-fi and that's all :)", author: "Harshavardhan" },
  { quote: "I might be alright but it ain't okay.", author: "Wunna" },
  { quote: "The world has been gaslighting me for the past few years now, soon I will prove it.", author: "D" },
  { quote: "You just got dunked on, it can't be your park.", author: "MK" },
  { quote: "You see I get money cause I go hard, but I want more money so I go harder.", author: "Skepta" },
  { quote: "Your fake fangs are only as sharp as they are thanks to years of training. I've possessed Godlike strength from the moment I was born.", author: "Moz" },
  { quote: "Hyoga! Damn you! To hell with you and your spear of sorcery!", author: "Moz" }
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