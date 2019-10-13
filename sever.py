import discord
from discord.ext import commands
from classes import Cog_Extension
import json, asyncio, datetime

class Sever(Cog_Extension):
    def __init_(self,*args,**kwargs):
        super().__init__(*args,**kwargs)

        async def interval():
            await self.bot.wait_until_ready()
            self.channel = self.bot.get_channel(632816971255382038)
            while not self.bot.is_closed():
                await self.channel.send('$status')
                await asyncio.sleep(30)

        self.bg_sever = self.bot.loop.create_task(interval())        



def setup(bot):
    bot.add_cog(Sever(bot))