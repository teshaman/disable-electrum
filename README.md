# Disable Electrum

**Info page:** https://teshaman.github.io/disable-electrum/ · Free and open source (MIT) · see [Disclaimer](#disclaimer)

A tiny Foundry VTT module for D&D 5e that hides electrum (`EP`) from actor currency displays, currency-transfer and
conversion dialogs, and price-denomination choices, without deleting the values already stored in your world.

## What it does

- Hides the `system.currency.ep` field (with its label) on every actor sheet, and the `amount.ep` field in currency dialogs.
- Disables and hides the `ep` option in every denomination dropdown (item prices, loot and shop dialogs).
- Watches the page with a `MutationObserver` and the `renderApplicationV2`, `renderActorSheet` and `renderItemSheet` hooks,
  so sheets from other modules are covered as long as they use the system's field names.
- Does nothing when the game system is not dnd5e. No settings.

## What it does not do

The module deliberately does **not** delete `CONFIG.DND5E.currencies.ep`. Removing the system's currency definition makes
Foundry drop EP values the next time a document is saved. Existing EP balances and items priced in EP therefore stay
stored safely; players simply cannot see or enter EP through the interface while the module is enabled. Disable the module
and electrum is back. Convert or remove existing EP by hand if you want clean sheets. It is interface only: it changes no
rules, and it does not stop macros or other modules from writing EP through the API.

## Compatibility

- Foundry VTT v13 minimum, verified on v14
- D&D 5e 5.0 – 5.x, verified on 5.3.3
- No dependencies

## Install

Paste this manifest URL into Foundry's **Install Module** dialog:

`https://github.com/teshaman/disable-electrum/releases/latest/download/module.json`

Or download `module.zip` from the releases page and upload it to The Forge or unzip it into `Data/modules`, then enable
**Disable Electrum** under **Manage Modules** for the world.

## Disclaimer

**I own none of this code.** I claim no ownership of it and release the whole module as free, open-source software. No code or asset from any other module or author has been copied into it. No warranty; use at your own risk.

## License

[MIT](LICENSE).
