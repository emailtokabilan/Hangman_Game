
var rand = 0;
var word = " ";
var wordlength = 0;
var spaces = 0;
var numRight = 0;
var mistake = 7;
var nextImg = 1;
var divWidth = 55;
var sound = new Audio();
var movies = ["Rambo First Blood ","The Expendables","Cliffhanger","The Godfather","The Departed","The Shawshank Redemption","Fight Club","The Good the Bad and the Ugly","Gladiator ","Saving Private Ryan","Analyze This","Schindler's List","The Matrix ","Ip Man ","Back to the Future","Braveheart ","Catch Me If You Can","Blood Diamond","The Fast and the Furious Tokyo Drift ","Big","The Hangover","No Country for Old Men","Jurassic Park ","The Truman Show","Scarface","The Curious Case of Benjamin Button","Alien","The Pianist","Indiana Jones and the Raiders of the Lost Ark","The Terminator","Ocean's Eleven ","The Terminal ","Mrs. Doubtfire","Training Day ","Indiana Jones and the Last Crusade","Lethal Weapon","The Fugitive"," City Island ","Ace Ventura Pet Detective","Gangs of New York","Sin City"," Avatar","Inception","Witness","Ted","Memento","Die Hard","Life Is Beautiful","Django Unchained","The Wolf of Wall Street ","Edge of Tomorrow","Fury","Prisoners","Enemy at the Gates ","The Avengers","The Raid"];
function sp()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}


function movie()
{
    rand = Math.floor(Math.random() * movies.length);
    word = movies[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Movies Name";
    hangman();
}


function hangman()
{
    var x = word.length;
    var y = x - 1;
    divWidth = divWidth * word.length + 10 ;
    document.getElementById('wordWrap').style.width = divWidth + "px";
    while(x>0)
    {
        var letter = word.substring(y, x);
        if(letter  === " ")
        {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else
        {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid black";
          
        }

        x--;
        y--;

    }
    wordlength = word.length - spaces;

    
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
}

function guessLetter()
{
    sound.src = "Sounds/laser.mp3";
    sound.play();

    var target = event.target;
    var correct=false;
    target.style.visibility = "hidden";

    var lower = target.id;
    var upper = document.getElementById(lower).getAttribute('value');

    for(var a=1;a<=100;a++)
    {
        if(document.getElementById('letter'+a).innerHTML===lower || document.getElementById('letter'+a).innerHTML===upper)
        {
            document.getElementById('letter' + a).style.visibility = "visible";
            correct = true;
            numRight++;
        }

    }

    if (correct == false)
    {
        mistake--;
        ++nextImg;
        document.getElementById('mistakes').innerHTML = "Mistakes : " + mistake;
        document.getElementById('hangImg').src = 'hang'+ nextImg +'.png';
    }
    if (mistake <= 0)
    {
        mistake = 0;
        document.getElementById('winStatus').innerHTML = 'You lose!!!';
        lose();
    }
    if(numRight==wordlength)
    {
        document.getElementById('winStatus').innerHTML = "You Win";
        win();
    }
}

function win()
{
    sound.src = "Sounds/win.mp3";
    sound.play();
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;
    
}
function lose() {
    sound.src = "Sounds/lose.mp3";
    sound.play();
    document.getElementById('gamePage').style.display = "none";
    document.getElementById('endPage').style.display = "block";
    document.getElementById('guessedWord').innerHTML = word;

}


function mainMenu()
{
    sound.src = "Sounds/click.mp3";
    sound.play();
    document.location.reload(true);
    document.getElementById('endPage').style.display = "none";
    document.getElementById('introPage').style.display = "block";
}