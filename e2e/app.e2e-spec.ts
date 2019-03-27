import { Express1Page } from './app.po';

describe('express1 App', () => {
  let page: Express1Page;

  beforeEach(() => {
    page = new Express1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
