<script>
	import { onMount } from 'svelte';
	export let district;
	var map;
	var zoom = 15;
	onMount(async () => {
		map = new T.Map('mapDiv');
		let [x, y] = district.center.split(',');
		map.centerAndZoom(new T.LngLat(x, y), zoom);
	});
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="http://api.tianditu.gov.cn/api?v=4.0&tk=d999b17e082a319d7892134e07b054af"></script>
</svelte:head>

<h1>{district.name}</h1>
<div id="mapDiv" />

<style>
	#mapDiv {
		width: 100%;
		height: 480px;
	}
</style>
