//import {
//	EleventyRenderPlugin,
//	EleventyI18nPlugin,
//	EleventyHtmlBasePlugin
//} from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_src/design-assets");

	return {
		dir: {
			input: "_src",
			output: "_publish",
			includes: "_templates"
		}
	}
}