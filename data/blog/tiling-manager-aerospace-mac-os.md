---
title: 'Focus and Productivity with MacOS - Workspaces and Keyboard with Aerospace'
date: '2026-01-29'
tags: ['mac', 'workspaces', 'focus', 'keyboard', 'productivity', 'macos', 'tools', 'tech']
draft: false
canonicalUrl:https://vinayakg.dev/tiling-manager-aerospace-mac-os
summary: 'Complete guide to setting up Aerospace, walk through of various functions and finally leading to productivity and focussed workflows within MacOS'
---

I have been a big fan of keyboard-driven workflows and have been optimizing my daily routines for years now. Window management on macOS has always been a pain point - the default experience of dragging windows around, resizing them manually, and hunting for apps buried under other windows is a productivity killer.

I was experimenting with [Omarchy](https://omarchy.com/) on Linux recently, which is built on top of [Hyprland](https://hyprland.org/) - a fantastic tiling compositor for Wayland. The keyboard-first workflow was addictive, and I found myself wanting the same experience on my Mac. That's when I discovered [AeroSpace](https://github.com/nikitabobko/AeroSpace).

AeroSpace has completely transformed how I work on my Mac. If you've used i3, sway, or Hyprland on Linux, you'll feel right at home. For those unfamiliar, a tiling window manager automatically arranges your windows in a non-overlapping layout, and you control everything with keyboard shortcuts. No more mouse gymnastics.

## Why AeroSpace? 🚀

Before AeroSpace, I was using Spectacle (now discontinued) and then Rectangle. While they helped with basic window snapping, they never felt native to my keyboard-first workflow. AeroSpace changes the game with:

- **Workspaces**: Think of them as virtual desktops on steroids - I have 26+ workspaces mapped to keys
- **Automatic tiling**: Windows arrange themselves, no manual positioning
- **Service mode**: A special mode for window manipulation (more on this below)
- **Window detection rules**: Apps automatically go to their designated workspaces

## Installation

AeroSpace can be installed via Homebrew:

```bash
brew install --cask nikitabobko/tap/aerospace
```

The config file lives at `~/.aerospace.toml`. Once installed, AeroSpace runs in your menu bar and starts at login.

## My Configuration

I'll walk you through my curated config with explanations. This focuses on the essentials - workspaces with apps, navigation, and the powerful service mode.

### Basic Settings

```toml
# Start AeroSpace at login
start-at-login = true

# Normalizations help keep layouts clean and predictable
enable-normalization-flatten-containers = true
enable-normalization-opposite-orientation-for-nested-containers = true

# Padding for accordion layout (set 0 to disable)
accordion-padding = 30

# Default layout settings
default-root-container-layout = 'tiles'
default-root-container-orientation = 'auto'

# Mouse follows focus when switching monitors
on-focused-monitor-changed = ['move-mouse monitor-lazy-center']

[key-mapping]
preset = 'qwerty'
```

### Gaps Configuration

I like some breathing room between windows. These gaps make the layout visually cleaner:

```toml
[gaps]
inner.horizontal = 10
inner.vertical =   10
outer.left =       10
outer.bottom =     10
outer.top =        10
outer.right =      10
```

### Window Navigation (vim-style)

Navigate between windows without touching your mouse:

```toml
[mode.main.binding]
# Focus windows using vim-style hjkl keys
alt-h = 'focus left'
alt-j = 'focus down'
alt-k = 'focus up'
alt-l = 'focus right'
```

| Shortcut | Action |
|----------|--------|
| `Alt-H` | Focus window to the left |
| `Alt-J` | Focus window below |
| `Alt-K` | Focus window above |
| `Alt-L` | Focus window to the right |

### Window Swapping

Swap the focused window's position with an adjacent window:

```toml
[mode.main.binding]
# Swap windows using vim-style hjkl keys
ctrl-h = 'swap left'
ctrl-j = 'swap down'
ctrl-k = 'swap up'
ctrl-l = 'swap right'
```

| Shortcut | Action |
|----------|--------|
| `Ctrl-H` | Swap with window to the left |
| `Ctrl-J` | Swap with window below |
| `Ctrl-K` | Swap with window above |
| `Ctrl-L` | Swap with window to the right |

### Window Resizing

Quickly resize the focused window:

```toml
[mode.main.binding]
alt-minus = 'resize smart -50'
alt-equal = 'resize smart +50'
```

| Shortcut | Action |
|----------|--------|
| `Alt-Minus` | Shrink window by 50px |
| `Alt-Equal` | Grow window by 50px |

### Layout Controls

Switch between different layout modes:

```toml
[mode.main.binding]
alt-ctrl-h = 'layout horizontal'    # Force horizontal split
alt-ctrl-v = 'layout vertical'      # Force vertical split
alt-0 = 'balance-sizes'             # Make all windows equal size
alt-shift-0 = 'flatten-workspace-tree'  # Simplify nested layouts
alt-slash = 'layout tiles horizontal vertical'
alt-comma = 'layout accordion horizontal vertical'
```

### Workspace Switching

This is where AeroSpace shines. I've mapped `Alt` + key combinations to instantly launch and focus my most-used apps:

```toml
[mode.main.binding]
# Development
alt-1 = 'exec-and-forget open -a /Applications/Visual\ Studio\ Code.app'
alt-2 = 'exec-and-forget open -a /Applications/Ghostty.app'
alt-d = 'exec-and-forget open -a /Applications/Dbeaver.app'

# Browsers
alt-3 = 'exec-and-forget open -a /Applications/Brave\ Browser.app/'
alt-b = 'exec-and-forget open -a /Applications/Firefox.app'

# Communication
alt-4 = 'exec-and-forget open -a /Applications/Microsoft\ Outlook.app'
alt-5 = 'exec-and-forget open -a /Applications/Microsoft\ Teams.app'
alt-w = 'exec-and-forget open -a /Applications/WhatsApp.app'
alt-z = 'exec-and-forget open -a /Applications/zoom.us.app'

# AI Tools (Brave PWAs)
alt-6 = 'exec-and-forget open -b com.brave.Browser.app.fmgjjmmmlfnkbppncabfkddbjimcfncm' # Gmail
alt-7 = 'exec-and-forget open -b com.brave.Browser.app.kpmdbogdmbfckbgdfdffkleoleokbhod' # Perplexity
alt-8 = 'exec-and-forget open -b com.brave.Browser.app.fmpnliohjhemenmnlpbfagaolkdacoja' # Claude
alt-9 = 'exec-and-forget open -a /Applications/ChatGPT.app'

# Productivity
alt-a = 'exec-and-forget open -a /Applications/Utilities/Activity\ Monitor.app/'
alt-e = 'exec-and-forget open -a /Applications/Microsoft\ Excel.app'
alt-m = 'exec-and-forget open -a /Applications/Meld.app'
alt-n = 'exec-and-forget open -a /Applications/Microsoft\ OneNote.app/'
alt-o = 'exec-and-forget open -a /Applications/Overcast.app/'
alt-p = 'exec-and-forget open -a /Applications/Preview.app'
alt-r = 'exec-and-forget open -a /Applications/ResponsivelyApp.app'
alt-y = 'exec-and-forget open -a /Applications/FreeTube.app'

# Quick workspace toggle
alt-tab = 'workspace-back-and-forth'

# Multi-monitor (uncomment if needed)
# alt-shift-tab = 'move-workspace-to-monitor --wrap-around next'
```

The beauty here is that `Alt-1` doesn't just switch to workspace 1 - it launches VS Code if it's not running, or focuses it if it is. One key does everything.

### Moving Windows to Workspaces

Sometimes you want to send a window to a different workspace:

```toml
[mode.main.binding]
alt-shift-1 = 'move-node-to-workspace 1'
alt-shift-2 = 'move-node-to-workspace 2'
alt-shift-3 = 'move-node-to-workspace 3'
alt-shift-4 = 'move-node-to-workspace 4'
alt-shift-5 = 'move-node-to-workspace 5'
alt-shift-6 = 'move-node-to-workspace 6'
alt-shift-7 = 'move-node-to-workspace 7'
alt-shift-8 = 'move-node-to-workspace 8'
alt-shift-9 = 'move-node-to-workspace 9'
alt-shift-a = 'move-node-to-workspace A'
alt-shift-b = 'move-node-to-workspace B'
alt-shift-d = 'move-node-to-workspace D'
alt-shift-e = 'move-node-to-workspace E'
alt-shift-m = 'move-node-to-workspace M'
alt-shift-n = 'move-node-to-workspace N'
alt-shift-o = 'move-node-to-workspace O'
alt-shift-p = 'move-node-to-workspace P'
alt-shift-r = 'move-node-to-workspace R'
alt-shift-w = 'move-node-to-workspace W'
alt-shift-y = 'move-node-to-workspace Y'
alt-shift-z = 'move-node-to-workspace Z'
```

### Service Mode ⚡

Service mode is AeroSpace's power feature. Press `Alt-Shift-;` to enter it, and you get access to advanced window manipulation commands:

```toml
[mode.main.binding]
alt-shift-semicolon = 'mode service'

[mode.service.binding]
esc = ['reload-config', 'mode main']
r = ['flatten-workspace-tree', 'mode main']
f = ['layout floating tiling', 'mode main']
backspace = ['close-all-windows-but-current', 'mode main']

# Join windows (for creating custom layouts)
alt-shift-h = ['join-with left', 'mode main']
alt-shift-j = ['join-with down', 'mode main']
alt-shift-k = ['join-with up', 'mode main']
alt-shift-l = ['join-with right', 'mode main']

# Volume controls
down = 'volume down'
up = 'volume up'
shift-down = ['volume set 0', 'mode main']
```

| Shortcut (in service mode) | Action |
|----------------------------|--------|
| `Esc` | Reload config and exit service mode |
| `R` | Reset/flatten workspace layout |
| `F` | Toggle floating/tiling for current window |
| `Backspace` | Close all windows except current |
| `Alt-Shift-H` | Join window with container to the left |
| `Alt-Shift-J` | Join window with container below |
| `Alt-Shift-K` | Join window with container above |
| `Alt-Shift-L` | Join window with container to the right |

### Automatic Window Placement

This is where AeroSpace becomes magical. Define rules to automatically send apps to specific workspaces:

```toml
[[on-window-detected]]
if.app-id = 'com.microsoft.VSCode'
run = ['move-node-to-workspace 1']

[[on-window-detected]]
if.app-id = 'com.brave.Browser'
run = ['move-node-to-workspace 3']

[[on-window-detected]]
if.app-id = 'com.microsoft.teams2'
run = 'move-node-to-workspace 5'

[[on-window-detected]]
if.app-id = 'com.apple.finder'
run = ['move-node-to-workspace F']

[[on-window-detected]]
if.app-id = 'org.jkiss.dbeaver.core.product'
run = 'move-node-to-workspace D'
```

Now whenever I open VS Code, it automatically lands in workspace 1. Finder always goes to workspace F. No manual organization needed.

## Creating Multi-Window Layouts with Service Mode 🪟

By default, AeroSpace tiles windows vertically. But what if you want a grid layout like 2×2 or 3×2? Service mode's `join-with` commands make this easy.

### 2×2 Grid Layout (4 windows)

Starting position - 4 windows stacked vertically:

```
┌──────────────┐
│      W1      │
├──────────────┤
│      W2      │
├──────────────┤
│      W3      │
├──────────────┤
│      W4      │
└──────────────┘
```

**Steps:**

1. Focus **Window 3** (`Alt-J` twice from W1)
2. Enter service mode: `Alt-Shift-;`
3. Join with right: `Alt-Shift-L`
4. Focus **Window 2** (`Alt-K`)
5. Enter service mode: `Alt-Shift-;`
6. Join with left: `Alt-Shift-H`

**Result - 2×2 grid:**

```
┌───────┬───────┐
│  W1   │  W2   │
├───────┼───────┤
│  W3   │  W4   │
└───────┴───────┘
```

### 3×2 Grid Layout (6 windows)

Starting position - 6 windows stacked vertically:

```
┌──────────────┐
│      W1      │
├──────────────┤
│      W2      │
├──────────────┤
│      W3      │
├──────────────┤
│      W4      │
├──────────────┤
│      W5      │
├──────────────┤
│      W6      │
└──────────────┘
```

**Steps:**

1. Focus **Window 2** (`Alt-J` from W1)
2. Enter service mode: `Alt-Shift-;`
3. Join with right: `Alt-Shift-L` → W2 joins right of W1

4. Focus **Window 4** (`Alt-J` twice)
5. Enter service mode: `Alt-Shift-;`
6. Join with right: `Alt-Shift-L` → W4 joins right of W3

7. Focus **Window 6** (`Alt-J` twice)
8. Enter service mode: `Alt-Shift-;`
9. Join with right: `Alt-Shift-L` → W6 joins right of W5

**Result - 3×2 grid:**

```
┌───────┬───────┐
│  W1   │  W2   │
├───────┼───────┤
│  W3   │  W4   │
├───────┼───────┤
│  W5   │  W6   │
└───────┴───────┘
```

**Pro tip**: Use `Alt-0` (balance-sizes) after creating your layout to make all windows equal size. If things get messy, `Alt-Shift-;` then `R` resets the workspace to a flat layout.

## Quick Reference Card

| Category | Shortcut | Action |
|----------|----------|--------|
| **Navigation** | `Alt-H/J/K/L` | Focus left/down/up/right |
| **Swap** | `Ctrl-H/J/K/L` | Swap with left/down/up/right |
| **Resize** | `Alt-Minus/Equal` | Shrink/grow window |
| **Layout** | `Alt-Ctrl-H/V` | Force horizontal/vertical split |
| **Layout** | `Alt-0` | Balance all window sizes |
| **Workspace** | `Alt-[key]` | Switch to app/workspace |
| **Move Window** | `Alt-Shift-[key]` | Send window to workspace |
| **Service Mode** | `Alt-Shift-;` | Enter service mode |
| **Service: Join** | `Alt-Shift-H/J/K/L` | Join with left/down/up/right |
| **Service: Reset** | `R` | Flatten workspace layout |
| **Service: Float** | `F` | Toggle floating/tiling |

## Full Configuration

The curated config above covers the essentials. If you want my complete configuration with all workspaces and window detection rules, you can download it here:

📥 [Download full aerospace.toml](https://gist.github.com/vinayakg/b9bd0702eedff93ca169c1462dde0a93#file--aerospace-toml)

## Final Thoughts

AeroSpace has genuinely changed how I use my Mac. The combination of instant app launching, automatic window placement, and keyboard-driven layouts means I spend zero mental energy on window management. My hands stay on the keyboard, and apps are always exactly where I expect them.

If you're coming from Linux and missing i3/sway, or if you're just tired of manually arranging windows, give AeroSpace a try. The learning curve is about a day, and the productivity gains are permanent.

## References

- [AeroSpace GitHub](https://github.com/nikitabobko/AeroSpace)
- [AeroSpace Documentation](https://nikitabobko.github.io/AeroSpace/guide)
- [AeroSpace Commands Reference](https://nikitabobko.github.io/AeroSpace/commands)