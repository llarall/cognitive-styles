// https://www.30secondsofcode.org/js/s/string-case-conversion/

export const toTitleCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
    .join(' ');

toTitleCase('some_database_field_name'); // 'Some Database Field Name'
toTitleCase('Some label that needs to be title-cased');
// 'Some Label That Needs To Be Title Cased'
toTitleCase('some-package-name'); // 'Some Package Name'
toTitleCase('some-mixed_string with spaces_underscores-and-hyphens');
// 'Some Mixed String With Spaces Underscores And Hyphens'

 