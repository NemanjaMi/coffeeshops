import { CoffeeshopsPage } from './app.po';

describe('coffeeshops App', () => {
  let page: CoffeeshopsPage;

  beforeEach(() => {
    page = new CoffeeshopsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
