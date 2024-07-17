//import {
//	EleventyRenderPlugin,
//	EleventyI18nPlugin,
//	EleventyHtmlBasePlugin
//} from "@11ty/eleventy";

const { DateTime } = import("luxon");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_src/design-assets");

	/* FILTERS */
		eleventyConfig.addAsyncFilter(
			"postDate",
			async (dateObj, format = "yyyy LLLL dd") => {
				if (typeof dateObj === "string") {
					return DateTime.fromISO(dateObj).toFormat(format);
				} else if (typeof dateObj === "number") {
					dateObj = new Date(dateObj);
				}
				return DateTime.fromJSDate(dateObj).toFormat(format);
			}
		);

		eleventyConfig.addAsyncFilter(
			'htmlDateString',
			async (dateObj) => {
				return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
			}
		);

		// Return all the tags used in a collection
		eleventyConfig.addAsyncFilter(
			"getAllTags",
			async collection => {
				let tagSet = new Set();

				for(let item of collection) {
					(item.data.tags || []).forEach(tag => tagSet.add(tag));
				}

				return Array.from(tagSet);
			}
		);

		eleventyConfig.addAsyncFilter(
			"filterTagList",
			async function filterTagList(tags) {
				return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
			}
		);

	return {
		dir: {
			input: "_src",
			output: "_publish",
			includes: "_templates"
		}
	}
}