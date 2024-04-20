<script>
    let item_list = [
        "dress",
        "shirt",
        "pants",
        "shorts",
        "skirt",
        "jacket",
        "coat",
        "sweater",
        "blouse",
        "suit",
        "tie",
        "blazer",
        "vest",
        "top",
        "jeans",
        "leggings",
        "hoodie",
        "t-shirt",
        "cardigan",
        "romper",
        "jumpsuit",
        "scarf",
        "hat",
        "gloves",
        "boots",
        "heels",
        "sandals",
        "sneakers",
        "flats",
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
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "black",
        "white",
        "brown",
        "gray",
        "beige",
        "navy",
        "teal",
        "burgundy",
        "olive",
        "cream",
        "silver",
        "gold",
        "taupe",
        "charcoal",
        "maroon",
        "khaki",
        "turquoise",
        "mustard",
        "lavender",
        "coral",
        "mint",
        "ruby",
        "indigo",
    ];
    let sex_list = [
        "men",
        "man",
        "woman",
        "boy",
        "girl",
        "male",
        "female",
        "gentleman",
        "lady",
        "guy",
        "miss",
        "mister",
        "ms",
        "mr",
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
        "loose-fit",
        "slim-fit",
        "slim",
        "tight",
        "baggy",
        "fitted",
        "flowy",
        "form-fitting",
        "a-line",
        "skinny",
        "wide-leg",
        "bell-bottom",
        "long-sleeve",
        "short-sleeve",
        "empire",
        "peplum",
        "tailored",
        "crop",
        "oversized",
        "athletic",
        "relaxed",
        "balloon",
        "flared",
        "bootcut",
        "capri",
        "harem",
        "jeggings",
        "cargo",
        "draped",
        "wrap",
        "high-waisted",
        "low-rise",
        "mid-rise",
        "drop-crotch",
        "pleated",
    ];
    let style_list = [
        "classic",
        "classy",
        "casual",
        "elegant",
        "bohemian",
        "vintage",
        "gothic",
        "preppy",
        "retro",
        "sporty",
        "chic",
        "edgy",
        "minimalist",
        "romantic",
        "urban",
        "glamorous",
        "artsy",
        "modern",
        "sophisticated",
        "eclectic",
        "feminine",
        "masculine",
        "formal",
        "business casual",
        "streetwear",
        "hipster",
        "tomboy",
        "punk",
        "rock",
        "country",
        "boho",
        "nautical",
    ];
    let events_list = [
        "sport",
        "competition",
        "formal",
        "casual",
        "business",
        "cocktail",
        "party",
        "beach",
        "wedding",
        "club",
        "prom",
        "birthday",
        "graduation",
        "concert",
        "picnic",
        "barbecue",
        "date",
        "interview",
        "meeting",
        "gala",
        "festival",
        "conference",
        "seminar",
        "workshop",
        "exhibition",
        "trade show",
        "fashion show",
        "award ceremony",
        "charity event",
        "fundraiser",
        "party",
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
        "item",
        // "size",
        "color",
        "sex",
        "fit",
        // "material",
        // "pattern",
        "event",
        "style",
    ];

    let user_dict = {};
    fields_names.forEach(field => {
        user_dict[field] = "none";
    });
    console.log(user_dict);

    let sampling_dict = {
        "item": item_list,
        // "size": size_list,
        "color": color_list,
        "sex": sex_list,
        "fit": fit_list,
        // "material": material_list,
        // "pattern": pattern_list,
        "event": events_list,
        "style": style_list
    };

    //let sentence = "A classy blue shirt with long sleeves and slim fit that is suitable for a man for a business convention."
    let sentence = "I want a chic red dress for a woman who has an important gala night. The dress must have an a-line structure and floor lenght."
    console.log("Printing sentence")
    console.log(sentence)

    import nlp from 'compromise';

    let doc = nlp(sentence);
    let taggedTokens = doc.out('tags');

    let adjectives = [];
    let names = [];

    for (let token in taggedTokens[0]) {
        if (taggedTokens[0][token].includes("Adjective")) {
            adjectives.push(token);
        }
        if (taggedTokens[0][token].includes("Noun")) {
            names.push(token);    console.log(adjectives)

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

    console.log(adjectives)

    getUserChoices(adjectives.concat(names), user_dict);
    console.log("Printing user_dict\n")
    console.log(user_dict);


    function getOnlyMissingFields(fieldsDict) {
        let missingFields = [];
        for (let field in fieldsDict) {
            if (fieldsDict[field].length === 0 || fieldsDict[field] === "none") {
                missingFields.push(field);
            }
        }
        return missingFields;
    }

    function getFields(fieldsDict) {
        let chosenFields = [];
        for (let field in fieldsDict){
            if (fieldsDict[field].length >= 0 || fieldsDict[field] !== "none") {
                chosenFields.push({ field, value: fieldsDict[field] });
            }
        }
        return chosenFields;
    }

    console.log("Printing missing fields");
    console.log(getOnlyMissingFields(user_dict));

    function getExamplesForField(fieldName) {
        if (!fields_names.includes(fieldName)) {
            console.log(`Error: field "${fieldName}" does not exist.`);
            return [];
        } else {
            return sampling_dict[fieldName][Math.floor(Math.random() * sampling_dict[fieldName].length)];
        }
    }

    let missingFields = getOnlyMissingFields(user_dict);
    console.log("****************************************")
    console.log("Printing examples for missing fields");
    missingFields.forEach(field => {
        console.log(field + ":", getExamplesForField(field));
    });
    console.log("****************************************")
    console.log(user_dict)


    function fillMissingValues(userDict, missingFields) {
        missingFields.forEach(field => {
            if (userDict[field] === "none") {
                userDict[field] = getExamplesForField(field);
            }
        });
    }

    let missing_fields = getOnlyMissingFields(user_dict);
    fillMissingValues(user_dict, missing_fields);
    console.log("Printing after 'fillMissingValues'")
    console.log(user_dict)

    /*********************************************************************************/
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

    let prompt1 = "I am a stylist and i want you to help me develop some sketches. Keeping always the same drawing style, generate only the sketch for  a {style} {color} {item} - do not generate the final product, just a draft on a neutral background that seems hand drawn and be sure that there is only one sketch per page. Imagine an item with {fit} fit, that is suitable for a {event}. The item is meant to be worn by a {sex}.";
    
    let filledIntro = substituteValues(user_dict, prompt1);
    console.log("Printing filled sentence")
    console.log(filledIntro);


    let prompt_description = "Consider the following text '" + filledIntro +"'. Imagine the final product and give me a description of the item, without mentioning the material, that can be used as a caption for the product. It should be a brief description, with some technical details. The generated text must not include anything apart from the caption, so no title, no bullet points and no fancy adjective." 
    let prompt_materials = "Consider the following text: '" + filledIntro + "'.Propose a list of 6 possible materials that are suitable for producing the item and return just the name of the materials, without titles or explanations."
    let prompt2 = "Given this text '" + filledIntro + "', can you give me a textual description (no bullet point) of a pattern that uses {color} and can be used for the fabric of the item\? The output must be only the description of the pattern, avoid any additional text"
    let prompt_patterns = substituteValues(user_dict, prompt2)

    console.log("PRINTING PROMPT PATTERNS");
    console.log(prompt_patterns);


/********************************************************************************
 * ********************* GPT ****************************************************
 * ******************************************************************************
 */

    import OpenAI from "openai";
	import { createResponseHeaders } from 'openai/core';
    const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

//import.meta.env.VITE_OPENAI_KEY

    async function main() {
    
    //Initial conversation
    const completion1 = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt_description }],
        model: "gpt-3.5-turbo",
    });
    
    console.log("Description of the item");
    console.log(completion1.choices[0]);

    //Materials conversation
    const completion2 = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt_materials }],
        model: "gpt-3.5-turbo",
    });
    
    console.log("Proposed materials");
    console.log(completion2.choices[0]);

    //Pattern conversation
    const completion3 = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt_patterns }],
        model: "gpt-3.5-turbo",
    });
    
    console.log("Proposed patterns");
    console.log(completion3.choices[0]);

    let prompt_generate_pattern = "Create a pattern for fabric having the following features '" + completion3.choices[0].message.content + "'.";
    let proposed_materials = completion2.choices[0].message.content;
    let description = completion1.choices[0].message.content;

    //prompt to get title
    let title_prompt = "Given the following description: '" + description + "', create a short title for the described item\n.";

//Title conversation
    const completion4 = await openai.chat.completions.create({
        messages: [{ role: "system", content: title_prompt }],
        model: "gpt-3.5-turbo",
    });
    
    console.log("Proposed title");
    console.log(completion4.choices[0]);
    let title = completion4.choices[0].message.content;
    console.log(title)

    console.log(prompt_generate_pattern);
    console.log(proposed_materials);
    console.log(description);
    
    /*********************************************************************************************/

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: filledIntro,
        n: 1,
        size: "1024x1024",
    });

    let generated_sketch_url = response.data[0].url;
    console.log(generated_sketch_url);

    
    const response_pattern = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt_generate_pattern,
        n: 1,
        size: "1024x1024",
    });

    let pattern_image1 = response_pattern.data[0].url;
    let pattern_image2 = response_pattern.data[1].url;
    let pattern_image3 = response_pattern.data[2].url;
    console.log(pattern_image1);
    console.log(pattern_image2);
    console.log(pattern_image3);

    /***************************************************************************
     * ************************************************************************
     * *************************************************************************/
    // HIGHLHIGHTS WORDS IN THE DICTIONARY

    function findTokensInLists(inputString, lists) {
        const tokens = inputString.split(' ');
        const foundTokens = [];

        tokens.forEach(token => {
            lists.forEach(list => {
                if (list.includes(token)) {
                    foundTokens.push(token);
                }
            });
        });

        return foundTokens;
    }

    let dictionary = [item_list, color_list, sex_list, fit_list, style_list, events_list];
    // let dictionary = [item_list, size_list, color_list, sex_list, fit_list, style_list, events_list];


    let words_to_highlight = findTokensInLists(sentence, dictionary)
    console.log("Words to highlight:")
    console.log(words_to_highlight)

    /******************************************************************************************
     * *****************************************************************************************
     * ****************************************************************************************
    */
    //      GENERATES 3 ALTERNATIVES FOR A GIVEN WORD

    function findAlternatives(word, dictionary) {
    for (let list of dictionary) {
        if (list.includes(word)) {
            let alternatives = list.filter(item => item !== word);
            return alternatives.slice(0, 3);
        }
    }
    return [];
    }

    //Testing the function
    let word_to_test = "slim";
    let alternatives = findAlternatives(word_to_test, dictionary);
    console.log(alternatives)
    }

    /*******************************************************************
     * *****************************************************************
     * ******************************************************************
    */
    //GENERATE AN IMAGE FROM A PROMPT (PIPELINE)

    async function image_from_prompt(prompt, n_images){
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: n_images,
            size: "1024x1024",
        });
    
    let generated_sketch_urls = response.data;
    console.log(generated_sketch_urls);

    }



    main(); 


</script>

<div>

    Ciao
</div>
