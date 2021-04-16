# Dice & Roll Game

![alt text](https://user-images.githubusercontent.com/66780327/106460095-18901d00-6493-11eb-9ace-00efede79702.gif)

Go to the [Live Preview](https://shifujulen.github.io/Dice-Roll-Game/)

This is a re-design of the original project from Jonas Schmedtmann's, called "Pig Game".

It is a much more minimalistic approach with a few added features like progress bars or theme toggle.

## Table of Contents

- [Brief Introduction](#Brief-Introduction)
- [How it works](#How-it-works)
- [Key Features](#Key-Features)
- [Approaches](#Approaches)
  - [Progress Bars](#Progress-Bars)
  - [Switch Themes](#Switch-Themes)
- [Attribution](#Attribution)
- [Feedback](#Feedback)

## Brief Introduction

While going through the Udemy Online Course of Jonas Schmedtmann, the first project of the curriculum was to create a simple game about scoring points through rolling a dice.

After following the tutorial and understanding the reason behind every feature, I decided to **re-design** the concept into a minimal one, while _adding a few more features_ like progress bars and toggle themes.

## How it works

The **rules** are really simple.

- Each player can roll the dice infinite number of times until you get a 'one'.
- If you hold the score before getting a 'one' on the dice, the player will add that current score to the global one.
- Else if the player gets a one, all of the previous points of that round will vanish, and the turn will switch to the other player.
- The first player in holding up to 100 points wins.

## Key Features

1. Roll the dice to get a **random number**
2. **Hold the current score** to add those points to the global score.
3. **Progress bars** to the sides to visualize the score.
4. **Toggle buttons** to switch between dark and light themes.
5. Start a **New Game** and reset all of the features to starting conditions.

## Approaches

### Progress Bars

- Create the progress Bars in CSS:

```
.progress-back {
  background-color: #252525;
  width: 5rem;
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  opacity: 0.3;
}

.progress-bar {
  background-color: #f7f7f7;
  width: 5rem;
  height: 80%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  transition: 0.2s;
}

#progress-back--1 {
  left: 95rem;
}

#progress-bar--0 {
  height: 100%;
}
```

- Change the % of the height property in CSS with DOM inside the Hold Button feature:

```
// Add progress bars
    document.getElementById('progress-bar--0').style.height = `${
      100 - scores[0]
    }%`;
    document.getElementById('progress-bar--1').style.height = `${
      100 - scores[1]
    }%`;
```

### Switch Themes

- Use separate stylesheets to store both dark-theme.css and light-theme.css
- Link up the default mode on the head of html

```
<link rel="stylesheet" href="light-theme.css" id="theme-link" />
```

- Toggle the themes using #theme-link and setAttribute in Javascript DOM.

```
btnWhite.addEventListener('click', function () {
  // Select the href attribute
  theme.setAttribute('href', 'light-theme.css');
  // Hide the dice when the switch happens
  diceEl.classList.add('hidden');
  // Set the darkTheme to false so we can display the dark dices
  darkTheme = false;
});

btnBlack.addEventListener('click', function () {
  // Select the href attribute
  theme.setAttribute('href', 'dark-theme.css');
  // Hide the dice when the switch happens
  diceEl.classList.add('hidden');
  // Set the darkTheme to false so we can display the dark dices
  darkTheme = true;
});
```

- Source: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

## Attribution

This project was made possible thanks to the awesome Udemy Course from Jonas Schmedtmann. He is such a good teacher.

- Link to his Udemy Course: https://www.udemy.com/course/the-complete-javascript-course/

I mostly followed his instructions. Apart from my UI re-design and a few features like progress bars and Switch themes, the rest of the code was a follow-up.

Follow him on twitter or subscribe to his mailing list:

https://twitter.com/jonasschmedtman
http://codingheroes.io/resources/

## Feedback

If you liked this project, give it a like!

I would also appreciate any improvements both on the design or the development part of the code. I am complete beginner so any reviews will surely be of help :).

Thanks for yout time 🙏🏽
