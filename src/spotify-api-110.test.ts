import * as SpotifyWebApi from 'spotify-web-api-js-110';

test('test instantiation', () => {
    let api: SpotifyWebApi.SpotifyWebApiJs = new SpotifyWebApi();
    expect(api).not.toBe(undefined);
});
