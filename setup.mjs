export async function setup(ctx) {
  const { helpers } = await ctx.loadModule('helpers.mjs')
  const {
    getKeyConfig,
    getModConfig,
    handleKeyDown,
    loadKeybinds,
    removeAllBinds,
    restoreDefaultBinds,
  } = await helpers(ctx)
  const { ALL_PAGES } = await ctx.loadModule('constants.mjs')

  // Creates UI and assigns default keybinds
  const sectionMap = {}
  ALL_PAGES.forEach((page, i) => {
    if (!sectionMap[page.section]) sectionMap[page.section] = ctx.settings.section(page.section)

    if (!i) {
      sectionMap[page.section].add([
        {
          type: 'button',
          display: 'Clear All',
          color: 'danger',
          name: 'clear_all',
          onClick: () => removeAllBinds(sectionMap),
        },
        {
          type: 'button',
          display: 'Restore Defaults',
          color: 'info',
          name: 'restore_defaults',
          onClick: () => restoreDefaultBinds(sectionMap),
        },
      ])
    }

    sectionMap[page.section].add({
      type: 'label',
      label: page.name,
      name: page.name,
    })
    sectionMap[page.section].add(getModConfig(page))
    sectionMap[page.section].add(getKeyConfig(page))
  })

  // After character load assign keybinds from user settings
  ctx.onCharacterLoaded(() => {
    loadKeybinds(sectionMap)
    window.addEventListener('keydown', (e) => handleKeyDown(e, sectionMap), true)
  })
}
