<script>
	import { onMount } from 'svelte';
	export let district;
	var map;
	var zoom = 15;
	onMount(async () => {
		map = new T.Map('mapDiv');
		let [x, y] = district.center.split(',');
		map.centerAndZoom(new T.LngLat(x, y), zoom);
		//设置显示地图的中心点和级别
		//允许鼠标滚轮缩放地图
		map.enableScrollWheelZoom();

		var imageURL =
			'http://t0.tianditu.gov.cn/img_w/wmts?' +
			'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
			'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d999b17e082a319d7892134e07b054af';
		//创建自定义图层对象
		var lay = new T.TileLayer(imageURL, { minZoom: 13, maxZoom: 19 });
		//将图层增加到地图上
		map.addLayer(lay);

		var imageURL2 =
			'http://t0.tianditu.gov.cn/cia_w/wmts?' +
			'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
			'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d999b17e082a319d7892134e07b054af';
		//创建自定义图层对象
		var lay2 = new T.TileLayer(imageURL2, { minZoom: 13, maxZoom: 19 });
		//将图层增加到地图上
		map.addLayer(lay2);
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
