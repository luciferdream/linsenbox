'use strict';

function thousands_separators(num) {
  (?<=\d)(?<!\.\d*)(?=(?:\d{3})+(?:\.\d+|$))
}

module.exports = thousands_separators;
