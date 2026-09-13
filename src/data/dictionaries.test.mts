import assert from "node:assert/strict";
import { test } from "node:test";

import { commonContent } from "./common.ts";
import { contactContent } from "./contact.ts";
import { homeContent } from "./home.ts";
import { knowledgeMethodTiles } from "./knowledge.ts";
import { legalContent } from "./legal.ts";
import { marketplaceContent } from "./marketplace.ts";
import { navigationItems } from "./navigation.ts";
import { pageContent } from "./pages.ts";
import { solutionSections } from "./solutions.ts";

const dictionaries = {
  common: commonContent,
  contact: contactContent,
  home: homeContent,
  knowledge: knowledgeMethodTiles,
  legal: legalContent,
  marketplace: marketplaceContent,
  navigation: navigationItems,
  pages: pageContent,
  solutions: solutionSections,
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

function assertSameShape(ru: unknown, en: unknown, path: string) {
  if (Array.isArray(ru)) {
    assert.ok(Array.isArray(en), `${path}: ru is a list, en is not`);
    assert.equal(en.length, ru.length, `${path}: list lengths differ`);
    ru.forEach((item, index) => assertSameShape(item, en[index], `${path}[${index}]`));
    return;
  }

  if (isPlainObject(ru)) {
    assert.ok(isPlainObject(en), `${path}: ru is an object, en is not`);
    assert.deepEqual(
      Object.keys(en).sort(),
      Object.keys(ru).sort(),
      `${path}: key sets differ`
    );

    // Anchors and asset paths must stay identical, otherwise deep links break in one locale only.
    for (const key of ["id", "href", "photo", "imageSrc"]) {
      if (typeof ru[key] === "string") {
        assert.equal(en[key], ru[key], `${path}.${key}: locale-neutral value differs`);
      }
    }

    for (const key of Object.keys(ru)) {
      assertSameShape(ru[key], en[key], `${path}.${key}`);
    }
    return;
  }

  assert.equal(typeof en, typeof ru, `${path}: value types differ`);
}

test("английский словарь повторяет структуру русского", () => {
  for (const [name, dictionary] of Object.entries(dictionaries)) {
    assertSameShape(dictionary.ru, dictionary.en, name);
  }
});

function collectUntranslated(value: unknown, path: string, found: string[]) {
  if (typeof value === "string") {
    if (/[А-Яа-яЁё]/.test(value)) {
      found.push(`${path}: ${value.slice(0, 60)}`);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectUntranslated(item, `${path}[${index}]`, found));
    return;
  }

  if (isPlainObject(value)) {
    for (const [key, item] of Object.entries(value)) {
      collectUntranslated(item, `${path}.${key}`, found);
    }
  }
}

test("в английском словаре не осталось непереведенных строк", () => {
  const found: string[] = [];

  for (const [name, dictionary] of Object.entries(dictionaries)) {
    collectUntranslated(dictionary.en, name, found);
  }

  assert.deepEqual(found, [], `кириллица в английской локали:\n${found.join("\n")}`);
});
