import { AppPage } from './app.po';

describe('workspace-project Client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to series of Get-Started - TS Fullstack App!');
  });
});
