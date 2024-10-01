const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1. Animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Three traditional animal colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// 4. Seven rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Six rainbow colors using initials
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo using indg
const [, , , , , indg] = colors;

// 7. Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet for songs 2, 4, job, and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;