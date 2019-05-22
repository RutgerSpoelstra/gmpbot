const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("ready", () => {
    console.log('${Client.user.username} is online!');
    Client.user.setActivity('itbykev.nl', { type: 'PLAYING' })
});

Client.on('guildMemberAdd', member => {
    const welcomeEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Welkom bij GMP! @' + member.user.username)
        .setThumbnail(member.user.avatarURL)
        .setAuthor(member.user.username)
        .addField('Welkom op de server! '+ member.user.username, 'Heb je vragen? stel die dan aan een van de staff leden. Wil jij het ip weten? doe dan !IP');
    member.guild.channels.get('580486395743830105').send(welcomeEmbed)
});

Client.on('message', message => {
    const ipEmbed = new Discord.RichEmbed()
        .setColor('#009ff')
        .setTitle('het ip is: itbykev.nl')
    if (message.content === '!ip') {
        message.channel.send(ipEmbed)
    }
});

Client.login(process.env.BOT_TOKEN);
