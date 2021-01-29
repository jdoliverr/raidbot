module.exports = {
    name: 'help',
    description: 'sends a list of commands',
    execute(message, args) {
        message.channel.send(`
        Commands-
**!notes** - Raid notes
**!spreadsheet** - Raid group spreadsheet
**!raid** - Raid Schedule
**!E9S** - E9 Savage guide
**!E10S** - E10 Savage guide
**!E11S** - E11 Savage guide
**!E12S** - E12 Savage guide
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