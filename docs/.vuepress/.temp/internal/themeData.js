export const themeData = JSON.parse("{\"encrypt\":{},\"editLink\":false,\"repo\":\"dimatortik/db-course-hope-template\",\"docsDir\":\"docs\",\"footer\":\"ECL 2.0 Licensed | Copyright © [YYYY] [Your Name] \",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",{\"text\":\"Docs for theme\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"Вступ\",\"prefix\":\"intro/\",\"link\":\"intro/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Розроблення загальних вимог до системи\",\"prefix\":\"requirements\",\"link\":\"requirements/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Розроблення вимог до функціональної системи\",\"prefix\":\"use cases/\",\"link\":\"use cases/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Проєктування інформаційного забезпечення\",\"prefix\":\"design/\",\"link\":\"design/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Реалізація інформаційного та програмного забезпечення\",\"prefix\":\"software/\",\"link\":\"software/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Тестування процездатності системи\",\"prefix\":\"test/\",\"link\":\"test/\",\"children\":\"structure\",\"collapsible\":true},{\"text\":\"Висновки\",\"prefix\":\"conclusion/\",\"link\":\"conclusion/\",\"children\":\"structure\",\"collapsible\":true}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
