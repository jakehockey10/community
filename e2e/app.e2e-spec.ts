import { CommunityPage } from './app.po';

describe('community App', () => {
  let page: CommunityPage;

  beforeEach(() => {
    page = new CommunityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Community');
  });
});
