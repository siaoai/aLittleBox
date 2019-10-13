global.Discord = require("discord.js");
global.client = new Discord.Client();
global.config = require("config.json");
global.servers = require('servers.json')
const express = require('express');
global.set = new Set();
// User Config
global.title = config.title;

global.prefix = config.prefix;

global.color = config.color;

global.premcolor = config.premcolor;

global.author = package.author;

  // FiveM Bot API -> cdn:1234/api (HTTP)
  setInterval(function start() {
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    fs.writeFile('./modules/api.json', `
    {
    "ping": ${Math.round(client.ping)}, 
    "users": ${client.users.size}, 
    "servers": ${client.guilds.size}, 
    "uptime": ["${hours} hours", 
    "${minutes} minutes", "${seconds} seconds"], 
    "news_simplified": "${news}", 
    "news_html": "${news.html}"
    }`, 
    (err) => {
      if (err) { console.error(err) }
    });
    return start;
  }(), 600000);
});



client.login(config.token);
