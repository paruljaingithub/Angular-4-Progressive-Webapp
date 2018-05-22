import { NgPopularMoviesPwaPage } from './app.po';

describe('ng-popular-movies-pwa App', () => {
  let page: NgPopularMoviesPwaPage;

  beforeEach(() => {
    page = new NgPopularMoviesPwaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
