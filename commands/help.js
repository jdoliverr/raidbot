module.exports = {
    name: 'help',
    description: 'sends a list of commands',
    execute(message, args) {
        message.channel.send(`
        Commands-
**!spreadsheet** - Raid group spreadsheet
**!raid** - Raid Schedule
**!E5S** - E5S guide
**!E6S** - E6S guide
**!E7S** - E7S guide
**!E8Sone** - E8S guide part one
**!E8Stwo** - E8S guide part two
**!friend**
Healers
**!WHM** - White mage build
**!AST** - Astro build
**!SCH** - Scholar build
Tanks
**!WAR** - Warrior build
**!DRK** - Dark knight build
**!GNB** - Gunbreaker build
DPS
-Magical
**!BLM** - Black Mage build
**!SMN** - Summoner build
**!RDM** - Red Mage build
-Physical
**!DNC** - Dancer build
**!MCH** - Machinist build
**!BRD** - Bard build
-Melee
**!NIN** - Ninja build
**!SAM** - Samurai build
**!DRG** - Dragoon build
**!MNK** - Monk build
        `);
    }
};