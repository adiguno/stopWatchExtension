import * as vscode from 'vscode';

let timerStatusBarItem: vscode.StatusBarItem;
let resetStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    let time = 0;
    let isTimerRunning = false;
    let timer: NodeJS.Timeout;

    timerStatusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );
    timerStatusBarItem.text = 'Begin Timer';
    timerStatusBarItem.show();
    timerStatusBarItem.command = 'helloworld.statusBarClick';
    context.subscriptions.push(timerStatusBarItem);

    resetStatusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );
    resetStatusBarItem.text = `$(stop-circle)`;
    resetStatusBarItem.show();
    resetStatusBarItem.command = 'helloworld.resetTimer';
    context.subscriptions.push(resetStatusBarItem);

    context.subscriptions.push(
        vscode.commands.registerCommand('helloworld.statusBarClick', () => {
            if (isTimerRunning) {
                isTimerRunning = false;
                clearInterval(timer);
            } else {
                isTimerRunning = true;

                timer = setInterval(function () {
                    time += 1;
                    timerStatusBarItem.text = formatTimer(time);
                }, 1000);
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('helloworld.resetTimer', async () => {
            isTimerRunning = false;
            clearInterval(timer);

            time = 0;
            timerStatusBarItem.text = 'Begin Timer';
        })
    );
}

// todo keep track of timer var here
export function deactivate() {}

function formatTimer(time: number): string {
    let hour = Math.floor(time / 3600);
    let minute = Math.floor((time % 3600) / 60);
    let second = Math.floor(time % 60);

    const hh = hour.toString().padStart(2, '0');
    const mm = minute.toString().padStart(2, '0');
    const ss = second.toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}
