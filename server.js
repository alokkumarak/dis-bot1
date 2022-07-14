
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

 // for chat with ai bot
// const { Configuration, OpenAIApi } = require("openai-api");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_KEY,
// });


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
 
     if (term[0] === "message") {
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
     else if (term[0] == `!wiki`) {
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

      // let memeUrl = `https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact`;
     
      // const memeoptions = {
      //   method: "GET",
      //   headers: {
      //     "X-RapidAPI-Key": process.env.RAPID_KEY,
      //     "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
      //   },
      // };
      //  let memeData = await fetch(memeUrl, memeoptions);
      //  let memeRes = await memeData.json();
       
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

     else if(term[0]==`hi`){
      
         msg.reply(`${msg.content} ${msg.author}`);  
     }
    else if(term[0]==`live-score`){
      const crickUrl = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent";

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_KEY,
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

     const score=await fetch(crickUrl, options)
     const scoreRes=await score.json()   
     console.log(scoreRes.appIndex.webURL)
     msg.reply(`https://${scoreRes.appIndex.webURL}`);
    }
    else if(term[0]==`play`){
      const Playurl =
        "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv";

      const Playoptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":process.env.RAPID_KEY,
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };

     let playData= await fetch(Playurl, Playoptions)
     let PlayRes = await playData.json();
    //  console.log(PlayRes.tracks[0].preview_url)
     msg.reply(PlayRes.tracks[0].preview_url);
       
    }
    // else{
    //   msg.reply(`sorry...!!! ${msg.author}... i'm still learning`)
    //   return;
    // }
  

   }
  //  if (msg.channel.id == "997048677069750363") {
  //    if ((msg.content = `play`)) {
  //      const Playurl =
  //        "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv";

  //      const Playoptions = {
  //        method: "GET",
  //        headers: {
  //          "X-RapidAPI-Key":
  //            "e75f2ca447msh9c5e1bac0a12da5p150b0fjsn5f5f9b2643a0",
  //          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  //        },
  //      };

  //      let playData = await fetch(Playurl, Playoptions);
  //      let PlayRes = await playData.json();
  //      console.log(PlayRes.tracks[0].preview_url);
  //      msg.reply(PlayRes.tracks[0].uri);
  //    }
  //  }
  
}
