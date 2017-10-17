import { BindingPage } from './app.po';

describe('binding App', () => {
  let page: BindingPage;

  beforeEach(() => {
    page = new BindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
