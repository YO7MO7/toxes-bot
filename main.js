
const Discord = require('discord.js')
const client = new Discord.Client();
// توكن البوت
var token = "NzM4OTY3MDgxNTY2OTk0NDUz.XyTmuQ.DcqrtjqVhhne-SpCnnFdyuRH5-Y";
// الاختصار المستخدم في الاوامر
const prefix = "!bzbxbxxnxnbcnxnxnxndncncb";
// نشاط البوت
var activity = +help;
// حالة البوت
var status = "idle";
/**
* @param {Discord.Message} message The received message
*/
async function onMessage(message)
{
	try
	{
		{
			var arg_index = message.content.indexOf(' ');
			var command = message.content.slice(prefix.length);
			if(arg_index > 0) // != -1
				command = command.substr(0, arg_index - 1);
			const text = message.content.substr(arg_index + 1);
			switch(command)
			{
				case "help":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.author.send("```bc```");
						message.reply("Ay sir! I DMed you with my current abilities.");
					}
					else
					{
						message.reply("Help coming right away...");
						message.author.send().catch(() =>
						{
							message.reply("I couldn't send a direct message to you.. so I'll send you help here.")
							message.channel.areply("I couldn't send a direct message to you.. so I'll send you help here.")
						});
					}
				break;
				case "bc":
					if(message.member.hasPermission(Discord.Permissions.ALL))
					{
						message.reply('Copy that!');
						let members = await message.guild.members.fetch();
						var sentsuccess = 0;
						var bots = 0;
						var msg = "";
						members.forEach(member =>
						{
							try
							{
								if(!member.user.bot)
								{
									++sentsuccess;
									member.send(text).catch(() =>
									{
										//console.log("Couldn't send message to " + member.displayName);
										//msg += member.displayName;
										//message.channel.send(member.displayName);
										--sentsuccess;
									})(sentsuccess);
								}
								else
									++bots;
							}catch(exception)
							{
								console.log(exception);
							}
						});
						message.channel.send("Done, sir. Sent " + sentsuccess + "/" + (message.guild.memberCount - bots) + ".");
					}
					else
					{
						message.reply("Sorry, you're not allowed to command me that.");
					}
				break;
				case 'play':
				break;
			}
		}
	}catch(exception)
	{
		console.log("Exception Handled " + exception);
		message.channel.send("**Exception Handled**\n```js" + exception + "```");
	}
}
function onClientReady()
{
	console.log('Ready!');
	// Set the client user's presence
	client.user.setPresence({ activity: { name: activity }, status: status }).then(console.log).catch(console.error);

}


client.on('message', msg => {
    if (msg.content === '1') {
      msg.reply('**الرد**');
    }
  });

}
// Events
client.on("message", onMessage);   // On User Sending Message
client.on('ready', onClientReady); // On Bot Start

// Login
client.login(token);
