import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MarkdownItPlantuml from 'markdown-it-plantuml';

export default defineUserConfig({
  // Замінити на назву свого репозиторія
  base: "/IO-33_DB_gr2/",

  lang: "en-US",
  // Замінити на назву свого проєкту
  title: "Назва проєкту",
  description: "Лабораторні роботи",

  theme,

  extendsMarkdown: md =>{
    md.use(MarkdownItPlantuml);
  },
});