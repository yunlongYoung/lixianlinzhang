<script>
	// populated with data from the endpoint
	export let district;
</script>

<h1>{district.name}</h1>
<div id="mapDiv">
	<img
		src={`http://api.tianditu.gov.cn/staticimage?center=${district.center}&width=360&height=640&zoom=14&layers=%20img_c,cva_c&tk=d999b17e082a319d7892134e07b054af`}
		alt={district.name}
	/>
</div>

<style>
	#mapDiv {
		width: 100%;
		height: 720px;
	}
</style>
