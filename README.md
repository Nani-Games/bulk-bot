# Bulk Bot (Linux/Ubuntu)

With this bot you can send bulk messages to every single user on your server.

## Overview:

- [Legality](https://github.com/Nani-Games/bulk-bot#legality)
- [Installation](https://github.com/Nani-Games/bulk-bot#installation)
- [Configuration](https://github.com/Nani-Games/bulk-bot#configuration)
- [Usage](https://github.com/Nani-Games/bulk-bot#usage)
- [Invitation](https://github.com/Nani-Games/bulk-bot#invitation)
- [Starting the bot](https://github.com/Nani-Games/bulk-bot#starting-the-bot)
- [Restarting the bot](https://github.com/Nani-Games/bulk-bot#restarting-the-bot)
- [Stopping the bot](https://github.com/Nani-Games/bulk-bot#stopping-the-bot)
- [Contributing](https://github.com/Nani-Games/bulk-bot#contributing)
- [License](https://github.com/Nani-Games/bulk-bot#license)

## Legality

Please use the bot only within a reasonable scope. Harassing content or other unacceptable content may not be sent to users on Discord, even with a bot. The use is therefore at your own risk.

## Installation

Create a folder named ``bulkbot`` (you can name it as you want) and upload the files into this folder. Make sure that the file permissions are correct (permissions to be executable, and so on...). If you don't know how to do that, [click here](https://askubuntu.com/questions/229589/how-to-make-a-file-e-g-a-sh-script-executable-so-it-can-be-run-from-a-termi). Make sure that you are in the project folder (``cd bulkbot``) before you execute further commands.

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install discordjs (11.6.3):

```bash
npm install discord.js@11.6.3
```
Additionally install [screen](https://wiki.ubuntuusers.de/Screen/) to run your bot instance on your linux/ubuntu server later (This will be globally!).

## Configuration

Search the file ``config.json``. The content will look like this:

```json
{
    "logger": "[Bulk Bot] ",
    "admin_role": "<ADMIN-ROLENAME-HERE>",
    "logo": "<LOGO-URL-HERE>",
    "activity": "sending messages!",
    "version": "1.0.0",
    "author": "Ceytec",
    "prefix": "!",
    "token": "<BOT-TOKEN-HERE>",
    "invite": "https://discordapp.com/oauth2/authorize?client_id=<BOT-ID-HERE>&permissions=8&scope=bot",
    "guild": "<YOUR-GUILD-ID-HERE>",
    "servername": "<YOUR-GUILD-NAME-HERE>",
    "url": "<YOUR-HOMEPAGE-URL-HERE>",
    "id": "<BOT-ID-HERE>"
}
```
To configure the bot, you have to replace the placeholders with your information (e.g. ``<LOGO-URL-HERE>``→ https://my-server.com/images/my-logo.png):

``<ADMIN-ROLENAME-HERE>``: This means the name of the role on your server, that the administrators will have (e.g. "Admin"). Watch out for upper and lower case!

``<LOGO-URL-HERE>``: This has to be a direct link to the logo, that will be shown in the top right corner of the dm (e.g. https://my-server.com/images/my-logo.png).

``<BOT-TOKEN-HERE>``: This has to be the bot token. If you don't know what this is and how to get it, [click here](https://www.google.de/search?q=How+to+create+discord+bot+developer+portal&oq=How+to+create+discord+bot+developer+portal).

``<BOT-ID-HERE>``: And here the bot id. (Attention: There are more than one placeholder for that!)

``<YOUR-GUILD-ID-HERE>``: Get [your guilds ID](https://support.discordapp.com/hc/de/articles/206346498-Wie-finde-ich-meine-Server-ID-) and paste it here.

``<YOUR-GUILD-NAME-HERE>``: And now your guilds name (e.g. My cool Discord Server).

``<YOUR-HOMEPAGE-URL-HERE>`` (OPTIONAL): Here you can paste your own website. This will be a hyperlink in the dm messages.

## Usage

Go on your discord server, make sure you have the admin role you defined in the config file and type:
```
!bulk <your-message>
```
For Example:
```
!bulk Hey everybody! Welcome to my new cool server!
```

## Invitation

To invite your bot to your own server, open ``config.json`` and copy the "invite" link (make sure, that you replaced the
placeholder with your bot id!). Open the url and follow the steps. After that the bot should appear on your discord server. 

## Starting the bot

```bash
./start.sh
```

## Restarting the bot

```bash
./restart.sh
```

## Stopping the bot

```bash
./stop.sh
```

## Contributing
If you have any suggestions don't hestitate to send me them.

## License
[MIT](https://choosealicense.com/licenses/mit/)
