client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === "search") {
    const fetch = require("node-fetch");
    const word = interaction.options.getString("word");
    const data = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CSE}&q=${word}`
    )
      .then((res) => res.json())
      .catch(() => {});
    await interaction.reply({
      embeds: [
        {
          color: "BLUE",
          title: `${word}の検索結果`,
          fields: [
            {
              name: data.items[0].title,
              value: data.items[0].link + "\n" + data.items[0].snippet,
            },

            {
              name: data.items[1].title,
              value: data.items[1].link + "\n" + data.items[1].snippet,
            },
            {
              name: data.items[2].title,
              value: data.items[2].link + "\n" + data.items[2].snippet,
            },
            {
              name: data.items[3].title,
              value: data.items[3].link + "\n" + data.items[3].snippet,
            },
            {
              name: data.items[4].title,
              value: data.items[4].link + "\n" + data.items[4].snippet,
            },
            ,
          ],
        },
      ],
    });
  }
})
