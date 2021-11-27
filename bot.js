const { Client, Intents } = require('discord.js');
const keepAlive = require("./server")

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'start') {
    await interaction.reply('Hi there! Take these steps to help you get started:
    1. Introduce yourself in the #Introduction channel. 
    2. Identify your CryptoInvesting Persona with the Persona Poll.
    3. Next explore the Finimize Resource platform.
    4. For more specific guidance type: /help or /beginner
    
    By participating in this community you agree to our rules.');

  } else if (interaction.commandName === 'help') {
    await interaction.reply('FAQ'S:
    What’s happening today: Check the #Announcements channel.
    Where to give feedback or find support: the #Feedback channel
    Where to attend events: the #Events  channel.
    Where to share your questions in an event: #Events QNA Channel
    How to connect with the community: Introduce yourself, chat here, and Hang out in the coffee shop.
    Where to get started: Check this out');
  }

 } else if (interaction.commandName === 'beginner') {
    await interaction.reply('Here are the best beginner resources to start with: (link to Notion Beginner  page)');
  }

});

keepAlive()
client.login(token);