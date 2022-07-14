
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
 
     if (term[0] === "hi") {
       const rep = Math.floor(Math.random() * mulReply.length);
       msg.channel.send(mulReply[rep]);
     } 
    //  gif
     else if (term[0] === "!gif") {
       let searchWord = "meme";
       if (term.length > 1) {
         searchWord = term.slice(1, term.length).join(" ");
       }
       let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHYAPI}&q=${searchWord}&limit=25&offset=0&rating=g&lang=en`;
       let data = await fetch(url);
       let jsonData = await data.json();
       let index = Math.floor(Math.random() * jsonData.data.length);
       msg.reply(jsonData.data[index].url);
     }
     // add wikipedia articals
     else if (term[0] == `!search`) {
       let wikiSearch = "meme";
       if (term.length > 1) {
         wikiSearch = term.slice(1, term.length).join(" ");
       }
       let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiSearch}&format=json`;
       console.log(wikiSearch);
       let wikiData = await fetch(wikiUrl);
       let wikiRes = await wikiData.json();
       console.log(wikiRes)
       if(wikiRes[3][0]!=undefined){
         msg.reply(wikiRes[3][0]);
       }
       else{
         msg.reply("sorry!! no result found, try to search only 1 or 2 words");
       }
     }
    //  add meme
    else if(term[0]==`!meme`){
      // let searchMeme='meme'
      // if(term.length>1){
      //   searchMeme=term.slice(1,term.length).join(" ")
      // }
      let memeUrl = `https://www.reddit.com/r/memes.json`;
      let memeData=await fetch(memeUrl)
      let memeRes=await memeData.json()

      let memeInd = Math.floor(Math.random() * memeRes.data.children.length);
      msg.reply(memeRes.data.children[memeInd].data.url_overridden_by_dest);
    }
    // motivation
    else if(term[0]==`!motivation`){
      let motUrl = `https://type.fit/api/quotes`;
      let motData=await fetch(motUrl)
      let motRes=await motData.json()
     
      motIndex = Math.floor(Math.random() * motRes.length);
       motText = motRes[motIndex].text;
      motAut =  motRes[motIndex].author != null ? motRes[motIndex].author : "no author";
      msg.reply(`thougnt=(${motText})........!!!! And This message is Given By=(${motAut})`)
    }
     //  add music
     else if (term[0] == `hello bot`) {
       msg.reply(`hello friend @${msg.author.username}`);
     }
  

   }
  
}
