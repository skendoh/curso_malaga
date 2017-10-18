import { EventosPage } from './app.po';

describe('eventos App', () => {
  let page: EventosPage;

  beforeEach(() => {
    page = new EventosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
