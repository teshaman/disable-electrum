# Disable Electrum

A small Foundry VTT module for D&D 5e that hides electrum (`EP`) from actor currency displays, currency-transfer dialogs, and price-denomination choices.

The module deliberately does not delete `CONFIG.DND5E.currencies.ep`. Existing EP balances and items priced in EP remain stored safely, but players cannot enter new EP through the normal interface while the module is enabled.

## Compatibility

- Foundry VTT 14
- D&D 5e 5.3.x

## Installation

Place the `disable-electrum` folder inside Foundry's `Data/modules` directory, restart Foundry, and enable **Disable Electrum** under **Manage Modules** for the world.
