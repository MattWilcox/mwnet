export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_src/design-assets");

	return {
		dir: {
			input: "_src",
			output: "_publish",
			includes: "_templates"
		}
	}
}