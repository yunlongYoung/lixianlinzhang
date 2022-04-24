<script>
	const numbers = Array.from({ length: 13 }, (i, index) => index + 1);
</script>

<h2>林长制工作要点和议事规则</h2>
<em> 2021年11月20日 </em>
<div class="pure-g">
	<div class="pure-u-1">
		{#each numbers as i}
			<img src={'/pictures/2021/12/2_1 (' + i + ').png'} alt="" />
		{/each}
	</div>
</div>

<style>
	img {
		width: 100%;
	}
</style>
