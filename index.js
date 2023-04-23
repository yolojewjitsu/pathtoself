const { Telegraf, Markup, Input } = require('telegraf');
const config = require('./config.json');

const bot = new Telegraf(config.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    `⁃ Добро пожаловать в бот ПУТЬ К СЕБЕ! 🤍
    \nПожалуйста, не спеши ставить на MUTE, мы не будем отвлекать тебя лишней информацией.
    \n⁃ Пожалуйста, ответь всего на несколько вопросов.
    \n⁃ Бывало ли у тебя, что вроде всё понятно, знаешь откуда проблемы, но все равно это глобально не меняет ничего в жизни?`
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/ltMXNla.jpg'));
  await ctx.reply(
    'Выберите ответ:',
    Markup.inlineKeyboard([
      Markup.button.callback('ДА', 'yes'),
      Markup.button.callback('НЕТ', 'no'),
    ])
  );
});

bot.action(['yes', 'no'], async (ctx) => {
  await ctx.reply(
    `У меня есть хорошая новость! 😊 Даже если ты пылесосишь пустыню, ТЫ ОКЕЙ!
    \nЭто совершенно нормально, что знания сами по себе ничего не меняют.
    \nЗнание, что болит зуб, понимание причин этой боли, не вылечит его.
    \nДля этого нужен стоматолог!`
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/LUpa3BB.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.reply(
    `⁃ Надо ли говорить, что точно так же работает с личностным развитием, эмоциональным интеллектом и духовным ростом…
    \nМоя команда психологов - это лучшие «стоматологи души»!
    \nСмотри, что о нас говорят клиенты:`
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/aZJYWvy.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/pdUlFhE.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/CKGQQZB.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/ZbJp92n.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.reply(
  'Выберите ответ:',
  Markup.inlineKeyboard([
  Markup.button.callback('ДА', 'yes2'),
  Markup.button.callback('НЕТ', 'no2'),
  ])
  );
  });
  
  bot.action(['yes2', 'no2'], async (ctx) => {
  await ctx.reply('Спасибо за откровенность!');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  await ctx.reply(
  'Мы с командой даем очень сильное ускорение в развитии, делаем это нежно, этично и с любовью! \nСмотри, как выглядят наши клиенты:'
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await ctx.replyWithPhoto(Input.fromURL('https://imgur.com/a/vO9zlZ9.jpg'));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  await ctx.reply(
  'Обязательно зарегистрируйся в предзапись на сайте(ссылка) чтобы ничего не пропустить! \nА я больше не буду тебя отвлекать мой милый друг! \nНе отписывайся от этого бота, он даст тебе бонус на участие в программе «Путь к себе», где при желании ты точно сможешь изменить свою жизнь в лучшую сторону. \nДо скорых встреч 🤍'
  );
  });
  
  bot.launch();
