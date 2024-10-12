const inspirationalMotivational = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Believe you can and you are halfway there. - Theodore Roosevelt",
    "Your limitation is only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success does not just find you. You have to go out and get it.",
    "The harder you work for something, the greater you will feel when you achieve it."
];
const friendshipQuotes = [
    "A true friend is one who overlooks your failures and tolerates your success. - Doug Larson",
    "Friendship is born at that moment when one person says to another, What! You too? I thought I was the only one. - C.S. Lewis",
    "Good friends are like stars. You do not always see them, but you know they are always there. - Unknown",
    "Friendship is the only cement that will ever hold the world together. - Woodrow Wilson",
    "True friendship comes when the silence between two people is comfortable. - David Tyson",
    "Friends show their love in times of trouble. - Euripides",
    "There are no strangers here; Only friends you have not yet met. - William Butler Yeats",
    "A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
    "Friendship is the golden thread that ties the heart of all the world. - John Evelyn",
    "A real friend is one who walks in when the rest of the world walks out. - Walter Winchell"
];
const famousPersonalities = [
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you are busy making other plans. - John Lennon",
    "You miss 100 percent of the shots you do not take. - Wayne Gretzky",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];
const emotionalQuotes = [
    "The emotion that can break your heart is sometimes the very one that heals it. - Nicholas Sparks",
    "To weep is to make less the depth of grief. - William Shakespeare",
    "The best way to cry is to find someone to love. - Anonymous",
    "You cannot protect yourself from sadness without protecting yourself from happiness. - Jonathan Safran Foer",
    "Tears come from the heart and not from the brain. - Leonardo da Vinci",
    "Sometimes, you need to take a break from everyone and spend time alone to experience, appreciate, and love yourself.",
    "The greatest pain that comes from love is loving someone you can never have.",
    "It is better to be unhappy alone than unhappy with someone. - Marilyn Monroe",
    "You cannot heal what you do not acknowledge. - Unknown",
    "It is okay to not be okay. Just do not give up."
];
const devotionalQuotes = [
    "Faith is taking the first step even when you do not see the whole staircase. - Martin Luther King Jr.",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Prayer is not asking. It is a longing of the soul. - Mahatma Gandhi",
    "The soul is a sacred vessel that can only be filled with the love of God.",
    "To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you. - C.S. Lewis",
    "God does not call the qualified, He qualifies the called. - Unknown",
    "When you focus on the goodness in your life, you create more of it. - Oprah Winfrey",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "Happiness is a direction, not a place. - Sydney J. Harris",
    "The will of God will never take you where the grace of God will not protect you."
];

const user = [];
var quote ="";
var arr = Math.floor(Math.random()*5);
var flag = 0;
var box;
function colorchange(){
    switch(arr){
        case 0:
            box = document.getElementById("displayBox").style.backgroundColor="#FFDBC4";
            document.getElementById("displayBox").innerText=quote;
            break;
        case 1:
            box = document.getElementById("displayBox").style.backgroundColor="#F7D1FF";
            document.getElementById("displayBox").innerText=quote;
            break;
        case 2:
            box = document.getElementById("displayBox").style.backgroundColor="#FFD4DE";
            document.getElementById("displayBox").innerText=quote;
            break;
        case 3:
            box = document.getElementById("displayBox").style.backgroundColor="#FFFDD3";
            document.getElementById("displayBox").innerText=quote;
            break;
        case 4:
            box = document.getElementById("displayBox").style.backgroundColor="#DFFFC9";
            document.getElementById("displayBox").innerText=quote;
            break;
    }
}

function generate(){
    var len =0;
    var index = 0;
    switch(arr){
        case 0:
            len = inspirationalMotivational.length;
            index = Math.floor(Math.random()*len);
            quote = inspirationalMotivational[index];
            colorchange();
            break;
        case 1:
            len = friendshipQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = friendshipQuotes[index];
            colorchange();
            break;
        case 2:
            len = famousPersonalities.length;
            index = Math.floor(Math.random()*len);
            quote = famousPersonalities[index];
            colorchange();
            break;
        case 3:
            len = emotionalQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = emotionalQuotes[index];
            colorchange();
            break;
        case 4:
            len = devotionalQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = devotionalQuotes[index];
            colorchange();
            break;
    }
}
var arr1;
function set(num){
    arr1 = num;
    sessionStorage.setItem("arr1", num);
    window.location.href = "displaynew.html";
}

function filterpage(){
    var arr1 = sessionStorage.getItem("arr1");
    index =0;
    len =0;
    quote="";
    arr1 = parseInt(arr1);
    switch(arr1){
        case 0:
            len = inspirationalMotivational.length;
            index = Math.floor(Math.random()*len);
            quote = inspirationalMotivational[index];
            document.getElementById("displayBox1").style.backgroundColor="#FFDBC4";
            document.getElementById("displayBox1").innerText=quote;     
            break;
        case 1:
            len = friendshipQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = friendshipQuotes[index];
            document.getElementById("displayBox1").style.backgroundColor="#F7D1FF";
            document.getElementById("displayBox1").innerText=quote;
            break;
        case 2:
            len = famousPersonalities.length;
            index = Math.floor(Math.random()*len);
            quote = famousPersonalities[index];
            document.getElementById("displayBox1").style.backgroundColor="#FFD4DE";
            document.getElementById("displayBox1").innerText=quote;
            break;
        case 3:
            len = emotionalQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = emotionalQuotes[index];
            document.getElementById("displayBox1").style.backgroundColor="#FFFDD3";
            document.getElementById("displayBox1").innerText=quote;
            break;
        case 4:
            len = devotionalQuotes.length;
            index = Math.floor(Math.random()*len);
            quote = devotionalQuotes[index];
            document.getElementById("displayBox1").style.backgroundColor="#DFFFC9";
            document.getElementById("displayBox1").innerText=quote;
            break;
        case 5:
            len = user.length;
            if(len ==0){
                quote = "No quotes to display";
                document.getElementById("displayBox1").style.backgroundColor="#D6D1FF";
                document.getElementById("displayBox1").innerText=quote;
            }
            index = Math.floor(Math.random()*len);
            quote = user[index];
            document.getElementById("displayBox1").style.backgroundColor="#D6D1FF";
            document.getElementById("displayBox1").innerText=quote;
            break;
    }
}

function addquote(){
    var n = document.getElementById("text").value;
    user.push(n);
}