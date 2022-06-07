export default class RenderList {
  constructor(refsGallery) {
    this.paramsArticle = [];
    this.refsGallery = refsGallery;
  }

  renderGallery() {
    const list = this.renderList();
    this.refsGallery.insertAdjacentHTML('beforeend', list);
  }

  renderList() {
    return this.paramsArticle
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
  <a class="gallery__item" href="${largeImageURL}">
  <img class='gallery__image' src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${downloads}
    </p>
  </div></a>
`;
        }
      )
      .join('');
  }
  get params() {
    return this.paramsArticle;
  }
  set params(newParams) {
    this.paramsArticle = newParams;
  }
}
