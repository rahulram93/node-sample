
var fortunes = ["Conquer your fears or they will conquer you",
                "Rivers need Springs.",
                "Do not fear what you don't know",
                "you will have a pleasant surprise.",
                "whenever possible, keep it simple."
];


exports.getFortune = function(){
  return fortunes[Math.floor( Math.random() * fortunes.length )];
}
