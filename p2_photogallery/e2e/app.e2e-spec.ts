import { PhotogalleryPage } from './app.po';

describe('photogallery App', () => {
  let page: PhotogalleryPage;

  beforeEach(() => {
    page = new PhotogalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
