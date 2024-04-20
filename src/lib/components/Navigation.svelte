<!-- Navigation.svelte -->
<script>
    import { Button } from 'flowbite-svelte';
    import { Icon } from 'svelte-icons-pack';
    import { LuArrowLeft } from 'svelte-icons-pack/lu';
</script>

<div class="fixed top-4 left-4 right-0 z-50">
    <Button pill href="/"><Icon color="white" size="1.5em" src={LuArrowLeft} /></Button>
</div>