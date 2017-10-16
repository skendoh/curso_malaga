import { HolaMundo2Page } from './app.po';

describe('hola-mundo2 App', () => {
  let page: HolaMundo2Page;

  beforeEach(() => {
    page = new HolaMundo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
