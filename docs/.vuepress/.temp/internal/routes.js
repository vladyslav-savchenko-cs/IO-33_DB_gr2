export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"Початок","i":"home"} }],
  ["/conclusion/", { loader: () => import(/* webpackChunkName: "v-14b1fb01" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/conclusion/index.html.js"), meta: {"y":"a","t":"Висновки"} }],
  ["/design/", { loader: () => import(/* webpackChunkName: "v-b34bd1fc" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/design/index.html.js"), meta: {"y":"a","t":"Проєктування бази даних"} }],
  ["/intro/", { loader: () => import(/* webpackChunkName: "v-1797ca80" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/intro/index.html.js"), meta: {"y":"a","t":"Вступ"} }],
  ["/requirements/", { loader: () => import(/* webpackChunkName: "v-5fd0d570" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/requirements/index.html.js"), meta: {"y":"a","t":"Розроблення загальних вимог до системи"} }],
  ["/requirements/stakeholders-needs.html", { loader: () => import(/* webpackChunkName: "v-53674b13" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/requirements/stakeholders-needs.html.js"), meta: {"y":"a","t":"Запити зацікавлених осіб"} }],
  ["/requirements/state-of-the-art.html", { loader: () => import(/* webpackChunkName: "v-4cbcbf63" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/requirements/state-of-the-art.html.js"), meta: {"y":"a","t":"Аналіз предметної області"} }],
  ["/software/", { loader: () => import(/* webpackChunkName: "v-254bde0e" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/software/index.html.js"), meta: {"y":"a","t":"Реалізація інформаційного та програмного забезпечення"} }],
  ["/test/", { loader: () => import(/* webpackChunkName: "v-a35b1ba4" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/test/index.html.js"), meta: {"y":"a","t":"Тестування працездатності системи"} }],
  ["/use%20cases/", { loader: () => import(/* webpackChunkName: "v-44b3e802" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/use cases/index.html.js"), meta: {"y":"a","t":"Модель прецедентів"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/docs/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
