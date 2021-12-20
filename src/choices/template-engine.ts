import { Choice } from "@/types";

export default function templateEngine(): Choice[] {
  return [
    {
      name: "Embedded JS - embeds JavaScript logic into your HTML files",
      short: "ejs",
      value: { packages: [{ name: "ejs" }] },
    },
    {
      name: "Pug - template engine with whitespace-sensitive syntax",
      short: "pug",
      value: { packages: [{ name: "pug" }] },
    },
    {
      name: "Handlebars - simple template engine based on Mustache",
      short: "handlebars",
      value: { packages: [{ name: "hbs" }] },
    },
  ];
}
