# Scratchpad

> Just a file to dump and track general thoughts and ideas I have related to the site. They may or may not get any further than "jotted down as a thought".

## 11ty related

- I want to do proper URL handling like back in the day, work out how:
	- One article accessible via multiple URLs for old-school URL hackability and contextual pagination:
		- CANONICAL: `/whatever/title-of-article`
		- CHRONOLOGICAL GLOBAL: `/all-content/1` the Xth post published
		- CHRONOLOGICAL CATEGORISED: `/some-category/1` the Xth post published in that category
	- I want the URLs to stay in the address bar, and not forward to the canonical one
	- SEO will require that non-canonical variant URLs are properly set up to not be indexed
	- I have no idea how best to do this with this tech stack
		- Likely should not be outputting duplicate files, but may be required of a static site?
		- How would you automate re-writes/routing for this sort of thing with Caddy and 11ty?
