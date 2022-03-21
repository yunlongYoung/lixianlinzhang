<script>
	import { onMount } from 'svelte';
	import { all_points } from '$lib/points';
	export let district;
	var map;
	var zoom = 15;
	var lay;
	var lay2;
	var onlyMapLay;
	var points;
	onMount(async () => {
		var imageURL =
			'http://t0.tianditu.gov.cn/img_w/wmts?' +
			'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
			'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d999b17e082a319d7892134e07b054af';
		var imageURL2 =
			'http://t0.tianditu.gov.cn/cia_w/wmts?' +
			'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
			'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d999b17e082a319d7892134e07b054af';
		// var imageURL =
		// 	'http://t0.tianditu.gov.cn/img_w/wmts?' +
		// 	'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
		// 	'&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d999b17e082a319d7892134e07b054af';
		//创建自定义图层对象
		lay = new T.TileLayer(imageURL, { minZoom: 13, maxZoom: 18 });
		lay2 = new T.TileLayer(imageURL2, { minZoom: 13, maxZoom: 18 });
		var config = { layers: [lay, lay2] };
		//初始化地图对象
		map = new T.Map('mapDiv', config);
		//设置显示地图的中心点和级别
		let [x, y] = district.center.split(',');
		map.centerAndZoom(new T.LngLat(x, y), zoom);
		//允许鼠标滚轮缩放地图
		map.enableScrollWheelZoom();
	});
</script>

<svelte:head>
	<script
		type="text/javascript"
		src="http://api.tianditu.gov.cn/api?v=4.0&tk=893b1b6100bd7038f11c99e58227aaf2"></script>
</svelte:head>

<h1>{district.name}</h1>
<div id="mapDiv" />

<style>
	#mapDiv {
		width: 100%;
		height: 720px;
	}
</style>
