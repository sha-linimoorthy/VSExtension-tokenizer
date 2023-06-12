// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tokenize" is now active!');

	let disposable = vscode.commands.registerCommand('tokenize.tokens', function () {
	const CONTRACTION_MAP = {
		"ain't": "am not",
		"aren't": "are not",
		"can't": "cannot",
		"can't've": "cannot have",
		"could've": "could have",
		"couldn't": "could not",
		"couldn't've": "could not have",
		"didn't": "did not",
		"doesn't": "does not",
		"don't": "do not",
		"hadn't": "had not",
		"hadn't've": "had not have",
		"hasn't": "has not",
		"haven't": "have not",
		"he'd": "he had",
		"he'd've": "he would have",
		"he'll": "he will",
		"he'll've": "he will have",
		"he's": "he has",
		"how'd": "how did",
		"how'd'y": "how do you",
		"how'll": "how will",
		"how's": "how has",
		"I'd": "I had",
		"I'd've": "I would have",
		"I'll": "I will",
		"I'll've": "I will have",
		"I'm": "I am",
		"I've": "I have",
		"isn't": "is not",
		"it'd": "it had",
		"it'd've": "it would have",
		"it'll": "it will",
		"it'll've": "it will have",
		"it's": "it has",
		"let's": "let us",
		"ma'am": "madam",
		"mayn't": "may not",
		"might've": "might have",
		"mightn't": "might not",
		"mightn't've": "might not have",
		"must've": "must have",
		"mustn't": "must not",
		"mustn't've": "must not have",
		"needn't": "need not",
		"needn't've": "need not have",
		"o'clock": "of the clock",
		"oughtn't": "ought not",
		"oughtn't've": "ought not have",
		"shan't": "shall not",
		"sha'n't": "shall not",
		"shan't've": "shall not have",
		"she'd": "she had",
		"she'd've": "she would have",
		"she'll": "she will",
		"she'll've": "she will have",
		"she's": "she has",
		"should've": "should have",
		"shouldn't": "should not",
		"shouldn't've": "should not have",
		"so've": "so have",
		"so's": "so as",
		"that'd": "that would",
		"that'd've": "that would have",
		"that's": "that has",
		"there'd": "there had",
		"there'd've": "there would have",
		"there's": "there has",
		"they'd": "they had",
		"they'd've": "they would have",
		"they'll": "they will",
		"they'll've": "they will have",
		"they're": "they are",
		"they've": "they have",
		"to've": "to have",
		"wasn't": "was not",
		"we'd": "we had",
		"we'd've": "we would have",
		"we'll": "we will",
		"we'll've": "we will have",
		"we're": "we are",
		"we've": "we have",
		"weren't": "were not",
		"what'll": "what will",
		"what'll've": "what will have",
		"what're": "what are",
		"what's": "what has",
		"what've": "what have",
		"when's": "when has",
		"when've": "when have",
		"where'd": "where did",
		"where's": "where has",
		"where've": "where have",
		"who'll": "who will",
		"who'll've": "who will have",
		"who's": "who has",
		"who've": "who have",
		"why's": "why has",
		"why've": "why have",
		"will've": "will have",
		"won't": "will not",
		"won't've": "will not have",
		"would've": "would have",
		"wouldn't": "would not",
		"wouldn't've": "would not have",
		"y'all": "you all",
		"y'all'd": "you all would",
		"y'all'd've": "you all would have",
		"y'all're": "you all are",
		"y'all've": "you all have",
		"you'd": "you had",
		"you'd've": "you would have",
		"you'll": "you will",
		"you'll've": "you will have",
		"you're": "you are",
		"you've": "you have"
	  };
	  

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

		let input=vscode.window.activeTextEditor;
		let text=input.document.getText();
		input=String(input)
		console.log(input)
		Object.keys(CONTRACTION_MAP).forEach((contraction) => {
			const regex = new RegExp(`\\b${contraction}\\b`, 'gi');
			text = text.replace(regex, CONTRACTION_MAP[contraction]);
		});
		let sentence = text.toLowerCase(); // Convert to lowercase

  		sentence = sentence.replace(/[^a-zA-Z0-9\s]/g, ""); // Remove special characters
  		let tokens = sentence.split(/\s+/); // Split into tokens
		// Display a message box to the user
		let result = tokens.filter((token) => token.trim().length > 0);
		let message = result.join(" ");
		vscode.window.showInformationMessage(message);

		let outputChannel = vscode.window.createOutputChannel('Tokenize');
		outputChannel.appendLine('[' + result.join(', ') + ']'); // Display tokens as an array
		outputChannel.show();

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
