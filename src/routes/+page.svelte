<script>
	import { Button } from 'flowbite-svelte';
	import { Icon } from 'svelte-icons-pack';
	import { IoDice, IoSettingsSharp } from 'svelte-icons-pack/io';
	import WordSelector from '$lib/components/WordSelector.svelte';
	import { goto } from '$app/navigation';
	import OpenAI from 'openai';
	import nlp from 'compromise';

	let item_list = [
		'dress',
		'shirt',
		'pants',
		'shorts',
		'skirt',
		'jacket',
		'coat',
		'sweater',
		'blouse',
		'suit',
		'tie',
		'blazer',
		'vest',
		'top',
		'jeans',
		'leggings',
		'hoodie',
		't-shirt',
		'cardigan',
		'romper',
		'jumpsuit',
		'scarf',
		'hat',
		'gloves',
		'boots',
		'heels',
		'sandals',
		'sneakers',
		'flats'
	];
	let size_list = [
		'short',
		'long',
		'medium',
		'mini',
		'maxi',
		'midi',
		'knee-length',
		'ankle-length',
		'floor-length',
		'petite',
		'tall',
		'regular',
		'plus-size',
		'slim-fit',
		'loose-fit',
		'skinny-fit',
		'long-sleeve',
		'short-sleeve',
		'bootcut',
		'cropped',
		'oversized',
		'fitted',
		'tailored',
		'athletic',
		'relaxed',
		'flowy',
		'baggy',
		'form-fitting'
	];
	let color_list = [
		'red',
		'blue',
		'green',
		'yellow',
		'orange',
		'purple',
		'pink',
		'black',
		'white',
		'brown',
		'gray',
		'beige',
		'navy',
		'teal',
		'burgundy',
		'olive',
		'cream',
		'silver',
		'gold',
		'taupe',
		'charcoal',
		'maroon',
		'khaki',
		'turquoise',
		'mustard',
		'lavender',
		'coral',
		'mint',
		'ruby',
		'indigo'
	];
	let sex_list = [
		'man',
		'woman',
		'boy',
		'girl',
		'male',
		'female',
		'gentleman',
		'lady',
		'guy',
		'gal',
		'gent',
		'lass',
		'dude',
		'chick',
		'fellow',
		'lassie',
		'lad',
		'miss',
		'mister',
		'ms',
		'mr'
	];
	// let material_list = [
	//     "silk",
	//     "cotton",
	//     "wool",
	//     "leather",
	//     "linen",
	//     "denim",
	//     "satin",
	//     "velvet",
	//     "lace",
	//     "polyester",
	//     "cashmere",
	//     "chiffon",
	//     "rayon",
	//     "spandex",
	//     "suede",
	//     "twill",
	//     "corduroy",
	//     "organza",
	//     "tulle",
	//     "viscose",
	//     "modal",
	//     "bamboo",
	//     "acrylic",
	//     "nylon",
	//     "fleece",
	//     "fur",
	//     "faux leather",
	//     "canvas",
	//     "satin",
	//     "silk-blend",
	// ];
	let fit_list = [
		'loose-fit',
		'slim-fit',
		'slim',
		'tight',
		'baggy',
		'fitted',
		'flowy',
		'form-fitting',
		'a-line',
		'skinny',
		'wide-leg',
		'bell-bottom',
		'long-sleeve',
		'short-sleeve',
		'empire',
		'peplum',
		'tailored',
		'crop',
		'oversized',
		'athletic',
		'relaxed',
		'balloon',
		'flared',
		'bootcut',
		'capri',
		'harem',
		'jeggings',
		'cargo',
		'draped',
		'wrap',
		'high-waisted',
		'low-rise',
		'mid-rise',
		'drop-crotch',
		'pleated'
	];
	let style_list = [
		'classic',
		'classy',
		'casual',
		'elegant',
		'bohemian',
		'vintage',
		'gothic',
		'preppy',
		'retro',
		'sporty',
		'chic',
		'edgy',
		'minimalist',
		'romantic',
		'urban',
		'glamorous',
		'artsy',
		'modern',
		'sophisticated',
		'eclectic',
		'feminine',
		'masculine',
		'formal',
		'business casual',
		'streetwear',
		'hipster',
		'tomboy',
		'punk',
		'rock',
		'country',
		'boho',
		'nautical'
	];
	let events_list = [
		'formal',
		'casual',
		'business',
		'cocktail',
		'party',
		'beach',
		'wedding',
		'club',
		'prom',
		'birthday',
		'graduation',
		'concert',
		'picnic',
		'barbecue',
		'date',
		'interview',
		'meeting',
		'gala',
		'festival',
		'conference',
		'seminar',
		'workshop',
		'exhibition',
		'trade show',
		'fashion show',
		'award ceremony',
		'charity event',
		'fundraiser',
		'party'
	];
	// let pattern_list = [
	//     "stripes",
	//     "plaid",
	//     "floral",
	//     "polka dot",
	//     "geometric",
	//     "animal print",
	//     "tie-dye",
	//     "checkered",
	//     "houndstooth",
	//     "paisley",
	//     "tartan",
	//     "camouflage",
	//     "abstract",
	//     "chevron",
	//     "gingham",
	//     "ikat",
	//     "marble",
	//     "ombre",
	//     "patchwork",
	//     "tribal",
	//     "zigzag",
	//     "argyle",
	//     "damask",
	//     "brocade",
	//     "herringbone",
	//     "jacquard",
	//     "lace",
	//     "mesh",
	//     "seersucker",
	// ];
	let fields_names = [
		'item',
		'size',
		'color',
		'sex',
		'fit',
		// "material",
		// "pattern",
		'event',
		'style'
	];

	let user_dict = {};
	fields_names.forEach((field) => {
		user_dict[field] = 'none';
	});

	let sampling_dict = {
		item: item_list,
		size: size_list,
		color: color_list,
		sex: sex_list,
		fit: fit_list,
		// "material": material_list,
		// "pattern": pattern_list,
		event: events_list,
		style: style_list
	};

	let userInput = '';
	let parsedInput = [];

	// Update parsedInput whenever userInput changes
	$: {
		parsedInput = parseInput(userInput);
	}

	function parseInput(input) {
		let adjectives = [];
		let names = [];

		fields_names.forEach((field) => {
			user_dict[field] = 'none';
		});

		let doc = nlp(input);
		let taggedTokens = doc.out('tags');

		for (let token in taggedTokens[0]) {
			if (taggedTokens[0][token].includes('Adjective')) {
				adjectives.push(token);
			}
			if (taggedTokens[0][token].includes('Noun')) {
				names.push(token);
			}
		}

		function getUserChoices(tokens, userDict) {
			for (let field in userDict) {
				for (let token of tokens) {
					if (sampling_dict[field].includes(token)) {
						userDict[field] = token;
					}
				}
			}
		}

		getUserChoices(adjectives.concat(names), user_dict);

		console.log(user_dict);

		// Split the input into words and spaces
		const wordsAndSpaces = input.split(/(\s+)/).filter((e) => e);

		// Replace some words with WordSelector components
		return wordsAndSpaces.map((word) => {
			if (!word.trim()) {
				return ' '; // preserve spaces
			} else if (shouldBecomeWordSelector(word, user_dict)) {
				return { component: WordSelector, word: word };
			} else {
				return word;
			}
		});
	}

	function shouldBecomeWordSelector(word, dic) {
		// Define the condition for a word to become a WordSelector
		// For example, if the word is 'pattern', 'and', etc.
		return Object.values(dic).includes(word);
	}

	function goToDetailPage() {
		// Convert parsedInput to a string
		const mainText = parsedInput
			.map((item) => (typeof item === 'string' ? item : item.word))
			.join('');
		// Navigate to the detail page with mainText as a query parameter
		goto(`/detail?prompt=${encodeURIComponent(mainText)}`); // <-- Change this line
	}

	// OPENAI
	const openai = new OpenAI({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true
	});

	//
</script>

<div class="mt-8 px-4 text-center">
	<!--Title-->
	<div class="text-sm text-primary-500">Bug Busters</div>
	<div class="mt-4 text-4xl font-bold uppercase">
		Fabric<span class="text-primary-500">ai</span>
	</div>
	<div class="mt-2 px-8 text-gray-500">
		Helps fashion designer to visualize their ideas (really?)
	</div>

	<!-- Prompting-->
	<div class="mt-32 px-4">
		<!-- Main Text -->
		<div class="text-2xl font-semibold">
			{#each parsedInput as item, index (index)}
				{#if typeof item === 'string'}
					{@html item} <!-- render strings (including spaces) as HTML -->
				{:else}
					<svelte:component this={item.component} word={item.word} />
				{/if}
			{/each}
		</div>
	</div>

	<!-- Missing elements -->
	<div class="hidden mt-6 flex-col text-center">
		<div class="text-sm">You're missing these elements to have a good result!</div>
		<div class="mt-2 flex flex-row space-x-1 justify-center">
			<Button pill>Skirt</Button>
			<Button pill>Material</Button>
			<Button pill>Color</Button>
		</div>
	</div>

	<!-- Submit -->
	<div class="fixed bottom-4 left-0 w-full flex justify-center pb-4">
		<div class="flex flex-col px-4 w-full items-center">
			<div class="mt-4 px-8 w-full">
				<input
					class="w-full text-lg border-transparent focus:border-transparent focus:ring-0"
					bind:value={userInput}
					type="text"
					placeholder="I want a yellow colored skirt..."
				/>
				<div class="mt-8 space-x-1">
					<!-- <Button class="rounded-2xl px-3"
						><Icon color="white" size="1.4em" src={IoSettingsSharp} /></Button
					> -->
					<Button class="rounded-2xl px-3"><Icon color="white" size="1.4em" src={IoDice} /></Button>
				</div>
			</div>

			<Button
				class=" w-52 mt-10 px-8 py-4 uppercase font-bold rounded-2xl"
				on:click={goToDetailPage}>Craft my idea</Button
			>
		</div>
	</div>
</div>
