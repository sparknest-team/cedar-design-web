---
permalink: /en/showcase/loading/
title: Loading and waiting
---

# Loading and waiting

Explore an event registration workspace. Try each component, hold all loading states, or start a two-second local wait. Labels in the live scenario are currently in Chinese.

1. Fill in registration information or use the button on its card to start a two-second wait.
2. Enable “全部保持加载” to compare every visible indicator; “重置加载” restores the state without clearing input.
3. Toggle editing independently, then compare default indicators and bottom lines on decorated fields.
4. Open the confirmation dialog to observe before-close feedback, including a rejected close.

<demo src="../../showcase/demos/loading-lab.vue"></demo>

This page focuses on input surfaces, data selection, actions and content loading. Ordinary events do not collect Promises. Upload keeps per-file progress and before-hook feedback; Scheduler persistence guards are documented on its own page.

## More before-hook scenarios

### Drawer

<demo src="../../../src/drawer/__demos__/guard-protocol.vue"></demo>

### Popconfirm

<demo src="../../../src/popconfirm/__demos__/guard-protocol.vue"></demo>

