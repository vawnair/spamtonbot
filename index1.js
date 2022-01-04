const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  // This code runs whenever the bot started up. It prints this message to the terminal.
  console.log(`Ready, my name is ${client.user.tag}.`);
});

client.on('message', message => {
  // This code runs whenever a message is sent

  const args = message.content.split(" ");

  // Check if the message starts with !spam
  if (args[0] == "!spam") {
    // Check if a number was provided, or anything at all
    if (!args[1] || isNaN(args[1])) return message.channel.send("u forgor how many times... omg..");
    // Check if a message to send was provided
    if (!args[2]) return message.channel.send("tell me what i have to repeat dumbass");

    const amountOfMessages = args[1];
    let messageToSend = [...args];
    // JS devs, don't shout at me please
    messageToSend.shift();
    messageToSend.shift();
    messageToSend = messageToSend.join(" ");

    // Loop that repeats the correct amount of times
    for (let i = 0; i < amountOfMessages; i++) {
      // Send message to channel with provided content
      message.channel.send(messageToSend);
    }
  }
});

// Login to Discord, replace token with your token.
client.login('OTI3ODEyOTA0NDMzMTAyODc4.YdPrGg.Jq-3H1WUba5zEBrLiLConLxRlSA');