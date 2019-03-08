const fs = require("fs");

//write out data
function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
 //parses the user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
        break;
    case "cat":
      commandLibrary.cat(userInput.slice(1));
        break;
    case "head":
      commandLibrary.head(userInput.slice(1));
        break;

    case "tail":
      commandLibrary.tail(userInput.slice(1));
        break;

    default: process.stdout.write('Command is not valid');
  }
}

//where we will store the logic of our commands
const commandLibrary = {
  "echo": function(userInput) {
    done(userInput);
  },
  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
        done(data);
    })
  },
    "head": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        //convert the string to utf 8 here.
        var text = data.toString('utf8');
        //cut out fifteen lines and join to new line.
        var textSlice = text.split('\n').slice(0,15).join('\n');
        var buffer = Buffer.from(textSlice, 'utf8');
        done(buffer);
      })
    },
    "tail": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        var text = data.toString('utf8');
        var textSlice = text.split('\n').slice(-15).join('\n');
        var buffer = Buffer.from(textSlice, 'utf8');
        done(buffer);
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
