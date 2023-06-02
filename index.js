const { Client, GatewayIntentBits } = require("discord.js");

require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith('create')) {
    const url = message.content.split('create')[1];
    return message.reply({
        content: "Generting Short ID for" + url,
    })
  } ;
  message.reply({
    content: "Hi from Bot",
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
