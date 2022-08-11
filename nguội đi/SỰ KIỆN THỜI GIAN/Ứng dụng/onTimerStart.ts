const cooldownLayout = [
    ["COOLDOWN START", "COOLDOWN END"],
    ["TIMER_START", "TIMER_END"],
    ["END", "START"],
    ["TEXT<'Hello timers'>", "INPUT<'text', handler, profiles::TIMER_START>"]
]
let window = Object<Array>(cooldownLayout)
 window['--INPUT--'].Seekbar[0, 100].seek[
    [0],
    [seekbar.Start],
    [100],
    [seekbar.End],
    [seekbar]
]
 window['--INPUT--'].function[3]{...}
 window['IMPORT FILE'].URL("https://cooldown.qoopoo.cn/cooldown/COOLDOWN.ts")
 window['IMPORT FILE'].URL("https://cooldown.qoopoo.cn/cooldown/COOLDOWN.ui.ts")
 window['IMPORT FILE'].URL("https://cooldown.qoopoo.cn/cooldown/COOLDOWN_SOUNDS.ts")
 window['IMPORT FILE'].URL("https://cooldown.qoopoo.cn/cooldown/COOLDOWN_IMAGES.ts")
