// Quote service with comprehensive motivational quotes collection

export interface Quote {
  quote: string;
  author: string;
  category?: string;
}

export interface QuoteAPIResponse {
  quote: string;
  author: string;
  category: string;
}

// Hardcoded category counts with the exact values provided
export const CATEGORY_COUNTS = {
  motivational: 55,
  success: 14,
  life: 1,
  wisdom: 8,
  happiness: 37,
  sad: 37,
  love: 25,
  all: 177 // Total number of quotes
};

// Comprehensive motivational quotes collection
const motivationalQuotes: Quote[] = [
  // Leadership quotes
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
    category: "motivational"
  },
  {
    quote: "Earn your leadership every day.",
    author: "Michael Jordan",
    category: "motivational"
  },
  {
    quote: "It's not just about being better. It's about being different. You need to give people a reason to choose your business.",
    author: "Tom Abbott",
    category: "success"
  },
  {
    quote: "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.",
    author: "Eric Hoffer",
    category: "motivational"
  },
  {
    quote: "Leadership and learning are indispensable to each other.",
    author: "John F. Kennedy",
    category: "motivational"
  },
  
  // Team quotes
  {
    quote: "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
    author: "John Maxwell",
    category: "motivational"
  },
  {
    quote: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller",
    category: "motivational"
  },
  {
    quote: "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
    author: "Babe Ruth",
    category: "success"
  },
  {
    quote: "It is amazing what you can accomplish if you do not care who gets the credit.",
    author: "Harry Truman",
    category: "success"
  },
  {
    quote: "I can do things you cannot, you can do things I cannot: together we can do great things.",
    author: "Mother Teresa",
    category: "motivational"
  },
  
  // Inspirational quotes
  {
    quote: "It is the long history of humankind (and animal kind, too) that those who learned to collaborate and improvise most effectively have prevailed.",
    author: "Charles Darwin",
    category: "wisdom"
  },
  {
    quote: "The ones who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
    category: "motivational"
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou",
    category: "happiness"
  },
  {
    quote: "Follow your bliss and the universe will open doors where there were only walls.",
    author: "Joseph Campbell",
    category: "motivational"
  },
  {
    quote: "A year from now you may wish you had started today.",
    author: "Karen Lamb",
    category: "motivational"
  },
  
  // Positive quotes
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
    category: "motivational"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    category: "success"
  },
  {
    quote: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
    category: "success"
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
    category: "motivational"
  },
  
  // Daily motivation
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
    category: "motivational"
  },
  {
    quote: "Nothing is impossible, the word itself says 'I'm possible!'",
    author: "Audrey Hepburn",
    category: "motivational"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
    category: "happiness"
  },
  {
    quote: "Nothing lasts forever. Not even your troubles.",
    author: "Arnold H Glasgow",
    category: "motivational"
  },
  {
    quote: "The only place you find success before work is in the dictionary.",
    author: "May V. Smith",
    category: "success"
  },
  {
    quote: "Hope never abandons you, you abandon it.",
    author: "George Weinberg",
    category: "motivational"
  },
  {
    quote: "Just decide; what's it's gonna be, who you're gonna be and how you're gonna do it, and then from that point, the universe will get out of your way.",
    author: "Will Smith",
    category: "motivational"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
    category: "success"
  },
  {
    quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
    author: "Abraham Lincoln",
    category: "success"
  },
  {
    quote: "It is our choices, that show what we truly are, far more than our abilities.",
    author: "J. K. Rowling",
    category: "wisdom"
  },
  {
    quote: "Go until you fail, then keep going.",
    author: "Jason Feifer",
    category: "motivational"
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
    category: "wisdom"
  },
  
  // Short impactful quotes
  {
    quote: "Don't let the noise of others' opinions drown out your own inner voice.",
    author: "Steve Jobs",
    category: "motivational"
  },
  {
    quote: "There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
    author: "Aristotle",
    category: "wisdom"
  },
  {
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    category: "motivational"
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Shuller",
    category: "motivational"
  },
  
  // Monday motivation
  {
    quote: "Remember why you started.",
    author: "Unknown",
    category: "motivational"
  },
  {
    quote: "Be so good they can't ignore you.",
    author: "Steve Martin",
    category: "success"
  },
  {
    quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    author: "Warren Buffett",
    category: "wisdom"
  },
  {
    quote: "You are braver than you believe, stronger than you seem and smarter than you think.",
    author: "Christopher Robin",
    category: "motivational"
  },
  {
    quote: "Don't be pushed by your problems. Be led by your dreams.",
    author: "Ralph Waldo Emerson",
    category: "motivational"
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: "motivational"
  },
  
  // Encouraging quotes
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
    category: "motivational"
  },
  {
    quote: "If it doesn't challenge you, it won't change you.",
    author: "Unknown",
    category: "motivational"
  },
  {
    quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    author: "Paulo Coelho",
    category: "motivational"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    category: "motivational"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Franklin D. Roosevelt",
    category: "motivational"
  },
  
  // Business motivation
  {
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "Pele",
    category: "success"
  },
  {
    quote: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
    category: "motivational"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "motivational"
  },
  {
    quote: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou",
    category: "motivational"
  },
  
  // Famous quotes
  {
    quote: "Power's not given to you. You have to take it.",
    author: "Beyoncé",
    category: "motivational"
  },
  {
    quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Jane Goodall",
    category: "motivational"
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did.",
    author: "Mark Twain",
    category: "motivational"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
    category: "motivational"
  },
  {
    quote: "The greatest danger for most of us is not that our aim is too high and we miss it but that it is too low and we reach it.",
    author: "Michelangelo",
    category: "motivational"
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    category: "life"
  },
  {
    quote: "You can fall, but you can rise also.",
    author: "Angelique Kidjo",
    category: "motivational"
  },
  
  // Personal empowerment
  {
    quote: "When you can't find someone to follow, you have to find a way to lead by example.",
    author: "Roxanne Gay",
    category: "motivational"
  },
  {
    quote: "When I dare to be powerful—to use my strength in the service of my vision—then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde",
    category: "motivational"
  },
  {
    quote: "I realized that I don't have to be perfect. All I have to do is show up and enjoy the messy, imperfect and beautiful journey of my life.",
    author: "Kerry Washington",
    category: "happiness"
  },
  {
    quote: "Nothing will work unless you do.",
    author: "Maya Angelou",
    category: "success"
  },
  {
    quote: "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
    author: "Amelia Earhart",
    category: "motivational"
  },
  {
    quote: "Find something you're passionate about and keep tremendously interested in it.",
    author: "Julia Child",
    category: "motivational"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "success"
  },
  {
    quote: "Where there is love and inspiration, I don't think you can go wrong.",
    author: "Ella Fitzgerald",
    category: "happiness"
  },
  
  // Inspiration
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
    category: "happiness"
  },
  {
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller",
    category: "happiness"
  },
  {
    quote: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
    category: "motivational"
  },
  {
    quote: "If you know exactly what you're going to do, what's the good in doing it?",
    author: "Picasso",
    category: "motivational"
  },
  
  // Wisdom and growth
  {
    quote: "Only put off until tomorrow what you are willing to die having left undone.",
    author: "Pablo Picasso",
    category: "motivational"
  },
  {
    quote: "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self.",
    author: "Ernest Hemingway",
    category: "wisdom"
  },
  {
    quote: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel",
    category: "motivational"
  },
  {
    quote: "What would life be if we had no courage to attempt anything?",
    author: "Vincent Van Gogh",
    category: "motivational"
  },
  {
    quote: "One of the secrets of life is that all that is really worth the doing is what we do for others.",
    author: "Lewis Carroll",
    category: "wisdom"
  },
  {
    quote: "You shouldn't dream your film, you should make it!",
    author: "Steven Spielberg",
    category: "success"
  },
  
  // Life lessons
  {
    quote: "The reality is: sometimes you lose. And you're never too good to lose. You're never too big to lose. You're never too smart to lose. It happens.",
    author: "Beyoncé",
    category: "wisdom"
  },
  {
    quote: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu",
    category: "wisdom"
  },
  {
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami",
    category: "wisdom"
  },
  {
    quote: "Luck has nothing to do with it.",
    author: "Serena Williams",
    category: "success"
  },
  
  // Student motivation
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: "motivational"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  
  // Additional Happiness quotes
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "happiness"
  },
  {
    quote: "To be kind to all, to like many and love a few, to be needed and wanted by those we love, is certainly the nearest we can come to happiness.",
    author: "Mary Stuart",
    category: "happiness"
  },
  {
    quote: "If you want happiness for an hour—take a nap. If you want happiness for a day—go fishing. If you want happiness for a year—inherit a fortune. If you want happiness for a lifetime—help someone else.",
    author: "Chinese Proverb",
    category: "happiness"
  },
  {
    quote: "It's a helluva start, being able to recognize what makes you happy.",
    author: "Lucille Ball",
    category: "happiness"
  },
  {
    quote: "Don't underestimate the value of Doing Nothing, of just going along, listening to all the things you can't hear, and not bothering.",
    author: "Winnie the Pooh",
    category: "happiness"
  },
  {
    quote: "Some cause happiness wherever they go; others whenever they go.",
    author: "Oscar Wilde",
    category: "happiness"
  },
  {
    quote: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
    category: "happiness"
  },
  {
    quote: "It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.",
    author: "L.M. Montgomery",
    category: "happiness"
  },
  {
    quote: "Since you get more joy out of giving joy to others, you should put a good deal of thought into the happiness that you are able to give.",
    author: "Eleanor Roosevelt",
    category: "happiness"
  },
  {
    quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius Antoninus",
    category: "happiness"
  },
  {
    quote: "I'd far rather be happy than right any day.",
    author: "Douglas Adams",
    category: "happiness"
  },
  {
    quote: "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim",
    category: "happiness"
  },
  {
    quote: "Happiness is nothing more than good health and a bad memory.",
    author: "Albert Schweitzer",
    category: "happiness"
  },
  {
    quote: "I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn't arrived yet. I have just one day, today, and I'm going to be happy in it.",
    author: "Groucho Marx",
    category: "happiness"
  },
  {
    quote: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.",
    author: "Marcel Proust",
    category: "happiness"
  },
  {
    quote: "Most people are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
    category: "happiness"
  },
  {
    quote: "If you look to others for fulfillment, you will never be fulfilled. If your happiness depends on money, you will never be happy with yourself. Be content with what you have; rejoice in the way things are.",
    author: "Lao Tzu",
    category: "happiness"
  },
  {
    quote: "If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.",
    author: "Andrew Carnegie",
    category: "happiness"
  },
  {
    quote: "Tension is who you think you should be, relaxation is who you are.",
    author: "Chinese Proverb",
    category: "happiness"
  },
  {
    quote: "Happiness is not a station you arrive at, but a manner of traveling.",
    author: "Margaret Lee Runbeck",
    category: "happiness"
  },
  {
    quote: "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    author: "Buddha",
    category: "happiness"
  },
  {
    quote: "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose.",
    author: "Helen Keller",
    category: "happiness"
  },
  {
    quote: "Blessed are those who can give without remembering and take without forgetting.",
    author: "Bernard Meltzer",
    category: "happiness"
  },
  {
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
    category: "happiness"
  },
  {
    quote: "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie",
    category: "happiness"
  },
  {
    quote: "The happiness of life is made up of the little charities of a kiss or smile, a kind look, a heartfelt compliment.",
    author: "Samuel Taylor Coleridge",
    category: "happiness"
  },
  {
    quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    category: "happiness"
  },
  {
    quote: "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
    author: "Stephen Chbosky",
    category: "happiness"
  },
  {
    quote: "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
    category: "happiness"
  },
  {
    quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
    category: "happiness"
  },
  {
    quote: "Happiness is a warm puppy.",
    author: "Charles M. Schulz",
    category: "happiness"
  },
  {
    quote: "Happiness is holding someone in your arms and knowing you hold the whole world.",
    author: "Orhan Pamuk",
    category: "happiness"
  },
  {
    quote: "All happiness depends on courage and work.",
    author: "Honoré de Balzac",
    category: "happiness"
  },
  {
    quote: "Let no one ever come to you without leaving better and happier.",
    author: "Mother Teresa",
    category: "happiness"
  },
  {
    quote: "Now and then it's good to pause in our pursuit of happiness and just be happy.",
    author: "Guillaume Apollinaire",
    category: "happiness"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    category: "happiness"
  },
  {
    quote: "Happiness is not the absence of problems, it's the ability to deal with them.",
    author: "Steve Maraboli",
    category: "happiness"
  },
  {
    quote: "Those who are not looking for happiness are the most likely to find it, because those who are searching forget that the surest way to be happy is to seek happiness for others.",
    author: "Martin Luther King Jr.",
    category: "happiness"
  },
  {
    quote: "I'm choosing happiness over suffering, I know I am. I'm making space for the unknown future to fill up my life with yet-to-come surprises.",
    author: "Elizabeth Gilbert",
    category: "happiness"
  },
  {
    quote: "Whoever is happy will make others happy.",
    author: "Anne Frank",
    category: "happiness"
  },
  {
    quote: "The greater part of our happiness or misery depends upon our dispositions, and not upon our circumstances.",
    author: "Martha Washington",
    category: "happiness"
  },
  {
    quote: "Happiness is not a possession to be prized, it is a quality of thought, a state of mind.",
    author: "Daphne du Maurier",
    category: "happiness"
  },
  {
    quote: "The power of finding beauty in the humblest things makes home happy and life lovely.",
    author: "Louisa May Alcott",
    category: "happiness"
  },
  {
    quote: "Action may not always bring happiness, but there is no happiness without action.",
    author: "William James",
    category: "happiness"
  },
  {
    quote: "If only we'd stop trying to be happy, we could have a pretty good time.",
    author: "Edith Wharton",
    category: "happiness"
  },
  {
    quote: "Happiness is a risk. If you're not a little scared, then you're not doing it right.",
    author: "Sarah Addison Allen",
    category: "happiness"
  },
  {
    quote: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    author: "Oprah Winfrey",
    category: "happiness"
  },
  {
    quote: "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.",
    author: "Epictetus",
    category: "happiness"
  },
  {
    quote: "Happiness is a perfume you cannot pour on others without getting some on yourself.",
    author: "Ralph Waldo Emerson",
    category: "happiness"
  },
  
  // Sad quotes
  {
    quote: "There are moments when I wish I could roll back the clock and take all the sadness away, but I have the feeling that if I did, the joy would be gone as well.",
    author: "Nicholas Sparks",
    category: "sad"
  },
  {
    quote: "Life's under no obligation to give us what we expect.",
    author: "Margaret Mitchell",
    category: "sad"
  },
  {
    quote: "You see, I usually find myself among strangers because I drift here and there trying to forget the sad things that happened to me.",
    author: "F. Scott Fitzgerald",
    category: "sad"
  },
  {
    quote: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
    author: "Mark Twain",
    category: "sad"
  },
  {
    quote: "Things change. And friends leave. And life doesn't stop for anybody.",
    author: "Stephen Chbosky",
    category: "sad"
  },
  {
    quote: "One must not let oneself be overwhelmed by sadness.",
    author: "Jacqueline Kennedy-Onassis",
    category: "sad"
  },
  {
    quote: "The word 'happy' would lose its meaning if it were not balanced by sadness.",
    author: "Carl Jung",
    category: "sad"
  },
  {
    quote: "Life is a moderately good play with a badly written third act.",
    author: "Truman Capote",
    category: "sad"
  },
  {
    quote: "Learning is a gift. Even when pain is your teacher.",
    author: "Maya Watson",
    category: "sad"
  },
  {
    quote: "I have learned now that while those who speak about one's miseries usually hurt, those who keep silence hurt more.",
    author: "C.S. Lewis",
    category: "sad"
  },
  {
    quote: "The excursion is the same when you go looking for your sorrow as when you go looking for your joy.",
    author: "Eudora Welty",
    category: "sad"
  },
  {
    quote: "Don't ever tell anybody anything. If you do, you start missing everybody.",
    author: "J.D. Salinger",
    category: "sad"
  },
  {
    quote: "I wish I could go back to the day I met you and just walk away.",
    author: "Unknown",
    category: "sad"
  },
  {
    quote: "I'm not crying because of you; you're not worth it. I'm crying because my delusion of who you were was shattered by the truth of who you are.",
    author: "Steve Maraboli",
    category: "sad"
  },
  {
    quote: "To live in a hallucination of being loved is more painful than rejection.",
    author: "Vinaya Panicker",
    category: "sad"
  },
  {
    quote: "So it's true, when all is said and done, grief is the price we pay for love.",
    author: "E.A. Bucchianeri",
    category: "sad"
  },
  {
    quote: "What is hardest to accept about the passage of time is that the people who once mattered the most to us wind up in parentheses.",
    author: "John Irving",
    category: "sad"
  },
  {
    quote: "Our dead are never dead to us until we have forgotten them.",
    author: "George Eliot",
    category: "sad"
  },
  {
    quote: "The bitterest tears shed over graves are for words left unsaid and deeds left undone.",
    author: "Harriet Beecher Stowe",
    category: "sad"
  },
  {
    quote: "It is the unknown we fear when we look upon death and darkness, nothing more.",
    author: "J.K. Rowling",
    category: "sad"
  },
  {
    quote: "It's sad when someone you know becomes someone you knew.",
    author: "Henry Rollins",
    category: "sad"
  },
  {
    quote: "There is a time for departure, even when there's no certain place to go.",
    author: "Tennessee Williams",
    category: "sad"
  },
  {
    quote: "You meet everyone twice in this life, when they come and when they go.",
    author: "C.C Aurel",
    category: "sad"
  },
  {
    quote: "Grief is not as heavy as guilt, but it takes more away from you.",
    author: "Veronica Roth",
    category: "sad"
  },
  {
    quote: "Death is a great revealer of what is in a man, and in its solemn shadow appear the naked lineaments of the soul.",
    author: "E.H. Chapin",
    category: "sad"
  },
  {
    quote: "Death is the dropping of the flower that the fruit may swell.",
    author: "Henry Ward Beecher",
    category: "sad"
  },
  {
    quote: "You know, a heart can be broken, but it keeps on beating, just the same.",
    author: "Fannie Flagg",
    category: "sad"
  },
  {
    quote: "It's amazing how someone can break your heart, and you can still love them with all the little pieces.",
    author: "Ella Harper",
    category: "sad"
  },
  {
    quote: "I keep thinking about this river somewhere, with the water moving really fast. And these two people in the water, trying to hold onto each other, holding on as hard as they can, but in the end it's just too much. The current's too strong. They've got to let go, drift apart. That's how it is with us.",
    author: "Kazuo Ishiguro",
    category: "sad"
  },
  {
    quote: "Some stories don't have happy endings. Even love stories. Maybe especially love stories.",
    author: "Kristin Hannah",
    category: "sad"
  },
  {
    quote: "There is a distinct, awful pain that comes with loving someone more than they love you.",
    author: "Steve Maraboli",
    category: "sad"
  },
  {
    quote: "To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
    author: "J.K. Rowling",
    category: "sad"
  },
  {
    quote: "To have felt too much is to end in feeling nothing.",
    author: "Dorothy Thompson",
    category: "sad"
  },
  {
    quote: "Now, you are just a stranger with all my secrets.",
    author: "Unknown",
    category: "sad"
  },
  {
    quote: "I never got to fall out of love. I just had to move on.",
    author: "Christina Lauren",
    category: "sad"
  },
  {
    quote: "Our greatest joy and our greatest pain come in our relationships with others.",
    author: "Stephen R. Covey",
    category: "sad"
  },
  {
    quote: "Love is so short, forgetting is so long.",
    author: "Pablo Neruda",
    category: "sad"
  },
  {
    quote: "To fall in love is awfully simple, but to fall out of love is simply awful.",
    author: "Bess Myerson",
    category: "sad"
  },
  {
    quote: "If you gave someone your heart and they died, did they take it with them? Did you spend the rest of forever with a hole inside you that couldn't be filled?",
    author: "Jodi Picoult",
    category: "sad"
  },
  {
    quote: "You make me feel like a firefly. Trapped in a belljar; starved for love.",
    author: "Ayushee Ghoshal",
    category: "sad"
  },
  {
    quote: "You're like a song that I heard when I was a little kid but forgot I knew until I heard it again.",
    author: "Maggie Stiefvater",
    category: "sad"
  },
  {
    quote: "There is no greater sorrow than to recall, in misery, the time when we were happy.",
    author: "Dante Aligheri",
    category: "sad"
  },
  {
    quote: "The worst feeling isn't being lonely, it's being forgotten by someone you'd never forget.",
    author: "Helen Hywater",
    category: "sad"
  },
  {
    quote: "Sometimes you got to hurt something to help something. Sometimes you have to plow under one thing in order for something else to grow.",
    author: "Ernest J. Gaines",
    category: "sad"
  },
  {
    quote: "Nobody has ever measured, not even poets, how much the heart can hold.",
    author: "Zelda Fitzgerald",
    category: "sad"
  },
  {
    quote: "Broken relationships are a source of heavy heartbreak that seem to affect every family.",
    author: "Jerry B. Jenkins",
    category: "sad"
  },
  {
    quote: "Who has not sat before his own heart's curtain? It lifts: and the scenery is falling apart.",
    author: "Rainer Maria Rilke",
    category: "sad"
  },
  {
    quote: "Stab the body and it heals, but injure the heart and the wound lasts a lifetime.",
    author: "Mineko Iwasaki",
    category: "sad"
  },
  {
    quote: "Tears are words the mouth can't say nor can the heart bear.",
    author: "Joshua Wisenbaker",
    category: "sad"
  },
  {
    quote: "Of all the words of mice and men, the saddest are, 'It might have been.'",
    author: "Kurt Vonnegut",
    category: "sad"
  },
  {
    quote: "We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim.",
    author: "R.M. Drake",
    category: "sad"
  },
  {
    quote: "It is sadder to find the past again and find it inadequate to the present than it is to have it elude you and remain forever a harmonious conception of memory.",
    author: "F. Scott Fitzgerald",
    category: "sad"
  },
  {
    quote: "I always like walking in the rain, so no one can see me crying.",
    author: "Charlie Chaplin",
    category: "sad"
  },
  {
    quote: "One thing you can't hide is when you're crippled inside.",
    author: "John Lennon",
    category: "sad"
  },
  {
    quote: "Being a successful person is not necessarily defined by what you have achieved, but by what you have overcome.",
    author: "Fannie Flagg",
    category: "sad"
  },
  {
    quote: "Faking a smile is so much easier than explaining why you are sad.",
    author: "Iona Mink",
    category: "sad"
  },
  {
    quote: "There are years that ask questions and years that answer.",
    author: "Zora Neale Hurston",
    category: "sad"
  },
  {
    quote: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
    author: "Christopher Morley",
    category: "sad"
  },
  {
    quote: "Tears come from the heart and not from the brain.",
    author: "Leonardo da Vinci",
    category: "sad"
  },
  {
    quote: "Long after I have give up, my heart still searches for you without my permission.",
    author: "Rudy Francisco",
    category: "sad"
  },
  {
    quote: "The good times of today are the sad thoughts of tomorrow.",
    author: "Bob Marley",
    category: "sad"
  },
  {
    quote: "Some people feel like they don't deserve love. They walk away quietly into empty spaces, trying to close the gaps of the past.",
    author: "Jon Krakauer",
    category: "sad"
  },
  
  // Love quotes
  {
    quote: "love is a place / & through this place of / love move / (with brightness of peace) / all places",
    author: "E.E. Cummings",
    category: "love"
  },
  {
    quote: "Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.",
    author: "1 Corinthians 13:6-8",
    category: "love"
  },
  {
    quote: "One hour of right down love is worth an age of dully living on.",
    author: "Aphra Behn",
    category: "love"
  },
  {
    quote: "Cause all of me / Loves all of you / Love your curves and all your edges / All your perfect imperfections.",
    author: "John Legend",
    category: "love"
  },
  {
    quote: "Give me your answer, fill in a form / Mine for evermore / Will you still need me, will you still feed me / When I'm sixty-four?",
    author: "The Beatles",
    category: "love"
  },
  {
    quote: "I tell you this / to break your heart, / by which I mean only / that it break open and never close again / to the rest of the world.",
    author: "Mary Oliver",
    category: "love"
  },
  {
    quote: "I did not just fall in love. I made a parachute jump.",
    author: "Zora Neale Hurston",
    category: "love"
  },
  {
    quote: "Come along with me to my little corner of the world / Dream a little dream in my little corner of the world / You'll soon forget that there's any other place / Tonight, my love, we'll share a sweet embrace.",
    author: "Bob Hilliard",
    category: "love"
  },
  {
    quote: "All love that has not friendship for its base, / Is like a mansion built upon the sand.",
    author: "Ella Wheeler Wilcox",
    category: "love"
  },
  {
    quote: "Can I go where you go? / Can we always be this close, forever and ever?",
    author: "Taylor Swift",
    category: "love"
  },
  {
    quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    author: "Harry Burns",
    category: "love"
  },
  {
    quote: "Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.",
    author: "Louis de Bernières",
    category: "love"
  },
  {
    quote: "I love you like this because I don't know any other way to love, / except in this form in which I am not nor are you, / so close that your hand upon my chest is mine, / so close that your eyes close with my dreams.",
    author: "Pablo Neruda",
    category: "love"
  },
  {
    quote: "He was part of my dream of course — but then I was part of his dream, too.",
    author: "Lewis Carroll",
    category: "love"
  },
  {
    quote: "Love, leave me like the light, / The gently passing day; / We would not know, but for the night, / When it has slipped away. / Go quietly; a dream, / When done, should leave no trace / That it has lived, except a gleam / Across the dreamer's face.",
    author: "Countee Cullen",
    category: "love"
  },
  {
    quote: "I found you and I loved you, / And all the world was mine.",
    author: "Paul Laurence Dunbar",
    category: "love"
  },
  {
    quote: "Love is the one experience of the human condition that allows us to feel unequivocally, beautifully and deeply that our true condition is not isolation but union.",
    author: "Daphne Rose Kingma",
    category: "love"
  },
  {
    quote: "It has made me better, loving you…it has made me wiser, and easier, and — I won't pretend to deny — brighter and nicer and even stronger.",
    author: "Henry James",
    category: "love"
  },
  {
    quote: "When my soul was in the lost and found / You came along to claim it.",
    author: "Aretha Franklin",
    category: "love"
  },
  {
    quote: "If you remember me, then I don't care if everyone else forgets.",
    author: "Haruki Murakami",
    category: "love"
  },
  {
    quote: "But I love your feet / only because they walked upon the earth and upon / the wind and upon the waters, / until they found me.",
    author: "Pablo Neruda",
    category: "love"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Dr. Martin Luther King, Jr.",
    category: "love"
  },
  {
    quote: "True love does have the power to redeem but only if we are ready for redemption. Love saves us only if we want to be saved.",
    author: "bell hooks",
    category: "love"
  },
  {
    quote: "But love has no uttermost, as the stars have no number and the sea no rest.",
    author: "Eleanor Farjeon",
    category: "love"
  },
  {
    quote: "Many waters cannot quench love, neither can the floods drown it.",
    author: "Song of Solomon 8:7",
    category: "love"
  },
  {
    quote: "the leaves believe / such letting go is love / such love is faith / such faith is grace / such grace is God. / i agree with the leaves.",
    author: "Lucille Clifton",
    category: "love"
  },
  {
    quote: "Hear my soul speak. Of the very instant that I saw you, Did my heart fly at your service.",
    author: "William Shakespeare",
    category: "love"
  },
  {
    quote: "This is true love. You think this happens every day?",
    author: "Westley",
    category: "love"
  },
  {
    quote: "I am amazed by peace / It is this possibility of you / asleep / And breathing in the quiet air.",
    author: "June Jordan",
    category: "love"
  },
  {
    quote: "Love him and let him love you. Do you think anything else under heaven really matters?",
    author: "James Baldwin",
    category: "love"
  },
  {
    quote: "Pass this love on, he'd say. It knows how to bend and will never break. It's the only thing with a give and take. The more it's used the more it makes.",
    author: "Joy Harjo",
    category: "love"
  },
  {
    quote: "I love you more than one more day.",
    author: "Joan Didion",
    category: "love"
  },
  {
    quote: "The story of human intimacy is one of constantly allowing ourselves to see those we love most deeply in a new, more fractured light. Look hard. Risk that.",
    author: "Cheryl Strayed",
    category: "love"
  },
  {
    quote: "When I see your face / There's not a thing that I would change / 'Cause you're amazing / Just the way you are.",
    author: "Bruno Mars",
    category: "love"
  },
  {
    quote: "Love is perhaps the only glimpse we are permitted of eternity.",
    author: "Helen Hayes",
    category: "love"
  },
  {
    quote: "Perhaps it is our imperfections that make us so perfect for one another.",
    author: "Jane Austen",
    category: "love"
  },
  {
    quote: "I see you everywhere, in the stars, in the river; to me you're everything that exists; the reality of everything.",
    author: "Virginia Woolf",
    category: "love"
  },
  {
    quote: "You've touched me without even touching me.",
    author: "Rupi Kaur",
    category: "love"
  },
  {
    quote: "Tis better to have loved and lost than never to have loved at all.",
    author: "Alfred Tennyson",
    category: "love"
  },
  {
    quote: "You gave me a forever within the numbered days, and I'm grateful.",
    author: "John Green",
    category: "love"
  }
];

// Fetch quotes by category
export async function fetchQuotesByCategory(category?: string): Promise<Quote[]> {
  // Filter by category if specified
  if (category && category !== 'all') {
    const filteredQuotes = motivationalQuotes.filter(q => q.category === category);
    return filteredQuotes.length > 0 ? filteredQuotes : [];
  }

  return motivationalQuotes;
}

// Search quotes by keyword/expression
export async function searchQuotes(query: string): Promise<Quote[]> {
  const searchTerm = query.toLowerCase();
  const filteredQuotes = motivationalQuotes.filter(quote => 
    quote.quote.toLowerCase().includes(searchTerm) ||
    quote.author.toLowerCase().includes(searchTerm) ||
    (quote.category && quote.category.toLowerCase().includes(searchTerm))
  );

  // If no matches found, return some quotes anyway
  if (filteredQuotes.length === 0) {
    return motivationalQuotes.slice(0, 5); // Return first 5 quotes as fallback
  }

  return filteredQuotes;
}

// Get a random quote
export async function getRandomQuote(): Promise<Quote> {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Get all unique categories for debugging
export function getAvailableCategories(): string[] {
  const categories = new Set<string>();
  motivationalQuotes.forEach(quote => {
    if (quote.category) {
      categories.add(quote.category);
    }
  });
  return Array.from(categories).sort();
}

// Track current index for each category for sequential display
const categoryIndexes: { [key: string]: number } = {
  'all': 0,
  'motivational': 0,
  'success': 0,
  'life': 0,
  'wisdom': 0,
  'happiness': 0,
  'sad': 0,
  'love': 0
};

// Get next quote sequentially from a category
export function getNextQuoteByCategory(category: string = 'all'): Quote {
  let quotes: Quote[];
  
  if (category === 'all') {
    quotes = motivationalQuotes;
  } else {
    quotes = motivationalQuotes.filter(q => q.category === category);
  }
  
  // If no quotes in category, fallback to all quotes
  if (quotes.length === 0) {
    quotes = motivationalQuotes;
    category = 'all';
  }
  
  // Get current index for this category
  const currentIndex = categoryIndexes[category] || 0;
  
  // Get the quote at current index
  const quote = quotes[currentIndex];
  
  // Increment index for next time (wrap around if we reach the end)
  categoryIndexes[category] = (currentIndex + 1) % quotes.length;
  
  return quote;
}

// Get first quote from a category (without incrementing index)
export function getFirstQuoteByCategory(category: string = 'all'): Quote {
  let quotes: Quote[];
  
  if (category === 'all') {
    quotes = motivationalQuotes;
  } else {
    // Only include quotes that exactly match the specified category
    quotes = motivationalQuotes.filter(q => q.category === category);
  }
  
  // If no quotes in category, fallback to all quotes
  if (quotes.length === 0) {
    quotes = motivationalQuotes;
    category = 'all';
  }
  
  // Reset index for this category to 0
  categoryIndexes[category] = 0;
  
  // Always return the FIRST quote from this category (index 0)
  return quotes[0];
}

// Reset index for a category (useful when switching categories)
export function resetCategoryIndex(category: string): void {
  // Make sure the category exists in our index tracker
  if (!categoryIndexes[category]) {
    categoryIndexes[category] = 0;
  } else {
    categoryIndexes[category] = 0;
  }
}

// Get the count for a specific category using our hardcoded values
export function getCategoryCount(category: string = 'all'): number {
  // Return the appropriate count based on category
  return CATEGORY_COUNTS[category as keyof typeof CATEGORY_COUNTS] || 0;
}
