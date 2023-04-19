
var story1 = `"Zero is a beautiful number. Not because it is round and cute (that could be an argument for it nevertheless) but because what it signifies. It marks the beginning of something. It marks the lowest something, or someone can go. It is the ultimate foundation to build anything upon.
Over last several years, I’ve started several things from scratch and have failed at many (thus going back to zero), and I’ve realized there’s nothing more liberating than being at zero because the only way from zero is upwards. A very good friend once told me, "Don’t worry if you’ve failed. Rockets that touch the sky always launch from the ground"`;

var story2 = `While zero is liberating, thrilling and exciting, it sometimes also is daunting and overwhelming. Sometimes, I have found myself afraid to do something because I was comfortable being at zero and the task to go from zero to one seemed unnerving. This challenge of writing twenty-six stories was one such adventure. I remember it was the first of April when I decided to pen down a story for each letter of the alphabet. I was afraid if I was unknowingly planning to fool myself on April 1st.`;

var story3 = `I had no clue what to write even for the first letter of the alphabet. I was afraid I’d ruin twenty-six stories if I begin writing them just for the sake of writing. What gave me the courage to take up the challenge was to lower the expectations that I’d have from these stories. My purpose was not to write twenty-six bestseller stories. Mine was to make it a habit of writing every day. Some days everything that came out of my pen was garbage, and on a few days, I loved what my hands typed on the blank paper. And today, with this last story, I am back at zero — a solid foundation for the next adventure.`;

var story4 = `Writing has become my daily habit, and I can remember to write even without my calendar sending me a reminder. I am curious what could I make out of this habit. Shall I start another writing adventure? Will it be a similar series? Will be a novel (long due now)? Or something different altogether?
Whatever it’d be, I guess I’ll be little less nervous to begin whatever comes next. I am at zero again, and the only way to go from here is upwards. Realizing that there’ll be one less thing in my daily routine, I feel a particular kind of guilt. It’s the kind of guilt that you feel when you have an ice-cream without telling your younger sibling about it. You kind of like it that you had the ice-cream but also feel guilty for hiding it from them.`;

var story5 = `Xan is a character from my another story. Remember the time when I told you about my favorite story? Xan belongs there. Surprisingly, Xan is not a human being. Or an animal. Xan is a three-leaved plant that is hardly four inches tall. Legends have it that Xan is the first plant to ever breathe.
The leaves were purple when it first sprouted and through its life, it changed to green to yellow to red to orange to currently golden. The property that is most unsettling among all is that it can grant any wish, given the seeker’s desire must be a desperate one. Once the protagonist in my other story asked Xan, “But what is a desperate desire?”`;

var story6 = `To that, Xan replied, “Imagine you are swimming in an ocean. And suddenly you feel something touching your feet under the water. And before you realize, you find yourself pulled down into the ocean by something. You try to escape but the grip on your leg is tighter than what you can manage underwater. Within minutes you find yourself to be out of breath and there comes a time when you’d want nothing but some air. You’d not think of your job, or your friends, or your future. You’d be imagining just some air. You’d be desiring to breathe. You’d be desperate. That’s a desperate desire. If what you want is not a desperate desire, I know you can do without it, and therefore, I tend not to grant the wish.”`

function randomGenerator() {
   var output = Math.floor(Math.random()*6) + 1;

   switch(output) {
       case 1 : 
       document.getElementById("paragraph").innerHTML = story1;
       break;
       case 2: 
       document.getElementById("paragraph").innerHTML = story2;
       break; 
       case 3: 
       document.getElementById("paragraph").innerHTML = story3;
       break; 
       case 4: 
       document.getElementById("paragraph").innerHTML = story4;
       break;
       case 5:
       document.getElementById("paragraph").innerHTML = story5;
       break;
       case 6: 
       document.getElementById("paragraph").innerHTML = story6;
       }
}
randomGenerator();
