// import {
// 	EleventyRenderPlugin,
// 	EleventyI18nPlugin,
// 	EleventyHtmlBasePlugin
// } from "@11ty/eleventy";

/* Imports */
import { DateTime } from "luxon";
import eleventyPluginInterlinker from "@photogabble/eleventy-plugin-interlinker";

/* Exports */
export const config = {
	dir: {
		input: "_src",
		output: "_publish",
		includes: "_templates"
	}
}

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_src/design-assets");

	eleventyConfig.addAsyncFilter(
		"postDate",
		async (dateObj) => {
			let days = DateTime
				.fromJSDate(dateObj, { zone: 'utc' })
				.toFormat('dd');
			let restOfDate = DateTime
				.fromJSDate(dateObj, { zone: 'utc' })
				.toFormat('MMMM, yyyy');

			return `${days}<sup>${nthNumber(days)}</sup> ${restOfDate}`;
		}
	);

	eleventyConfig.addPlugin( eleventyPluginInterlinker );

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
}

/* Helpers */
const nthNumber = (number) => {
	if (number > 3 && number < 21) return "th";
	switch (number % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};
