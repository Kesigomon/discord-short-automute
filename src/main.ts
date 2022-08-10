import {Client, Message} from 'discord.js'
const TOKEN = process.env.BOT_TOKEN ?? ""

const onMessage = async (message: Message) => {
    try{
        if (!message.member || message.channelId !== "Something"){
            return
        }
        if (message.content.length < 20){
            await message.delete()
            await message.member.timeout(30, "20文字未満の発言をしてたため")
        }
    }
    catch (e) {
        console.error(e)
    }
}

const client = new Client({intents: 32767})

client.on('messageCreate', onMessage);

client.login(TOKEN)