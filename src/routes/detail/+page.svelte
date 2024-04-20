<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { RiFinanceMoneyEuroCircleLine } from 'svelte-icons-pack/ri';
	import { FiClock } from "svelte-icons-pack/fi";

	export let data;

	

	console.log(data);
</script>

<Navigation />
<div>
	<!-- Image -->
	<div>
		<img src="{data.generated_sketch_url}" alt="Fabricai" />
	</div>
	<!-- Content-->
	<div class="text-center px-4">
		<div class="mt-8 text-xl font-bold uppercase">
			Fabric<span class="text-primary-500">ai</span>
		</div>
		<div class="mt-2 px-2 text-2xl font-semibold">{data.title}</div>

		<div class="px-2 mt-8 text-lg text-gray-600 font-mono">
			{data.prompt}
		</div>

		<!-- Cost/Time -->
		<div class="mt-8  px-4 py-6 rounded-3xl">
			<div class="grid grid-cols-2 items-center justify-center self-center">
				<div class="flex flex-row w-full justify-center items-center">
					<Icon size="1.4em" src={RiFinanceMoneyEuroCircleLine} />
					<div class="ml-[3px]">
						Cost
					</div>
					<div class="ml-[5px] font-bold">
						€100
					</div>
				</div>
				<div class="flex flex-row  w-full justify-center items-center">
					<Icon size="1.4em" src={FiClock} />
					<div class="ml-[3px]">
						Time
					</div>
					<div class="ml-[5px] font-bold">
						3h
					</div>
				</div>
			</div>
		</div>

		<!-- Description -->
		<div class="mt-5 bg-blue-100 px-4 py-6 rounded-3xl">
			<h2 class="text-lg font-bold">Description</h2>
			<div class="mt-4">
				{data.description}
			</div>
		</div>

		<!-- Suggested Materials -->
		<div class="mt-5 bg-yellow-100 px-4 py-6 rounded-3xl">
			<div class="text-lg font-bold">Materials used</div>
			<div class="mt-2 text-sm text-gray-500">
				Here your have the materials that could be used in production
			</div>
			<pre class="mt-4">
				{data.materials}
			</pre>
		</div>

		<!-- Pattern images -->
		<div class="mt-5 bg-green-100 px-4 py-6 rounded-3xl">
			<h2 class="text-lg font-bold">Patterns</h2>
			<div class="mt-2 text-sm text-gray-500">
				These are some styles that could be good for your cloth
			</div>
			<div class="mt-3 flex flex-row space-x-1">
				<div class="w-1/3 h-32 rounded-3xl" style="background-image: url({data.pattern_image1})"></div>
				<div class="w-1/3 rounded-3xl" style="background-image: url({data.pattern_image2})"></div>
				<div class="w-1/3 rounded-3xl" style="background-image: url({data.pattern_image3})"></div>
			</div>
		</div>

		<!-- Environments to use -->

		<!-- Suggestions -->

		<hr class="my-8" />
	</div>
</div>
