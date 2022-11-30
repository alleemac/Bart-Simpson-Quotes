var quotes = ["Eat My Shorts", "Dont have a cow, man.","Get bent.", "Whoa, mama!","Ay, caramba!", "Is Seymour there? Last name Butz.","I cant promise Ill try, but Ill try to try.", "Im Bart Simpson, who the hell are you?","Who cares what we look like in whatever stupid year this is.", "Youre turning me into a criminal when all I want to be is a petty thug.","I didnt do it! Nobody saw me do it. You cant prove anything!"]
var background = ["images/bart-slurp.png","images/bart-jam.png","images/bart-yell.png","images/bart-rock.png"]

 document.querySelector("button#new-quote").addEventListener("click", newQuote);
 document.querySelector("button#new-quote").addEventListener("click", newBackground);


function newQuote() {
  document.querySelector("#text").innerHTML = selectRandomQuote();
};

function newBackground() {
    document.querySelector("body").style.backgroundImage = selectRandomBackground();

}

function selectRandomQuote() {
   var randomQ = Math.floor(Math.random() * quotes.length);
 var quote = quotes[randomQ]
 return quote;
};

function selectRandomBackground() {
     var randomBG = Math.floor(Math.random() * background.length);
 var backgrounds = background[randomBG]
 return "url(" + backgrounds + ")";
}