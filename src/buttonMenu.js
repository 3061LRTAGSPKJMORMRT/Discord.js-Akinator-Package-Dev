const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord.js");

/**
 * @param {Discord.Client} client The Discord Client.
 * @param {Discord.Message} message The Message Sent by the User.
 * @param {Discord.Message} botMessage The Message for the Bot to Send, also the message which will contain the buttons (Max. 8). MUST BE AN EMBED!
 * @param {MessageButton[]} buttons An Array of Buttons.
 * @param {Number} time Time in Milliseconds the Menu should last for.
 */

module.exports = async function (client, message, botMessage, buttons, time) {
    //check all our params exist
    if (!client) return console.log("Button Menu Error: No Client Provided!")
    if (!message) return console.log("Button Menu Error: No Message Provided!")
    if (!botMessage) return console.log("Button Menu Error: No Bot Message Provided!")
    if (!buttons) return console.log("Button Menu Error: No Buttons Provided!")
    if (!time) return console.log("Button Menu Error: No Time Provided!")
    //sort buttons into rows of four, as to build our menu
    let buttonRow = new MessageActionRow()
    let buttonRow2 = new MessageActionRow()
    let buttonRows = []

    for (let i = 0; i < buttons.length; i++) {
        if (i < 3) {
            buttonRow.addComponents(buttons[i]);
        }
        else {
            buttonRow2.addComponents(buttons[i])
        }
    }

    buttonRows.push(buttonRow)
    if (buttons.length >= 5) buttonRows.push(buttonRow2)

    botMessage = await botMessage.edit({ embeds: [botMessage.embeds[0]], components: buttonRows });
    // create our collector
    const filter = (i) => i.user == message.author.id;

    let selection;

    await message.channel.awaitMessageComponent({
        filter: filter,
        time: 60000,
        componentType: "BUTTON"
    })
        .then(async (i) => {
            selection = i;
        }).catch(() => {
            // do nothing
        });

    return selection;
}