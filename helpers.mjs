export const helpers = async (ctx) => {
  const { ACCOUNT_STORAGE_KEY, CUSTOM_ID_TO_PAGE_MAPPING, ALL_PAGES } =
    await ctx.loadModule('constants.mjs')
  const expansionEntitlements = {
    melvorAoD: cloudManager.hasAoDEntitlementAndIsEnabled,
    melvorItA: cloudManager.hasItAEntitlementAndIsEnabled,
  }
  const availablePages = ALL_PAGES.filter((page) => {
    const expansion = page.requiresExpansion || page.id.split(':')[0]
    return expansionEntitlements[expansion] ?? true
  })

  const getAccountStorageDefaultKeybinds = () => {
    const defaultKeybinds = {}
    for (const page of availablePages) {
      defaultKeybinds[page.id] = {
        key: page.defaultKey?.toUpperCase() || '',
        mod: page.defaultMod || '',
        section: page.section,
      }
    }

    return defaultKeybinds
  }

  // Loads keybinds and sets default ones to ctx.accountStorage if they don't exist
  const loadKeybinds = (sectionMap) => {
    const keybinds = ctx.accountStorage.getItem(ACCOUNT_STORAGE_KEY)
    if (!keybinds)
      return ctx.accountStorage.setItem(ACCOUNT_STORAGE_KEY, getAccountStorageDefaultKeybinds())

    const defaultKeybinds = getAccountStorageDefaultKeybinds()
    for (const page of availablePages) {
      const keybind = keybinds[page.id] || defaultKeybinds[page.id]
      sectionMap[page.section].set(`${page.id}_key`, keybind.key.toUpperCase())
      sectionMap[page.section].set(`${page.id}_mod`, keybind.mod)
    }
  }

  const openCustomPage = (pageId) => {
    // Scan the document sidebar links to find the matching one
    const sidebarLinks = document.querySelectorAll('#main-sidebar .nav-main-link')
    if (!sidebarLinks) return

    for (const link of sidebarLinks) {
      const nameElement = link.querySelector('.nav-main-link-name')
      if (!nameElement || nameElement.textContent.trim() !== CUSTOM_ID_TO_PAGE_MAPPING[pageId])
        continue
      link.click() // Trigger the native game modal pop-up
    }
  }

  const handleKeyDown = (e, sectionMap) => {
    // Drop execution if user is actively writing text in inputs/search bars
    if (
      document.activeElement.tagName === 'INPUT' ||
      document.activeElement.tagName === 'TEXTAREA'
    ) {
      return
    }

    const pressedKey = e.key ? e.key.toLowerCase() : ''
    for (const page of availablePages) {
      const targetKeySetting = sectionMap[page.section].get(`${page.id}_key`)
      const targetModSetting = sectionMap[page.section].get(`${page.id}_mod`)

      if (!targetKeySetting) continue

      const configuredKey = String(targetKeySetting).trim().toLowerCase()

      // Check basic key match
      if (pressedKey !== configuredKey) continue

      // Validate assigned modifier state configurations
      let isModMatch = false
      if (targetModSetting === '' && !e.ctrlKey && !e.altKey) isModMatch = true
      if (targetModSetting === 'ctrl' && e.ctrlKey && !e.altKey) isModMatch = true
      if (targetModSetting === 'alt' && !e.ctrlKey && e.altKey) isModMatch = true
      if (targetModSetting === 'ctrl-alt' && e.ctrlKey && e.altKey) isModMatch = true
      if (!isModMatch) continue

      let targetPageObj = game.pages.getObjectByID(page.id)
      // If it's a custom id, run openCustomPage()
      if (page.id.includes('custom:')) targetPageObj = page.id
      if (!targetPageObj) continue

      e.preventDefault()
      e.stopPropagation()

      if (targetPageObj === page.id) return openCustomPage(page.id)
      changePage(targetPageObj)
      break
    }
  }

  const handleOnChange = ({ value, page, isKeyChange = false }) => {
    const keybinds = ctx.accountStorage.getItem(ACCOUNT_STORAGE_KEY)

    ctx.accountStorage.setItem(ACCOUNT_STORAGE_KEY, {
      ...(keybinds || {}),
      [page.id]: isKeyChange
        ? { ...keybinds[page.id], key: value.toUpperCase() }
        : { ...keybinds[page.id], mod: value },
    })
  }

  const getModConfig = (page) => ({
    type: 'dropdown',
    name: `${page.id}_mod`,
    label: `Modifier`,
    default: page.defaultMod || '',
    options: [
      { value: '', display: 'None' },
      { value: 'ctrl', display: 'Ctrl' },
      { value: 'alt', display: 'Alt' },
      { value: 'ctrl-alt', display: 'Ctrl + Alt' },
    ],
    onChange: (value) => handleOnChange({ value, page }),
  })

  const getKeyConfig = (page) => ({
    type: 'text',
    name: `${page.id}_key`,
    label: 'Key',
    default: page.defaultKey?.toUpperCase() || '',
    maxLength: 1,
    onChange: (value) => handleOnChange({ value, page, isKeyChange: true }),
  })

  // Gets picked up by handleOnChange and clears all keybinds from ctx.accountStorage
  const removeAllBinds = (sectionMap) => {
    for (const page of availablePages) {
      sectionMap[page.section].set(`${page.id}_key`, '')
      sectionMap[page.section].set(`${page.id}_mod`, '')
    }
  }

  // Gets picked up by handleOnChange and restores default keybinds in ctx.accountStorage
  const restoreDefaultBinds = (sectionMap) => {
    for (const page of availablePages) {
      sectionMap[page.section].set(`${page.id}_mod`, page.defaultMod || '')
      sectionMap[page.section].set(`${page.id}_key`, page.defaultKey?.toUpperCase() || '')
    }
  }

  return {
    loadKeybinds,
    openCustomPage,
    handleKeyDown,
    handleOnChange,
    getModConfig,
    getKeyConfig,
    availablePages,
    removeAllBinds,
    restoreDefaultBinds,
  }
}
