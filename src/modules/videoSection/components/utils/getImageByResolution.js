export default function getImageUrlByResolution() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 375) {
    return 'urlFor375px.jpg'; // Замініть це на відповідний URL для роздільності 375px
  } else if (screenWidth <= 768) {
    return 'urlFor768px.jpg'; // Замініть це на відповідний URL для роздільності 768px
  } else if (screenWidth <= 1440) {
    return 'urlFor1440px.jpg'; // Замініть це на відповідний URL для роздільності 1440px
  } else {
    return 'defaultUrl.jpg'; // Якщо немає відповідності роздільності, повертаємо загальний URL
  }
}
