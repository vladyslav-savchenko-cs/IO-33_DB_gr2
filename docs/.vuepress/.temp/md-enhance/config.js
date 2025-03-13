import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "C:/usage_100/KPI/IV_term/DB/IO-33_DB_gr2/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
