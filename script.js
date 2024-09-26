// Kitty personalities
const kitty1 = {
    name: "Kitty 1",
    personality: "friendly"
};

const kitty2 = {
    name: "Kitty 2",
    personality: "shy"
};

// Possible interaction outcomes based on personalities
const outcomes = {
    friendly: {
        friendly: ["They like each other!", "They are best friends!"],
        shy: ["Kitty 1 makes Kitty 2 feel shy!", "Kitty 1 tries to play, but Kitty 2 is hesitant."]
    },
    shy: {
        friendly: ["Kitty 2 is unsure about Kitty 1's friendliness!", "Kitty 2 hides but peeks out at Kitty 1."],
        shy: ["They both stay quiet... maybe they'll warm up to each other."]
    }
};

// Function to generate random interaction
function generateInteraction(kittyA, kittyB) {
    const interactions = outcomes[kittyA.personality][kittyB.personality];
    return interactions[Math.floor(Math.random() * interactions.length)];
}

// Event listener for interaction button
document.getElementById('interact-button').addEventListener('click', function() {
    const result = generateInteraction(kitty1, kitty2);
    document.getElementById('interaction-result').textContent = result;
});
