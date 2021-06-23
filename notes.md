- open the documentation

---

- points
  make home request in home screen with normal http request with axios without any cache
  go to the any post
  comeback to home screen and show the loading state
  it means we are not caching the data ; it's a terrible user experience

---

show same for a post

- fix the bugs in useEffect ; add postId as dependency
  go to a post , make axios request when the component did mount
  come back to home screen
  go back to post again
  mmm... terrible user exp

---

- add useSwr in home screen and show caching
  but it is making a request; see the networks tab; it compares the data the update it
  stay in home screen : create a new post manually and show it loads data on focus
  go to comments screen : create a new post manually and show it compares the data and updates
  now useSWR in comments
  show error ; make a wrong request on some url :(

---

- points
  use globalConfig
  remove fetcher from the single requests
  add axios default
  add deduping in global config

- show global cache : show the post in the comment section

---

mutation
create a post
mutation in two ways : destruct the mutation from the useSWR("key")
import the mutation and pass the key
