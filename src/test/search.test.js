const {searchUser, validateData} =  require('./action')

const axios = require('axios')

jest.mock('axios');

test('user can not Enter username , then it return false', () => {
  expect(validateData("")).toBe(false);
});

describe('search username', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      "login": "nevisha198",
      "id": 63627856,
      "node_id": "MDQ6VXNlcjYzNjI3ODU2",
      "avatar_url": "https://avatars.githubusercontent.com/u/63627856?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nevisha198",
      "html_url": "https://github.com/nevisha198",
      "followers_url": "https://api.github.com/users/nevisha198/followers",
      "following_url": "https://api.github.com/users/nevisha198/following{/other_user}",
      "gists_url": "https://api.github.com/users/nevisha198/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nevisha198/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nevisha198/subscriptions",
      "organizations_url": "https://api.github.com/users/nevisha198/orgs",
      "repos_url": "https://api.github.com/users/nevisha198/repos",
      "events_url": "https://api.github.com/users/nevisha198/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nevisha198/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Nevisha",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 1,
      "public_gists": 0,
      "followers": 0,
      "following": 1,
      "created_at": "2020-04-14T03:35:54Z",
      "updated_at": "2022-08-10T09:47:57Z"
  };

     axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(searchUser('nevisha198')).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(searchUser('nevisha198')).rejects.toThrow(errorMessage);
  });
});

