<h1 align="center">
    🔮 Discord.js Akinator 🔮
</h1>

A Discord.js v13 Module that allows you to Create an Akinator Command for Your Discord Bot within Seconds of Installation.

[![NPM](https://nodei.co/npm/discord.js-akinator.png)](https://npmjs.com/package/discord.js-akinator)

## Features

- 🌎 <b>100+ Languages Supported!</b> | Lightning fast translation has been made possible by Google Translate and hard-coded mappings!

- ▶️ <b>Buttons!</b> | Don't want to type out responses to questions? Use discord's buttons to easily click your answer of choice!

- 🙋 <b>Child Mode!</b> | Want to filter out NSFW questions? Simply set this option to `true`!

- ⚡️ <b>Quick & Easy Setup</b> | This package was built with the intentions of working out-of-the-box. Only one parameter is required at least!

## Install Package

Let's take a look at how you can install this package into your Discord Bot Project.

`npm i discord.js-akinator --save`

For versions 3.0.0 and Above, you'll also need discord.js v13. This can easily be installed with:

`npm i discord.js@13 --save`

For versions earlier than 3.0.0, you'll need discord.js v12. However it is recommended you update to patch bugs and security vulnerabilities, as well as get the newest features from this package!

`npm i discord.js@12 --save`

## Example Code

```js
const { Client, Intents } = require("discord.js");
const akinator = require("discord.js-akinator");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log("Bot is Online")
});

const PREFIX = "!";

//Example options

const language = "en"; //The Language of the Game
const childMode = false; //Whether to use Akinator's Child Mode
const useButtons = true; //Whether to use Discord's Buttons

client.on("messageCreate", async message => {
    if(message.content.startsWith(`${PREFIX}akinator`)) {
        akinator(message, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            useButtons: useButtons //Defaults to "false"
        });
    }
});

client.login("Discord Bot Token")
```

## Contributors

- [ChaosArising (Josh_#9733)](https://github.com/ChaosArising) (Providing compatibility for Discord.js v13)

- [3061LRTAGSPKJMORMRT (Ashish#0540)](https://github.com/3061LRTAGSPKJMORMRT) (Error handling and writing much cleaner code)

## Contact Us

- 👋 Need Help? [Join Our Discord Server](https://discord.gg/P2g24jp)!

- 👾 Found a Bug, or Inaccurate Translations? [Open an Issue](https://github.com/WillTDA/Discord.js-Akinator-Package-Dev/issues), or Fork and [Submit a Pull Request](https://github.com/WillTDA/Discord.js-Akinator-Package-Dev/pulls) on our [GitHub Repository](https://github.com/WillTDA/Discord.js-Akinator-Package-Dev)!
