/**
 * Vendors
 */
import $ from "jquery";
window.$ = $;
/**
 * Modules
 */
import tabs from "./modules/tabs";
import sidebar from "./modules/sidebar";
import swiper from "./modules/swiper";
import select from "./modules/select";
import accordion from "./modules/accrodion";
import tooltip from "./modules/tooltip";
import showMore from "./modules/show-more";
import inputMask from "./modules/input-mask";
import validation from "./modules/validation";
import modal from "./modules/modal";
import changeInputs from "./modules/change-inputs";

const app = {
  ready() {
    tabs();
    sidebar();
    swiper();
    select();
    accordion();
    tooltip();
    showMore();
    inputMask();
    validation();
    modal();
    changeInputs();
  },

  load() {},

  resize() {},

  scroll() {},
};

$(() => {
  app.ready();

  $(window)
    .on("load", app.load)
    .on("resize", app.resize)
    .on("scroll", app.scroll);
});
