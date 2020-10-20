/**
 * Workshop: Guess the Number
 * Lesson: 3
 *
 * STEG 1
 * Sätt ett tal i en variabel. Be användaren att gissa talet. Om det är fel,
 * fråga igen. Om det är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 */

const getRandomNumber = function(max = 10) {
	/*
	const random = Math.random();
	const randomMultiplied = random * max;
	const randomRoundedNumber = Math.ceil(randomMultiplied);
	return randomRoundedNumber;
	*/

	return Math.ceil(Math.random() * max);
}

let numberToGuess = getRandomNumber();
let cheatMode = true;
let continueGame = true;

if (cheatMode) {
	console.log("numberToGuess:", numberToGuess);
}

while (continueGame) {
	let guessedNumber = Number(prompt("Please enter your guess"));

	if (guessedNumber === numberToGuess) {
		alert("🥳");
		continueGame = false;
	} else if (guessedNumber === 0) {
		alert("Fegis");
		continueGame = false;
	} else if (guessedNumber > numberToGuess) {
		alert("OJ det där var för högt gissat! 😳");
	} else if (guessedNumber < numberToGuess) {
		alert("Det där var lågt! Men inte lika lågt som GlocalNet!");
	}
}
