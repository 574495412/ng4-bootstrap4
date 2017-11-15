import { ChumiePage } from './app.po';

describe('chumie App', function() {
  let page: ChumiePage;

  beforeEach(() => {
    page = new ChumiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
