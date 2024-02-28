// This project is licensed under the BSD 3-Clause license.
// See the LICENSE file in the project root for more information.

//–--------------------
// Default stats
//---------------------

const defaultSats = {
    strength: 19,
    dexterity: 19,
    constitution: 15,
    intelligence: 17,
    wisdom: 13,
    charisma: 13
};

const defaultSkills = {
    athletics: 13,
    acrobatics: 14,
    sleightOfHand: 19,
    stealth: 19,
    arcana: 15,
    history: 15,
    investigation: 17,
    nature: 17,
    religion: 15,
    animalHandling: 13,
    insight: 14,
    medicine: 13,
    perception: 13,
    survival: 13,
    deception: 13,
    intimidation: 13,
    performance: 13,
    persuasion: 13
};

const defaultInventory = [
    {
        name: 'staff',
        quantity: 1
    },
    {
        name: 'spellbook',
        quantity: 1
    }
];


const defaultSpells = {
    'Acid Splash': 'Create a splash of acid that targets a creature within 60 feet.',
    'Blade Ward': 'Protect yourself from damage for a brief moment.',
    'Chill Touch': 'Chill a target, preventing it from healing and dealing necrotic damage.',
    'Control Flames': 'Manipulate fire to extinguish or ignite flames.',
    'Create Bonfire': 'Create a magical bonfire that damages creatures in its area.',
    'Mage Hand': 'Summon an invisible hand to manipulate objects within 30 feet.',
    'Mending': 'Repair small objects or seams.',
    'Minor Illusion': 'Create a simple visual or auditory illusion.',
    'Prestidigitation': 'Perform minor magical tricks and effects.',
    'Ray of Frost': 'Shoot a freezing ray at a target, slowing its movement.',
    'Shield': 'Raise a magical barrier to protect yourself from attacks.',
    'Magic Missile': 'Unerring darts of force that automatically hit your target.',
    'Sleep': 'Put creatures to sleep within a certain area.',
    'Charm Person': 'Make someone friendly towards you.',
    'Find Familiar': 'Summon a magical creature to aid you.',
    'Misty Step': 'Teleport instantly to a nearby location.',
    'Mirror Image': 'Create illusory duplicates of yourself to confuse attackers.',
    'Web': 'Create sticky webs to trap enemies.',
    'Invisibility': 'Turn invisible for a period of time.',
    'Scorching Ray': 'Fire multiple rays of flame at different targets.'
};


//–--------------------
// Action descriptions
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
    "tame": ["wisdom", "animalHandling"],
    "swing": ["strength", "athletics"],
    "tumble": ["dexterity", "acrobatics"],
    "unlock": ["dexterity", "sleightOfHand"],
    "write": ["intelligence", "history"],
    "play": ["charisma", "performance"],
    "perform": ["charisma", "performance"],
    "dj": ["charisma", "performance"],
    "sing": ["charisma", "performance"]
}

const actionDescriptions = [
    ["completely fail to", "spectacularly fail to", "utterly fail to"], // 0
    ["unsuccessfully try to", "fail to"], // 1
    ["try to", "attempt to"], // 2
    [""], // 3
    ["successfully"], // 4
    ["masterfully", "professionally", "gracefully", "skilfully"] // 5
    [""] // Usual action
]

const actionResultDescriptions = [
    "spectacular fail!", // 0
    "fail!", // 1
    "uncertain outcome!", // 2
    "", // 3
    "success!", // 4
    "complete success!", // 5
    "" // Usual action
]

const experienceDistribution = [
    3, // 0
    3, // 1
    2, // 2
    2, // 3
    1, // 4
    1, // 5
    1, // Usual action
]

const maxTurn = 3; // Turns to show tips
const showtips = false;
const maxLevel = 20; // Max XP for a character
const debug = true;

//–--------------------
// Custom functions
//---------------------

function debugLog(message) {
    if (debug) {
        console.log(message)
    }
}

function checkSkill(skill) {
    if (state.skills[skill] <= 3) {
        return 'incompetent'
    }
    if (state.skills[skill] > 3 && state.skills[skill] < 5) {
        return 'a novice'
    }
    if (state.skills[skill] >= 5 && state.skills[skill] < 6) {
        return 'competent'
    }
    if (state.skills[skill] >= 6 && state.skills[skill] < 7) {
        return 'capable'
    }
    if (state.skills[skill] >= 7) {
        return 'good'
    }
}

function checkSkillDescriptor(skill) {
    if (state.skills[skill] <= 3) {
        return 'poor'
    }
    if (state.skills[skill] > 3 && state.skills[skill] < 5) {
        return 'fair'
    }
    if (state.skills[skill] >= 5 && state.skills[skill] < 6) {
        return 'okay'
    }
    if (state.skills[skill] >= 6 && state.skills[skill] < 7) {
        return 'capable'
    }
    if (state.skills[skill] >= 7) {
        return 'good'
    }
}

function randomNumber(max) {
    // From 0 to max
    return Math.floor(Math.random() * Math.floor(max));
}

function initialise() {
    // Set default stats, skills and turns
    debugLog("Initilizing first game")

    state.stats = defaultSats;
    state.skills = defaultSkills;
    state.inventory = defaultInventory;
    state.turn = 0;
    state.initialised = true;
    state.spells = defaultSpells;

    debugLog("stats " + state.stats);
}

function turnIncrease() {
    state.turn += 1;
    if (state.turn >= maxTurn) {
        state.turn = 0;
    }
}

function actionResultHandler(roll, index, singleAction, keyword) {
    actionDescription = actionDescriptions[index] // Gets description from the array above

    currentStat = availableActions[keyword][0].toLowerCase()
    currentSkill = availableActions[keyword][1].toLowerCase()

    debugLog("Current stat is " + currentStat);
    debugLog("Current skill is " + currentSkill);

    action = "\n>You " + actionDescription[randomNumber(actionDescription.length)] + " " + singleAction
    message = "Roll: " + roll.toString() + " – " + " +" + experienceDistribution[index] +
        " XP for " + currentStat + " and " + currentSkill

    if (state.stats[currentStat] < maxLevel) {
        state.stats[currentStat] += experienceDistribution[index] / 16
    }
    if (state.skills[currentSkill] < maxLevel) {
        state.skills[currentSkill] += experienceDistribution[index] / 8
    }

    debugLog(action)
    debugLog(message)

    return [action, message]
}

function simpleActionHandler(singleAction, keyword) {
    currentStat = availableActions[keyword][0].toLowerCase()
    currentSkill = availableActions[keyword][1].toLowerCase()

    action = "\n>You " + singleAction
    message = "+1 XP for " + currentStat + " and " + currentSkill

    if (state.stats[currentStat] < maxLevel) {
        state.stats[currentStat] += experienceDistribution[6] / 16
    }
    if (state.skills[currentSkill] < maxLevel) {
        state.skills[currentSkill] += experienceDistribution[6] / 8
    }

    debugLog(action)
    debugLog(message)

    return [action, message]
}

function singleActionHandler(singleAction, keyword) {
    debugLog("Single action: " + singleAction + " and keyword is: " + keyword)

    var currentStat = availableActions[keyword][0].toLowerCase() // Name of the stat of this action
    var roll = Math.round((randomNumber(19) + 1) + (state.stats[currentStat] - 8 / state.stats[currentStat] - 1)) // Weird-weird formula
    debugLog("Roll: " + roll.toString())

    if (availableActions[keyword][2]) { // Means it's a simple action like "Say". It doesn't require dependance on skill.
        debugLog("This action is a usual one")
        return simpleActionHandler(singleAction, keyword); // Success
    }

    switch (true) {
        case (roll <= 1):
            return actionResultHandler(roll, 0, singleAction, keyword);
        case (roll <= 5):
            return actionResultHandler(roll, 1, singleAction, keyword);
        case (roll <= 10):
            return actionResultHandler(roll, 2, singleAction, keyword);
        case (roll <= 15):
            return actionResultHandler(roll, 3, singleAction, keyword);
        case (roll <= 19):
            return actionResultHandler(roll, 4, singleAction, keyword);
        case (roll >= 20):
            return actionResultHandler(roll, 5, singleAction, keyword);
    }
}

function actionHandler(action) {

    if (action != undefined && !action.toLowerCase().includes("you")) { // Story mode
        if (!showtips) {
            return ["\n>You " + action];
        }
        return ["\n> " + action, tipsAndStats()]
    }

    action = action.substring(7); // Substring of 7, because start of the line look like: \n> You
    // That was, actualy, really confusing
    debugLog("Got actions: " + action);

    for (keyword of Object.keys(availableActions)) {
        if (action != undefined && action.toLowerCase().startsWith(keyword)) {
            return singleActionHandler(action, keyword);
        }
    }

    if (!showtips) {
        return ["\n>You " + action];
    }

    return ["\n>You " + action, tipsAndStats()]; // If no actions where found
}

function tipsAndStats() {
    turn = state.turn;
    switch (turn) {
        case 0:
            return `You are ${checkSkill('talk')} at talking to people and ${checkSkill('athlete')} at athletic actions. You are ${checkSkill('destroy')} at destruction and you are ${checkSkill('make')} at making things. In combat, you are ${checkSkillDescriptor('fight')}. You are ${checkSkill('repair')} at patching up things and ${checkSkill('heal')} at patching up people. Your observational skills are ${checkSkillDescriptor('discover')} and your deduction skills are ${checkSkillDescriptor('deduce')}. You are ${checkSkill('deceive')} at deceiving others and lying to people and ${checkSkill('sneak')} at sneaking around. Your ability to manipulate others and cause things to happen is ${checkSkillDescriptor('puppeteer')} and your perfomance skills are ${checkSkillDescriptor('perfomance')}.`;
        case maxTurn:
            state.turn = 0; // It'll keep going to the default case
        default:
            tips = ["Need to get better at a specific skill? Do that skill more often.",
                "XP is earned whenever you perform an action. Fails teach more than successes.",
                "Every so often, you'll see your skills shown in a big long paragraph. The AI sees this too, so if it sounds harsh the AI might be harsh as well!",
                `Permfomance is a vital skill for a musician. You're ${checkSkillDescriptor('perfomance')} at it.`
            ];
            return tips[randomNumber(tips.length - 1)]
    }
}

//–--------------------
// Default modifier
//---------------------

const modifier = (text) => {
    let modifiedText = text; // User input

    if (!state.initialised) { // It's a custom value
        initialise();
        return {
            text: modifiedText
        }
    }

    if (state.initialised) {
        turnIncrease();
        parsedAction = actionHandler(modifiedText); // User perfomed action with a custom RPG output style

        actionText = parsedAction[0]; // Text for the input
        messageText = "" + parsedAction[1]; // Tips'n'stuff

        state.message = messageText;
        return {
            text: actionText
        }
    }
}

