
// for reply on that message 
  //    msg.reply("hello hello gif lelo")
//   not reply only send message
//   msg.channel.send("helo yaha se message lelo");


const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  
});

const fetch =require('node-fetch')
require("dotenv").config();


client.login(process.env.BOTTOKEN);

client.on('ready', discordCreated)

function discordCreated(){
    console.log("hello discord")
}

const mulReply=[
    'first reply',
    'second reply',
    'third reply',
    'fourth reply',
    'fifth reply',
    'six reply',
    'seven reply',
]
  
client.on("message",messageReply)

async function messageReply(msg){
    // console.log(msg)

   if(msg.channel.id=="996692805609066496"){
       const term=msg.content.split("=");
 
      

     if (term[0]=== "message") {
       const rep = Math.floor(Math.random() * mulReply.length);
       msg.channel.send(mulReply[rep]);
     } 
     else if (term[0] === "gif") {
         let searchWord="meme";
         if(term.length > 1){
              searchWord=term.slice(1,term.length).join(" ");
         }
       let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHYAPI}&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`;
       let data = await fetch(url);
       let jsonData = await data.json();
       let index = Math.floor(Math.random() * jsonData.data.length);
       msg.reply(jsonData.data[index].url);
     }
     else if(term[0]==`hello bot`){
         msg.reply(`hello my friend @${msg.author.username}`);
     }
    //  add music

   }
  
}