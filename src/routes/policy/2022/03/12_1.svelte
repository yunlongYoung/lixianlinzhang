<script>
	const numbers = Array.from({ length: 6 }, (i, index) => index + 1);
</script>

<h2>关于规范设置林长公示牌的通知</h2>
<em> 2022年3月12日 </em>
<div class="pure-g">
	<div class="pure-u-1">
		{#each numbers as i}
			<img src={'/pictures/2022/03/12_1 (' + i + ').png'} alt="" />
		{/each}
	</div>
</div>

<style>
	img {
		width: 100%;
	}
</style>
