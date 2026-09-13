const MODULE_ID = "disable-electrum";

/**
 * Hide electrum controls without altering CONFIG.DND5E.currencies or stored actor data.
 * Keeping the system currency definition intact prevents old EP balances and EP-priced
 * items from being discarded when their documents are next saved.
 */
function disableElectrumControls(root = document) {
  const element = root instanceof HTMLElement || root instanceof Document
    ? root
    : root?.[0];

  if (!element?.querySelectorAll) return;

  const electrumInputs = element.querySelectorAll(
    'input[name="system.currency.ep"], input[name="amount.ep"]'
  );

  for (const input of electrumInputs) {
    const control = input.closest("label") ?? input;
    control.classList.add(`${MODULE_ID}--hidden`);
    control.setAttribute("aria-hidden", "true");
    input.tabIndex = -1;
  }

  for (const option of element.querySelectorAll('select option[value="ep"]')) {
    option.disabled = true;
    option.hidden = true;
  }
}

Hooks.once("ready", () => {
  if (game.system.id !== "dnd5e") return;

  disableElectrumControls(document);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) disableElectrumControls(node);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  console.info(`${MODULE_ID} | Electrum controls disabled; stored EP values preserved.`);
});

Hooks.on("renderApplicationV2", (_application, element) => {
  if (game.system.id === "dnd5e") disableElectrumControls(element);
});

Hooks.on("renderActorSheet", (_application, element) => {
  if (game.system.id === "dnd5e") disableElectrumControls(element);
});

Hooks.on("renderItemSheet", (_application, element) => {
  if (game.system.id === "dnd5e") disableElectrumControls(element);
});
