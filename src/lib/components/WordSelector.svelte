<script>
    import { onMount, onDestroy } from 'svelte';
    import { activeWordSelector } from '$lib/activeWordSelector'; // import the store

    export let word;
    let words = ['skirt', 'dress'].filter(w => w !== word); // filter out the word
    words.unshift(word); // add word as the first element
    let showDropdown = false;
    let id = Math.random(); // generate a unique id for each WordSelector

    activeWordSelector.subscribe((value) => {
        // if another WordSelector is active, close this one
        if (value !== id) {
            showDropdown = false;
        }
    });

    function selectWord(event, newWord) {
        event.stopPropagation(); // Stop event propagation
        word = newWord;
        showDropdown = false;
    }

    function handleClickOutside(event) {
        if (event.target.closest('.dropdown') === null) {
            showDropdown = false;
        }
    }

    function handleClickInside(event) {
        event.stopPropagation();
        showDropdown = !showDropdown;
        activeWordSelector.set(id); // set this WordSelector as the active one
    }

    if (typeof window !== 'undefined') {
        onMount(() => {
            window.addEventListener('click', handleClickOutside);
        });

        onDestroy(() => {
            window.removeEventListener('click', handleClickOutside);
        });
    }
</script>

<span
    class="relative cursor-pointer inline-block dropdown"
    on:click={handleClickInside}
    role="button"
    tabindex="0"
    on:keydown={(event) => {
        if (event.key === 'Enter') handleClickInside(event);
    }}
>
    <span class="text-primary-500">{word}</span>
    <div class="{showDropdown ? 'block' : 'hidden'} absolute bg-white shadow rounded mt-1 z-50">
        {#each words as newWord (newWord)}
            <button
                class="block px-4 py-2 hover:bg-gray-200"
                on:click={(event) => selectWord(event, newWord)}>{newWord}</button
            >
        {/each}
    </div>
</span>