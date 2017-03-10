import { ModulesExample1Page } from './app.po';

describe('modules-example1 App', () => {
  let page: ModulesExample1Page;

  beforeEach(() => {
    page = new ModulesExample1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
