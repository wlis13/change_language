const languageSelect = document.getElementById('languages');
// languageSelect.addEventListener('change', function({target}) {
//   const selectedLanguage = target.value;

import { traductions } from "./language.js";

//   if (selectedLanguage === 'en') {
//     window.location.href = 'index-en.html';
//   } else if (selectedLanguage === 'es') {
//     window.location.href = 'index-es.html';
//   } else if (selectedLanguage === 'fr') {
//     window.location.href = 'index-fr.html';
//   } else if (selectedLanguage === 'zh') {
//     window.location.href = 'index-zh.html';
//   } else if (selectedLanguage === 'pt-br') {
//     window.location.href = 'index.html';
//   }
// });

languageSelect.addEventListener('click', function({target}) {
  const translatableElements = document.querySelectorAll('[data-translate]');
  console.log(target.value)
  translatableElements.forEach(element => {
    const key = element.dataset.translate;
    const translation = traductions[target.value];
    element.textContent = translation[key];
    console.log(translation[key])
  });
})
