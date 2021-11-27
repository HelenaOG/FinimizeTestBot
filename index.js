const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

const commands = [{
  name: 'start',
  description: 'Replies with a short guide helping you get started.'
},{
  name: 'help',
  description: 'Replies with FAQs and where you can find support.'
}
{   name: 'beginner',
  description: 'Replies with best beginner resources to start with.'

}]; 
console.log(CLIENT_ID)
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();