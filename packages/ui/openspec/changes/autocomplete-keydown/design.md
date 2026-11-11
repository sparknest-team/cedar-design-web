## Design

AutoComplete emits the native input keydown before its controller, which skips default-prevented events. The editor forwards the same event to the public instance. Vue owns once listeners across editor reopen; input method composition and existing candidate and editor state boundaries remain intact.
