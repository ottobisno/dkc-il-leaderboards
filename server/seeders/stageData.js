const stageData = [
  {
    name: 'Jungle Hijinxs',
    world: worlds[0]._id
  },
  {
    name: 'Ropey Rampage',
    world: worlds[0]._id
  },
  {
    name: 'Reptile Rumble',
    world: worlds[0]._id
  },
  {
    name: 'Coral Capers',
    world: worlds[0]._id
  },
  {
    name: 'Barrel Cannon Canyon',
    world: worlds[0]._id
  },
  {
    name: "Very Gnawty's Lair",
    world: worlds[0]._id
  },
  {
    name: "Winky's Walkway",
    world: worlds[1]._id
  },
  {
    name: 'Mine Cart Carnage',
    world: worlds[1]._id
  },
  {
    name: 'Bouncy Bonanza',
    world: worlds[1]._id
  },
  {
    name: 'Stop & Go Station',
    world: worlds[1]._id
  },
  {
    name: 'Millstone Mayhem',
    world: worlds[1]._id
  },
  {
    name: "Necky's Nuts",
    world: worlds[1]._id
  },
  {
    name: 'Vulture Culture',
    world: worlds[2]._id
  },
  {
    name: 'Tree Top Town',
    world: worlds[2]._id
  },
  {
    name: 'Forest Frenzy',
    world: worlds[2]._id
  },
  {
    name: 'Temple Tempest',
    world: worlds[2]._id
  },
  {
    name: 'Orang-utan Gang',
    world: worlds[2]._id
  },
  {
    name: 'Clam City',
    world: worlds[2]._id
  },
  {
    name: 'Bumble B Rumble',
    world: worlds[2]._id
  },
  {
    name: 'Snow Barrel Blast',
    world: worlds[3]._id
  },
  {
    name: 'Slipside Ride',
    world: worlds[3]._id
  },
  {
    name: 'Ice Age Alley',
    world: worlds[3]._id
  },
  {
    name: 'Croctopus Chase',
    world: worlds[3]._id
  },
  {
    name: 'Torchlight Trouble',
    world: worlds[3]._id
  },
  {
    name: 'Rope Bridge Rumble',
    world: worlds[3]._id
  },
  {
    name: 'Really Gnawty Rampage',
    world: worlds[3]._id
  },
  {
    name: 'Oil Drum Alley',
    world: worlds[4]._id
  },
  {
    name: 'Trick Track Trek',
    world: worlds[4]._id
  },
  {
    name: 'Elevator Antics',
    world: worlds[4]._id
  },
  {
    name: 'Poison Pond',
    world: worlds[4]._id
  },
  {
    name: 'Mine Cart Madness',
    world: worlds[4]._id
  },
  {
    name: 'Blackout Basement',
    world: worlds[4]._id
  },
  {
    name: 'Boss Dumb Drum',
    world: worlds[4]._id
  },
  {
    name: 'Tanked Up Trouble',
    world: worlds[5]._id
  },
  {
    name: 'Manic Mincers',
    world: worlds[5]._id
  },
  {
    name: 'Misty Mine',
    world: worlds[5]._id
  },
  {
    name: 'Loopy Lights',
    world: worlds[5]._id
  },
  {
    name: 'Platform Perils',
    world: worlds[5]._id
  },
  {
    name: "Necky's Revenge",
    world: worlds[5]._id
  },
  {
    name: 'Jungle Hijinxs',
    world: worlds[6]._id
  },
  {
    name: 'Ropey Rampage',
    world: worlds[6]._id
  },
  {
    name: 'Reptile Rumble',
    world: worlds[6]._id
  },
  {
    name: 'Coral Capers',
    world: worlds[6]._id
  },
  {
    name: 'Barrel Cannon Canyon',
    world: worlds[6]._id
  },
  {
    name: "Very Gnawty's Lair",
    world: worlds[6]._id
  },
  {
    name: "Winky's Walkway",
    world: worlds[7]._id
  },
  {
    name: 'Mine Cart Carnage',
    world: worlds[7]._id
  },
  {
    name: 'Bouncy Bonanza',
    world: worlds[7]._id
  },
  {
    name: 'Stop & Go Station',
    world: worlds[7]._id
  },
  {
    name: 'Millstone Mayhem',
    world: worlds[7]._id
  },
  {
    name: 'Orang-utan Gang',
    world: worlds[8]._id
  },
  {
    name: 'Clam City',
    world: worlds[8]._id
  },
  {
    name: 'Bumble B Rumble',
    world: worlds[8]._id
  },
  {
    name: 'Vulture Culture',
    world: worlds[8]._id
  },
  {
    name: 'Tree Top Town',
    world: worlds[8]._id
  },
  {
    name: 'Forest Frenzy',
    world: worlds[8]._id
  },
  {
    name: 'Temple Tempest',
    world: worlds[8]._id
  },
  {
    name: 'Snow Barrel Blast',
    world: worlds[9]._id
  },
  {
    name: 'Slipside Ride',
    world: worlds[9]._id
  },
  {
    name: 'Ice Age Alley',
    world: worlds[9]._id
  },
  {
    name: 'Croctopus Chase',
    world: worlds[9]._id
  },
  {
    name: 'Torchlight Trouble',
    world: worlds[9]._id
  },
  {
    name: 'Rope Bridge Rumble',
    world: worlds[9]._id
  },
  {
    name: 'Really Gnawty Rampage',
    world: worlds[9]._id
  },
  {
    name: 'Oil Drum Alley',
    world: worlds[10]._id
  },
  {
    name: 'Trick Track Trek',
    world: worlds[10]._id
  },
  {
    name: 'Elevator Antics',
    world: worlds[10]._id
  },
  {
    name: 'Poison Pond',
    world: worlds[10]._id
  },
  {
    name: 'Mine Cart Madness',
    world: worlds[10]._id
  },
  {
    name: 'Blackout Basement',
    world: worlds[10]._id
  },
  {
    name: 'Boss Dumb Drum',
    world: worlds[10]._id
  },
  {
    name: 'Tanked Up Trouble',
    world: worlds[11]._id
  },
  {
    name: 'Manic Mincers',
    world: worlds[11]._id
  },
  {
    name: 'Misty Mine',
    world: worlds[11]._id
  },
  {
    name: 'Loopy Lights',
    world: worlds[11]._id
  },
  {
    name: 'Platform Perils',
    world: worlds[11]._id
  },
  {
    name: "Necky's Revenge",
    world: worlds[11]._id
  },
  {
    name: 'Jungle Hijinxs',
    world: worlds[12]._id
  },
  {
    name: 'Ropey Rampage',
    world: worlds[12]._id
  },
  {
    name: 'Reptile Rumble',
    world: worlds[12]._id
  },
  {
    name: 'Coral Capers',
    world: worlds[12]._id
  },
  {
    name: 'Barrel Cannon Canyon',
    world: worlds[12]._id
  },
  {
    name: "Very Gnawty's Lair",
    world: worlds[12]._id
  },
  {
    name: "Winky's Walkway",
    world: worlds[13]._id
  },
  {
    name: 'Mine Cart Carnage',
    world: worlds[13]._id
  },
  {
    name: 'Bouncy Bonanza',
    world: worlds[13]._id
  },
  {
    name: 'Stop & Go Station',
    world: worlds[13]._id
  },
  {
    name: 'Millstone Mayhem',
    world: worlds[13]._id
  },
  {
    name: "Necky's Nuts",
    world: worlds[13]._id
  },
  {
    name: 'Vulture Culture',
    world: worlds[14]._id
  },
  {
    name: 'Tree Top Town',
    world: worlds[14]._id
  },
  {
    name: 'Forest Frenzy',
    world: worlds[14]._id
  },
  {
    name: 'Temple Tempest',
    world: worlds[14]._id
  },
  {
    name: 'Orang-utan Gang',
    world: worlds[14]._id
  },
  {
    name: 'Clam City',
    world: worlds[14]._id
  },
  {
    name: 'Bumble B Rumble',
    world: worlds[14]._id
  },
  {
    name: 'Snow Barrel Blast',
    world: worlds[15]._id
  },
  {
    name: 'Slipside Ride',
    world: worlds[15]._id
  },
  {
    name: 'Ice Age Alley',
    world: worlds[15]._id
  },
  {
    name: 'Croctopus Chase',
    world: worlds[15]._id
  },
  {
    name: 'Torchlight Trouble',
    world: worlds[15]._id
  },
  {
    name: 'Rope Bridge Rumble',
    world: worlds[15]._id
  },
  {
    name: 'Really Gnawty Rampage',
    world: worlds[15]._id
  },
  {
    name: 'Oil Drum Alley',
    world: worlds[16]._id
  },
  {
    name: 'Trick Track Trek',
    world: worlds[16]._id
  },
  {
    name: 'Elevator Antics',
    world: worlds[16]._id
  },
  {
    name: 'Poison Pond',
    world: worlds[16]._id
  },
  {
    name: 'Mine Cart Madness',
    world: worlds[16]._id
  },
  {
    name: 'Blackout Basement',
    world: worlds[16]._id
  },
  {
    name: 'Boss Dumb Drum',
    world: worlds[16]._id
  },
  {
    name: 'Tanked Up Trouble',
    world: worlds[17]._id
  },
  {
    name: 'Manic Mincers',
    world: worlds[17]._id
  },
  {
    name: 'Misty Mine',
    world: worlds[17]._id
  },
  {
    name: 'Loopy Lights',
    world: worlds[17]._id
  },
  {
    name: 'Platform Perils',
    world: worlds[17]._id
  },
  {
    name: "Necky's Revenge",
    world: worlds[17]._id
  },
  {
    name: 'Jungle Hijinxs',
    world: worlds[18]._id
  },
  {
    name: 'Ropey Rampage',
    world: worlds[18]._id
  },
  {
    name: 'Reptile Rumble',
    world: worlds[18]._id
  },
  {
    name: 'Coral Capers',
    world: worlds[18]._id
  },
  {
    name: 'Barrel Cannon Canyon',
    world: worlds[18]._id
  },
  {
    name: "Very Gnawty's Lair",
    world: worlds[18]._id
  },
  {
    name: "Winky's Walkway",
    world: worlds[19]._id
  },
  {
    name: 'Mine Cart Carnage',
    world: worlds[19]._id
  },
  {
    name: 'Bouncy Bonanza',
    world: worlds[19]._id
  },
  {
    name: 'Stop & Go Station',
    world: worlds[19]._id
  },
  {
    name: 'Millstone Mayhem',
    world: worlds[19]._id
  },
  {
    name: "Necky's Nuts",
    world: worlds[19]._id
  },
  {
    name: 'Vulture Culture',
    world: worlds[20]._id
  },
  {
    name: 'Tree Top Town',
    world: worlds[20]._id
  },
  {
    name: 'Forest Frenzy',
    world: worlds[20]._id
  },
  {
    name: 'Temple Tempest',
    world: worlds[20]._id
  },
  {
    name: 'Orang-utan Gang',
    world: worlds[20]._id
  },
  {
    name: 'Clam City',
    world: worlds[20]._id
  },
  {
    name: 'Bumble B Rumble',
    world: worlds[20]._id
  },
  {
    name: 'Snow Barrel Blast',
    world: worlds[21]._id
  },
  {
    name: 'Slipside Ride',
    world: worlds[21]._id
  },
  {
    name: 'Ice Age Alley',
    world: worlds[21]._id
  },
  {
    name: 'Croctopus Chase',
    world: worlds[21]._id
  },
  {
    name: 'Torchlight Trouble',
    world: worlds[21]._id
  },
  {
    name: 'Rope Bridge Rumble',
    world: worlds[21]._id
  },
  {
    name: 'Really Gnawty Rampage',
    world: worlds[21]._id
  },
  {
    name: 'Oil Drum Alley',
    world: worlds[22]._id
  },
  {
    name: 'Trick Track Trek',
    world: worlds[22]._id
  },
  {
    name: 'Elevator Antics',
    world: worlds[22]._id
  },
  {
    name: 'Poison Pond',
    world: worlds[22]._id
  },
  {
    name: 'Mine Cart Madness',
    world: worlds[22]._id
  },
  {
    name: 'Blackout Basement',
    world: worlds[22]._id
  },
  {
    name: 'Boss Dumb Drum',
    world: worlds[22]._id
  },
  {
    name: 'Tanked Up Trouble',
    world: worlds[23]._id
  },
  {
    name: 'Manic Mincers',
    world: worlds[23]._id
  },
  {
    name: 'Misty Mine',
    world: worlds[23]._id
  },
  {
    name: 'Loopy Lights',
    world: worlds[23]._id
  },
  {
    name: 'Platform Perils',
    world: worlds[23]._id
  },
  {
    name: "Necky's Revenge",
    world: worlds[23]._id
  },
  {
    name: 'Pirate Panic',
    world: worlds[24]._id
  },
  {
    name: 'Mainbrace Mayhem',
    world: worlds[24]._id
  },
  {
    name: 'Gangplank Galley',
    world: worlds[24]._id
  },
  {
    name: "Lockjaw's Locker",
    world: worlds[24]._id
  },
  {
    name: 'Topsail Trouble',
    world: worlds[24]._id
  },
  {
    name: "Krow's Nest",
    world: worlds[24]._id
  },
  {
    name: 'Hot-Head Hop',
    world: worlds[25]._id
  },
  {
    name: "Kannon's Klaim",
    world: worlds[25]._id
  },
  {
    name: 'Lava Lagoon',
    world: worlds[25]._id
  },
  {
    name: 'Red-Hot Ride',
    world: worlds[25]._id
  },
  {
    name: "Squawk's Shaft",
    world: worlds[25]._id
  },
  {
    name: "Kleever's Kiln",
    world: worlds[25]._id
  },
  {
    name: 'Barrel Bayou',
    world: worlds[26]._id
  },
  {
    name: "Glimmer's Galleon",
    world: worlds[26]._id
  },
  {
    name: 'Krockhead Klamber',
    world: worlds[26]._id
  },
  {
    name: 'Rattle Battle',
    world: worlds[26]._id
  },
  {
    name: 'Slime Climb',
    world: worlds[26]._id
  },
  {
    name: 'Bramble Blast',
    world: worlds[26]._id
  },
  {
    name: "Kudgel's Kontest",
    world: worlds[26]._id
  },
  {
    name: 'Hornet Hole',
    world: worlds[27]._id
  },
  {
    name: 'Target Terror',
    world: worlds[27]._id
  },
  {
    name: 'Bramble Scramble',
    world: worlds[27]._id
  },
  {
    name: 'Rickety Race',
    world: worlds[27]._id
  },
  {
    name: 'Mudhole Marsh',
    world: worlds[27]._id
  },
  {
    name: 'Rambi Rumble',
    world: worlds[27]._id
  },
  {
    name: 'King Zing Sting',
    world: worlds[27]._id
  },
  {
    name: 'Ghostly Grove',
    world: worlds[28]._id
  },
  {
    name: 'Haunted Hall',
    world: worlds[28]._id
  },
  {
    name: 'Gusty Glade',
    world: worlds[28]._id
  },
  {
    name: 'Parrot Chute Panic',
    world: worlds[28]._id
  },
  {
    name: 'Web Woods',
    world: worlds[28]._id
  },
  {
    name: 'Kreepy Krow',
    world: worlds[28]._id
  },
  {
    name: 'Arctic Abyss',
    world: worlds[29]._id
  },
  {
    name: 'Windy Well',
    world: worlds[29]._id
  },
  {
    name: 'Castle Crush',
    world: worlds[29]._id
  },
  {
    name: "Clapper's Cavern",
    world: worlds[29]._id
  },
  {
    name: 'Chain Link Chamber',
    world: worlds[29]._id
  },
  {
    name: 'Toxic Tower',
    world: worlds[29]._id
  },
  {
    name: "Screech's Sprint",
    world: worlds[30]._id
  },
  {
    name: 'K. Rool Duel',
    world: worlds[30]._id
  },
];

export default stageData;
