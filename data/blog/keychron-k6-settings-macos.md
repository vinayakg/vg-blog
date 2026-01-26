---
title: 'Keychron K6 Setup Guide for Mac with Karabiner'
date: '2026-01-23'
tags: ['mac', 'keyboard', 'keychron', 'karabiner', 'productivity', 'setup', 'tools', 'tech']
draft: false
summary: 'Complete guide to setting up Keychron K6 68-key mechanical keyboard on Mac. Solve the backtick/tilde problem, remap keys with Karabiner-Elements, and master all hardware shortcuts.'
---

# Keychron K6 Setup Guide for Mac with Karabiner

I recently switched from an 80-key Mac keyboard to the [Keychron K6](https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard) 65% (68 keys) mechanical keyboard. The compact form factor is great for desk space, but there's a learning curve—especially for programmers who use backtick and tilde frequently. This guide documents my setup and the solutions I found.

## The Problem 🤔

On the K6, there's no dedicated backtick/tilde key. Instead, you need to press:
- `fn1 + ESC` for backtick (`` ` ``)
- `fn2 + ESC` for tilde (`~`)

This is handled at the **keyboard firmware level**, meaning [Karabiner-Elements](https://karabiner-elements.pqrs.org/) cannot intercept these combinations. The keyboard sends the character directly to macOS before any software can remap it.

For developers who write markdown, use terminal paths (`~/Documents`), or switch windows (`Cmd + ~`), this is painful.

## The Solution 💡

The workaround is to:
1. Remap the physical ESC key to make ESC work as is without any extra click
2. Shift ESC is mapped to `~`
3. Option ESC is mapped to `

This way you get single-key access to ESC, backtick and tilde.

## Karabiner-Elements Setup ⚙️

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) is an open-source keyboard customizer for macOS. Install it via brew:

```bash
brew install --cask karabiner-elements
```

### Device Identification

Your K6 may appear as different devices depending on connection mode (Bluetooth vs Wired). My configuration uses:

| Device | Vendor ID | Product ID |
|--------|-----------|------------|
| K6 (Complex Mods) | 1452 | 591 |
| K6 (Simple Mods) | 13364 | 4451 |

You can find your device IDs in Karabiner-Elements → Devices tab.

### Simple Modifications

These are applied only to the K6, not to MacBook's internal keyboard. Open Karabiner-Elements → Simple Modifications → Select your K6 device.

| From Key | To Key | Purpose |
|----------|--------|---------|
| `home` | `delete_forward` | Home key acts as Forward Delete |
| `page_up` | `home` | Page Up becomes Home |
| `page_down` | `end` | Page Down becomes End |

### Complex Modifications

These give you quick access to backtick, tilde, and window switching using modifier + ESC combinations:

| Shortcut | Output | Use Case |
|----------|--------|----------|
| `Option + ESC` | ``  `` (backtick) | home, terminal |
| `Shift + ESC` | `~` (tilde) | Home directory paths |
| `Cmd + ESC` | `Cmd + ~` | Switch windows within same app |

### Final Key Behavior

After applying the configuration:

| Physical Key | Tap | With Option | With Shift | 
|--------------|-----|------------|-----------|
| ESC | `` ESC `` | `` ` `` | `~` |
| Home | Forward Delete | — | — |
| Page Up | Home | — | — |
| Page Down | End | — | — |

## Complete Karabiner Configuration 📋

Save this as `~/.config/karabiner/karabiner.json`:

````json
{
    "global": { "show_in_menu_bar": false },
    "profiles": [
        {
            "complex_modifications": {
                "rules": [
                    {
                        "description": "Shift + Esc to Tilde (~)",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "escape",
                                    "modifiers": { "mandatory": ["shift"] }
                                },
                                "to": [
                                    {
                                        "key_code": "grave_accent_and_tilde",
                                        "modifiers": ["shift"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "Option + Esc to Backtick (`)",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "escape",
                                    "modifiers": { "mandatory": ["option"] }
                                },
                                "to": [
                                    { "key_code": "grave_accent_and_tilde" }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "Command + Esc to Command + Tilde (Window Switcher)",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "escape",
                                    "modifiers": { "mandatory": ["command"] }
                                },
                                "to": [
                                    {
                                        "key_code": "grave_accent_and_tilde",
                                        "modifiers": ["command"]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "devices": [
                {
                    "identifiers": {
                        "is_keyboard": true,
                        "is_pointing_device": true,
                        "product_id": 4451,
                        "vendor_id": 13364
                    },
                    "ignore": false,
                    "simple_modifications": [
                        {
                            "from": { "key_code": "home" },
                            "to": [{ "key_code": "delete_forward" }]
                        },
                        {
                            "from": { "key_code": "page_up" },
                            "to": [{ "key_code": "home" }]
                        },
                        {
                            "from": { "key_code": "page_down" },
                            "to": [{ "key_code": "end" }]
                        }
                    ]
                }
            ],
            "name": "Default",
            "selected": true,
            "virtual_hid_keyboard": {
                "country_code": 0,
                "keyboard_type_v2": "ansi"
            }
        }
    ]
}
````

## K6 Hardware Shortcuts 🎹

These are built into the keyboard firmware and work regardless of Karabiner configuration.

### Bluetooth

The K6 supports up to 3 Bluetooth devices. Make sure the side toggle is set to **Bluetooth** (not Cable).

| Combo | Function |
|-------|----------|
| `fn1 + Q` | Switch to Bluetooth device 1 |
| `fn1 + W` | Switch to Bluetooth device 2 |
| `fn1 + E` | Switch to Bluetooth device 3 |
| `fn1 + Q/W/E` (hold 4s) | Pair new device to slot 1/2/3 |

### Pairing a New Device

1. **Select an empty slot** — short press `fn1 + Q/W/E` to check (LED blinks slowly = empty/disconnected)
2. **Enter pairing mode** — hold `fn1 + Q/W/E` for 4 seconds (LED blinks rapidly)
3. **Pair from your device** — look for "Keychron K6" in Bluetooth settings

The LED will blink rapidly for ~3 minutes while discoverable. If pairing fails, forget the device from your computer's Bluetooth settings and try again.

### Media & Volume

| Combo | Function |
|-------|----------|
| `fn1 + -` | Volume down |
| `fn1 + =` | Volume up |
| `fn1 + [` | Previous track |
| `fn1 + ]` | Next track |
| `fn1 + \` | Play/Pause |

### Function Keys

| Combo | Function |
|-------|----------|
| `fn1 + 1` through `0` | F1 – F10 |
| `fn1 + -` | F11 |
| `fn1 + =` | F12 |

### Backlight

| Combo | Function |
|-------|----------|
| Light key | Cycle RGB effects |
| `fn1 + Light key` | Toggle backlight on/off |
| `fn1 + ←` | Decrease brightness |
| `fn1 + →` | Increase brightness |
| `fn1 + L + Light key` (4s) | Lock/unlock light effect |

### System

| Combo | Function |
|-------|----------|
| `fn1 + S + O` (4s) | Disable auto-sleep mode |
| `fn1 + J + Z` (4s) | Factory reset (clears all Bluetooth pairings) |
| `fn1 + K + R` (4s) | Switch function key layout |

## Backup & Restore 💾

### Backup Command

```bash
cp ~/.config/karabiner/karabiner.json ~/Desktop/karabiner-backup-$(date +%Y%m%d).json
```

### Restore Command

```bash
cp ~/Desktop/karabiner-backup-YYYYMMDD.json ~/.config/karabiner/karabiner.json
```

Karabiner automatically detects changes and reloads the configuration.

### Sync Across Machines

Store `karabiner.json` in a synced folder and symlink it:

```bash
# Move to iCloud
mv ~/.config/karabiner/karabiner.json ~/Library/Mobile\ Documents/com~apple~CloudDocs/karabiner.json

# Create symlink
ln -s ~/Library/Mobile\ Documents/com~apple~CloudDocs/karabiner.json ~/.config/karabiner/karabiner.json
```

## Things to Remember 📝

1. **Physical ESC works as it is** — no need anything else
2. **Shift + ESC for tilde** — quick access to `~` for terminal paths
3. **Option + ESC for backtick** — quick access to `` ` `` for markdown code block
4. **Cmd + ESC for window switching** — replaces the standard `Cmd + ~`
5. **Page Up/Down remapped** — now act as Home/End for line navigation
6. **Home is Forward Delete** — useful for deleting text ahead of cursor
7. **Config is device-specific** — MacBook keyboard is unaffected
8. **fn1 and fn2 cannot be remapped** — they're hardware-level keys
9. **Bluetooth vs Wired** — may appear as different devices in Karabiner; configure both if needed
10. **Menu bar icon hidden** — access Karabiner via Spotlight (`Cmd + Space` → "Karabiner")

## Troubleshooting 🔧

### Keyboard not appearing in Bluetooth

1. Ensure side toggle is on **Bluetooth**, not Cable
2. Press any key to wake the keyboard
3. Hold `fn1 + Q/W/E` for 4 seconds to enter pairing mode (LED blinks rapidly)
4. If still not working, factory reset with `fn1 + J + Z` (hold 4s)

### Karabiner remaps not working

1. Check that the correct device is selected in Simple Modifications
2. Verify device IDs match your keyboard (Devices tab)
3. Try disconnecting and reconnecting the keyboard

### ESC key remaps not applying

The `fn1 + ESC` and `fn2 + ESC` combinations are processed by the keyboard firmware before reaching macOS. Karabiner cannot intercept them. Use the workarounds described above.

## References

- [Keychron K6 User Manual](https://www.keychron.com/pages/k6-user-manual-1)
- [K6 Key Combinations](https://www.keychron.com/blogs/news/k6-key-combinations)
- [Karabiner-Elements Documentation](https://karabiner-elements.pqrs.org/docs/)
- [Karabiner Complex Modifications for Keychron](https://ke-complex-modifications.pqrs.org/)
- [Is the Keychron K6 STILL Good? (Or a waste of money)](https://switchandclick.com/keychron-k6-the-keyboard-we-are-most-excited-about-in-2020/)