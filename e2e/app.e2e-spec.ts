import { SumoPage } from './app.po';

describe('sumo App', () => {
  let page: SumoPage;

  beforeEach(() => {
    page = new SumoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
