import { PogolprojectPage } from './app.po';

describe('pogolproject App', () => {
  let page: PogolprojectPage;

  beforeEach(() => {
    page = new PogolprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
