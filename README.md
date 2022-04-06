# CW 2 from WebTechnology Module by Samlpe or simply by 14402

## This is a basic Node.js note taking application with only 4 commands:
- add (for adding new note)
- remove (for removing an existing note)
- list (to view all saved notes)
- read (to view one specific note with its content)

## How to install the application
1. Firstly download the zip or clone repository to your local machine
2. Open terminal or command line in current repo and run `npm install` this will auto install all dependencies that were used during creating of this application
3. Run `node app.js *commands*`

## How to run commands
- `add` command must be used with 2 arguments `--title` and `--body`. Example: `node app.js add --title "Hello World" --body "This is the content of Hello World note"
- `remove` command must be used with 1 argument `--title`. Example: `node app.js remove --title "Hello World"`. This will remove the note that you have saved previously.
- `list` command does not require any arguments. Example: `node app.js list` will return list of all notes saved in notes.txt
- `read` command must be used with 1 argument `--title`. Example: `node app.js read --title "Hello World"`

## Dependencies
You can easily access all dependencies from `package.json` but surely I will mention them here in README as well:
</br>
`"express": "^4.17.3"`
</br>
`"yargs": "^12.0.5"`

## Lins and stuff

Here is a link to my [Github Repo](https://github.com/samlpes/cw2_webtech_14402.git)
Here is a link to my [Glitch]()

