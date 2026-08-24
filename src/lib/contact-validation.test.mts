import assert from "node:assert/strict";
import { test } from "node:test";

import {
  isValidCompany,
  isValidContact,
  isValidName,
  isValidTask,
} from "./contact-validation.ts";

test("контакт принимает email и телефон в допустимых границах", () => {
  assert.equal(isValidContact("anna@example.com"), true);
  assert.equal(isValidContact("+7 (965) 296-32-49"), true);

  // границы длины номера: 10 и 15 цифр включительно
  assert.equal(isValidContact("9652963249"), true);
  assert.equal(isValidContact("123456789012345"), true);
  assert.equal(isValidContact("965296324"), false);
  assert.equal(isValidContact("1234567890123456"), false);

  assert.equal(isValidContact("anna@example"), false);
  assert.equal(isValidContact(`${"a".repeat(115)}@example.com`), false);
});

test("компания необязательна, но заполненная проверяется", () => {
  assert.equal(isValidCompany(""), true);
  assert.equal(isValidCompany("   "), true);
  assert.equal(isValidCompany("Ромашка"), true);
  assert.equal(isValidCompany("Р"), false);
  assert.equal(isValidCompany("аааааааааа"), false);
});

test("имя требует букв, а не только длины", () => {
  assert.equal(isValidName("Анна"), true);
  assert.equal(isValidName("А"), false);
  assert.equal(isValidName("12345"), false);
  assert.equal(isValidName("ыыыыыыыыыы"), false);
});

test("задача отсекает слишком короткий текст и ссылочный спам", () => {
  assert.equal(isValidTask("Нужно исследование аудитории банка"), true);
  assert.equal(isValidTask("коротко"), false);
  assert.equal(
    isValidTask("Смотрите https://spam.example и https://spam2.example прямо сейчас"),
    false
  );
});
