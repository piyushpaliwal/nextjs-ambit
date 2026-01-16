import type { NavItem } from 'components/blocks/navbar/Navbar'
import { navigationItemList } from 'data/navigation'
import { LocaleEnum } from 'types/locale'

export const splitPara = (text: string): string[] => {
  if (!text) return []

  return text
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
}

const deepLocaleFilter = (item: NavItem, locale: LocaleEnum): NavItem | null => {
  if (!item || (item.allowedLocales && !item.allowedLocales.includes(locale))) {
    return null
  }

  const navItem = structuredClone(item)

  if (navItem.children && navItem.children.length > 0) {
    navItem.children = navItem.children
      .map((child) => deepLocaleFilter(child, locale))
      .filter((child): child is NavItem => child !== null)
  }

  return navItem
}

export const filterNavByLocale = (
  navSet: Record<string, NavItem | NavItem[]>,
  locale: LocaleEnum = LocaleEnum.Global
): Record<string, NavItem | NavItem[]> => {
  if (!navSet) return {}
  const result: Record<string, NavItem | NavItem[]> = {}

  Object.entries(navSet).forEach(([key, navItem]) => {
    if (Array.isArray(navItem)) {
      const filteredItems = navItem
        .map((item) => deepLocaleFilter(item, locale))
        .filter((item): item is NavItem => item !== null)

      if (filteredItems.length > 0) {
        result[key] = filteredItems
      }
    } else {
      const filteredItem = deepLocaleFilter(navItem, locale)
      if (filteredItem !== null) {
        result[key] = filteredItem
      }
    }
  })

  return result
}

const findNavItemByUrl = (item: NavItem | NavItem[], url: string): NavItem | null => {
  const itemSet = Array.isArray(item) ? item : [item]

  for (const item of itemSet) {
    if (item.url === url) return item

    if (item.children && item.children.length > 0) {
      const foundInChildren = findNavItemByUrl(item.children, url)

      if (foundInChildren) return foundInChildren
    }
  }
  return null
}

export const isPageAllowedInLocale = (url: string, locale: LocaleEnum): boolean => {
  const flatNavItemList = Object.values(navigationItemList).flat()
  const navItem = findNavItemByUrl(flatNavItemList, url)

  if (navItem?.allowedLocales && navItem.allowedLocales?.length > 0) {
    return navItem.allowedLocales.includes(locale)
  }

  return true
}
