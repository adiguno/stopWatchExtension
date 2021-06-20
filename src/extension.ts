import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    // console.log('Congratulations, your extension "helloworld" is now active!');

    let timer = 0;
    let isTimerRunning = false;

    myStatusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );
    myStatusBarItem.text = 'some timer text';
    myStatusBarItem.show();
    // myStatusBarItem.
    context.subscriptions.push(myStatusBarItem);

    context.subscriptions.push(
        vscode.commands.registerCommand('helloworld.startTimer', async () => {
            isTimerRunning = true;

            if (isTimerRunning) {
                var asdf = setInterval(function () {
                    timer += 1;
                    myStatusBarItem.text = `timer: ${timer}`;
                }, 1000);
            }
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('helloworld.stopTimer', async () => {
            clearInterval(asdf);
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('helloworld.resetTimer', async () => {})
    );

    // let disposable = vscode.commands.registerCommand(
    //     'helloworld.helloWorld',
    //     () => {
    //         vscode.window.showInformationMessage('Hello chat from HelloWorld!');
    //     }
    // );

    // context.subscriptions.push(disposable); // gets return value from dispo

    // context.subscriptions.push(
    //     vscode.commands.registerCommand('helloworld.askQuestion', async () => {
    //         const answer = await vscode.window.showInformationMessage(
    //             'How was your day?',
    //             'good',
    //             'bad'
    //         );

    //         if (answer === 'bad') {
    //             vscode.window.showInformationMessage('sorry to hear that');
    //         } else {
    //             console.log(answer);
    //         }
    //     })
    // );

    // register a command that is invoked when the status bar
    // item is selected
    // const myCommandId = 'helloworld.showSelectionCount';
    // context.subscriptions.push(
    //     vscode.commands.registerCommand(myCommandId, () => {
    //         const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
    //         vscode.window.showInformationMessage(
    //             `Yeah, ${n} line(s) selected... Keep going!`
    //         );
    //     })
    // );

    // // create a new status bar item that we can now manage
    // myStatusBarItem = vscode.window.createStatusBarItem(
    //     vscode.StatusBarAlignment.Right,
    //     100
    // );
    // myStatusBarItem.command = myCommandId;
    // context.subscriptions.push(myStatusBarItem);

    // // register some listener that make sure the status bar
    // // item always up-to-date
    // context.subscriptions.push(
    //     vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem)
    // );
    // context.subscriptions.push(
    //     vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem)
    // );

    // // update status bar item once at start
    // updateStatusBarItem();
}

// todo keep track of timer var here
export function deactivate() {}

// function updateStatusBarItem(): void {
//     const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
//     if (n > 0) {
//         myStatusBarItem.text = `asdfasdfasdfas ${n} line(s) selected`;
//         myStatusBarItem.show();
//     } else {
//         myStatusBarItem.hide();
//     }
// }

// function getNumberOfSelectedLines(
//     editor: vscode.TextEditor | undefined
// ): number {
//     let lines = 0;
//     if (editor) {
//         lines = editor.selections.reduce(
//             (prev, curr) => prev + (curr.end.line - curr.start.line),
//             0
//         );
//     }
//     return lines;
// }
