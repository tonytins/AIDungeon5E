// This project is licensed under the BSD 3-Clause license.
// See the LICENSE file in the project root for more information.

//–--------------------
// Default stats
//---------------------

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