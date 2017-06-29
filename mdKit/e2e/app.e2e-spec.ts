import { MdKitPage } from './app.po';

describe('md-kit App', () => {
  let page: MdKitPage;

  beforeEach(() => {
    page = new MdKitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
