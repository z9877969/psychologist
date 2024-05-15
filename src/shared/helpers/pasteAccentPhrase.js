export const pasteAccentPhrase = (sentence, phrase) => {
  const parts = sentence.split(new RegExp(`(${phrase})`, 'g'));

  return parts.map((part) =>
    part === phrase
      ? { type: 'accent', value: phrase }
      : {
          value: part,
        }
  );
};
