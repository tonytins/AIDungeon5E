// This project is licensed under the BSD 3-Clause license.
// See the LICENSE file in the project root for more information.

//–--------------------
// Default stats
//---------------------

const availableActions = {
    "balance": ["dexterity", "athletics"],
    "make him": ["charisma", "deception"],
    "make her": ["charisma", "deception"],
    "make them": ["charisma", "deception"],
    "force him": ["strength", "intimidation"],
    "force her": ["strength", "intimidation"],
    "cast": ["intelligence", "arcana"],
    "force them": ["strength", "intimidation"],
    "make sure": ["wisdom", "persuasion", true],
    "make": ["intelligence", "craft"],
    "destroy": ["strength", "sleightOfHand"],
    "attack": ["strength", "athletics"],
    "fight": ["strength", "athletics"],
    "slit": ["dexterity", "stealth"],
    "battle": ["strength", "athletics"],
    "bandage": ["wisdom", "medicine"],
    "stab": ["dexterity", "stealth"],
    "murder": ["strength", "intimidation"],
    "hit": ["strength", "athletics"],
    "kill": ["strength", "intimidation"],
    "strike": ["strength", "athletics"],
    "shoot": ["dexterity", "sleightOfHand"],
    "ambush": ["dexterity", "stealth"],
    "kidnap": ["dexterity", "stealth"],
    "befriend": ["charisma", "persuasion"],
    "threaten": ["strength", "intimidation"],
    "break": ["strength", "sleightOfHand"],
    "build": ["intelligence", "craft"],
    "charm": ["charisma", "persuasion"],
    "climb": ["strength", "athletics"],
    "conceal": ["dexterity", "stealth"],
    "conclude": ["intelligence", "investigation"],
    "deduce": ["intelligence", "investigation"],
    "craft": ["intelligence", "craft"],
    "crawl": ["dexterity", "stealth"],
    "deceive": ["charisma", "deception"],
    "dive": ["strength", "athletics"],
    "drag": ["strength", "athletics"],
    "drive": ["dexterity", "acrobatics"],
    "ensnare": ["dexterity", "sleightOfHand"],
    "escape": ["dexterity", "stealth"],
    "evade": ["dexterity", "stealth"],
    "fix": ["intelligence", "craft"],
    "flip": ["dexterity", "acrobatics"],
    "grow": ["wisdom", "nature"],
    "harvest": ["wisdom", "nature"],
    "heal": ["wisdom", "medicine"],
    "patch up": ["wisdom", "medicine"],
    "restore": ["wisdom", "medicine"],
    "hack": ["intelligence", "arcana"],
    "investigate": ["intelligence", "investigation", true],
    "discover": ["intelligence", "investigation"],
    "jump": ["strength", "athletics", true],
    "know": ["intelligence", "history"],
    "lasso": ["dexterity", "sleightOfHand"],
    "lie": ["charisma", "deception"],
    "lift": ["strength", "athletics"],
    "pull": ["strength", "athletics"],
    "push": ["strength", "athletics"],
    "read": ["intelligence", "investigation", true],
    "rappel": ["strength", "athletics"],
    "restrain": ["strength", "athletics"],
    "ride": ["dexterity", "acrobatics"],
    "run from": ["dexterity", "acrobatics"],
    "run away": ["dexterity", "acrobatics"],
    "run": ["strength", "athletics", true],
    "walk": ["dexterity", "acrobatics", true],
    "search": ["intelligence", "investigation"],
    "find": ["intelligence", "investigation"],
    "sing": ["charisma", "performance"],
    "speak": ["charisma", "persuasion", true],
    "chat": ["charisma", "persuasion"],
    "talk": ["charisma", "persuasion", true],
    "say": ["charisma", "persuasion", true],
    "slide": ["dexterity", "acrobatics"],
    "sneak": ["dexterity", "stealth"],
    "steal": ["dexterity", "sleightOfHand"],
    "swim": ["strength", "athletics"],
    "swing": ["strength", "athletics"],
    "tame": ["wisdom", "animalHandling"],
    "tumble": ["dexterity", "acrobatics"],
    "unlock": ["dexterity", "sleightOfHand"],
    "write": ["intelligence", "history"],
    "play": ["charisma", "performance"],
    "perform": ["charisma", "performance"],
    "dj": ["charisma", "performance"],
    "sing": ["charisma", "performance"]
}


const experienceDistribution = [
    3,                                                                  // 0
    3,                                                                  // 1
    2,                                                                  // 2
    2,                                                                  // 3
    1,                                                                  // 4
    1,                                                                  // 5
    1,                                                                  // Usual action
]

//–--------------------
// Custom functions
//---------------------

function checkForActions(text) {
    for (keyword of Object.keys(availableActions)) {
        if (text.toLowerCase().includes("you " + keyword)) {
            currentStat = availableActions[keyword][0].toLowerCase()
            currentSkill = availableActions[keyword][1].toLowerCase()

            if (state.stats[currentStat] < 20) {
                state.stats[currentStat] += experienceDistribution[6] / 16
            }
            if (state.skills[currentSkill] < 20) {
                state.skills[currentSkill] += experienceDistribution[6] / 8
            }
        }
    }
}

//–--------------------
// Default modifier
//---------------------


const modifier = (text) => {
    let modifiedText = text;

    checkForActions(text);
    return { text: modifiedText }
}

modifier(text)