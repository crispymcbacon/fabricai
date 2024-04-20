import { error } from '@sveltejs/kit';
import OpenAI from 'openai';
import nlp from 'compromise';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	// OPENAI
	const openai = new OpenAI({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true
	});
	const prompt = await url.searchParams.get('prompt');

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
	// let size_list = [
	//     "short",
	//     "long",
	//     "medium",
	//     "mini",
	//     "maxi",
	//     "midi",
	//     "knee-length",
	//     "ankle-length",
	//     "floor-length",
	//     "petite",
	//     "tall",
	//     "regular",
	//     "plus-size",
	//     "slim-fit",
	//     "loose-fit",
	//     "skinny-fit",
	//     "long-sleeve",
	//     "short-sleeve",
	//     "bootcut",
	//     "cropped",
	//     "oversized",
	//     "fitted",
	//     "tailored",
	//     "athletic",
	//     "relaxed",
	//     "flowy",
	//     "baggy",
	//     "form-fitting",
	// ];
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
		'men',
		'man',
		'woman',
		'boy',
		'girl',
		'male',
		'female',
		'gentleman',
		'lady',
		'guy',
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
		'sport',
		'competition',
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
		// "size",
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
		// "size": size_list,
		color: color_list,
		sex: sex_list,
		fit: fit_list,
		// "material": material_list,
		// "pattern": pattern_list,
		event: events_list,
		style: style_list
	};

	let doc = nlp(prompt);
	let taggedTokens = doc.out('tags');

	let adjectives = [];
	let names = [];

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

	function getOnlyMissingFields(fieldsDict) {
		let missingFields = [];
		for (let field in fieldsDict) {
			if (fieldsDict[field].length === 0 || fieldsDict[field] === 'none') {
				missingFields.push(field);
			}
		}
		return missingFields;
	}

	function getExamplesForField(fieldName) {
		if (!fields_names.includes(fieldName)) {
			console.log(`Error: field "${fieldName}" does not exist.`);
			return [];
		} else {
			return sampling_dict[fieldName][Math.floor(Math.random() * sampling_dict[fieldName].length)];
		}
	}

	function fillMissingValues(userDict, missingFields) {
		missingFields.forEach((field) => {
			if (userDict[field] === 'none') {
				userDict[field] = getExamplesForField(field);
			}
		});
	}

	let missing_fields = getOnlyMissingFields(user_dict);
	fillMissingValues(user_dict, missing_fields);

	function substituteValues(user_dict, intro) {
		let result = intro;
		for (let key in user_dict) {
			let placeholder = `{${key}}`;
			if (result.includes(placeholder)) {
				result = result.replace(placeholder, user_dict[key]);
			}
		}
		return result;
	}

	let prompt1 =
		'I am a stylist and i want you to help me develop some sketches. Keeping always the same drawing style, generate only the sketch for  a {style} {color} {item} - do not generate the final product, just a draft on a neutral background that seems hand drawn and be sure that there is only one sketch per page. Imagine an item, with {fit} fit, that is suitable for a {event}. The item is meant to be worn by a {sex}.';
	let filledIntro = substituteValues(user_dict, prompt1);

	let prompt_description =
		"Consider the following text '" +
		filledIntro +
		"'. Imagine the final product and give me a description of the item, without mentioning the material, that can be used as a caption for the product. It should be a brief description, with some technical details. The generated text must not include anything apart from the caption, so no title, no bullet points and no fancy adjective.";
	let prompt_materials =
		"Consider the following text: '" +
		filledIntro +
		"'.Propose a list of 6 possible materials that are suitable for producing the item and return just the name of the materials, without titles or explanations.";
	let prompt2 =
		"Given this text '" +
		filledIntro +
		"', can you give me a textual description (no bullet point) of a pattern that uses {color} and can be used for the fabric of the item? The output must be only the description of the pattern, avoid any additional text";
	let prompt_patterns = substituteValues(user_dict, prompt2);

	try {
		let description;
		let materials;
		let patterns;
		let title;
		
		description = await openai.chat.completions.create({
			messages: [{ role: 'system', content: prompt_description }],
			model: 'gpt-3.5-turbo'
		});

		let title_prompt =
			"Give me a short title for the described fashion element, maximum three words: \n\n'" +
			description +
			"'\n.";
		//let generated_sketch_url;

		materials = await openai.chat.completions.create({
			messages: [{ role: 'system', content: prompt_materials }],
			model: 'gpt-3.5-turbo'
		});

		patterns = await openai.chat.completions.create({
			messages: [{ role: 'system', content: prompt_patterns }],
			model: 'gpt-3.5-turbo'
		});

		title = await openai.chat.completions.create({
			messages: [{ role: 'system', content: title_prompt }],
			model: 'gpt-3.5-turbo'
		});

		let response = await openai.images.generate({
			model: 'dall-e-3',
			prompt: filledIntro,
			n: 1,
			size: '1024x1024'
		});
		//let generated_sketch_url = response.data[0].url;

		//Pattern conversation
		const completion3 = await openai.chat.completions.create({
			messages: [{ role: 'system', content: prompt_patterns }],
			model: 'gpt-3.5-turbo'
		});

		console.log('Proposed patterns');
		console.log(completion3.choices[0]);

		let prompt_generate_pattern =
			"Create a pattern for fabric having the following features '" +
			completion3.choices[0].message.content +
			"'.";

		const response_pattern = await openai.images.generate({
			model: 'dall-e-3',
			prompt: prompt_generate_pattern,
			n: 1,
			size: '1024x1024'
		});

		let pattern_image1 = response_pattern.data[0].url;
		let pattern_image2 = pattern_image1;
		let pattern_image3 = pattern_image1;

        console.log('DC',materials.choices[0].message.content);
		return {
			prompt: prompt,
			description: description.choices[0].message.content,
			materials: materials.choices[0].message.content,
			patterns: patterns.choices[0].message.content,
			title: title.choices[0].message.content,
			generated_sketch_url: response.data[0].url,
			pattern_image1: pattern_image1,
			pattern_image2: pattern_image2,
			pattern_image3: pattern_image3
		};
	} catch (err) {
		console.error('Error calling OpenAI API:', err);
		error(500, 'Internal Server Error');
		return;
	}
}
