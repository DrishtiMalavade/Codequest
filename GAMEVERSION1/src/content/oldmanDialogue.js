const english = [
  [
    "It's dangerous to go alone!",
    "Take this sword and press SPACE to use it.",
    "Please save my son! He's far away, and I have only one clue.",
    `x = 7
  y = (x & 1) + (x % 3 == 1) + (x % 5 == 2)
  print(["East Palace", "North House", "West Tower", "South Shed"][y])`
  ],
  
  [
    "You forgot how to use your sword?",
    "Press the space key to attack.",
    "Please now go save my son before it's too late!",
  ],
  ["Please save my son!"],
  ["As a reward for saving my son, you can keep the sword I gave you."],
];

const french = [
  [
    "C'est dangereux de s'aventurer seul!",
    "Prends cette epee, presses la touche espace pour l'utiliser.",
    "S'il te plait, sauves mon fils! Il est capture au donjon situe a l'ouest.",
    "Je te recompenserais genereusement!",
  ],
  [
    "Tu as oublie comment utiliser ton epee?",
    "Presses la touche espace pour attaquer.",
    "S'il te plait, sauves mon fils avant que ça soit trop tard!",
  ],
  ["S'il te plait, sauves mon fils!"],
  ["Comme recompense pour avoir sauve mon fils...", "Tu peux garder l'epee."],
];

const oldmanLines = {
  english,
  french,
};

export default oldmanLines;
