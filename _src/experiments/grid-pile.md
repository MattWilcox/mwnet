---
pageTitle: "CSS Grid Pile"
metaDescription: "Minimal CSS example of the Pile technique."
pageIntro: "Minimal CSS example of the Pile technique."
datePublished: "2024-01-22"
---
<style>
	@layer isolated {
		.uc_pile {
			display: grid;
			place-content: center;

			& > * {
				grid-area: 1/1;
			}
		}
	}
</style>

<div class="uc_pile">
	<span>1</span>
	<span>2</span>
	<span>3</span>
	<span>4</span>
</div>