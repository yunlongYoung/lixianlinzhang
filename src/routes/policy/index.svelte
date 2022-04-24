<script lang="ts">
	import { articles } from './articles';
</script>

<h1>政策文件</h1>
<div class="pure-g">
	{#each articles as { link, title }, i}
		<ul>
			<div class="pure-u-5-24">
				<span class="date">{link.slice(0, 4) + '年'}</span>
				<br />
				<span class="date"
					>{parseInt(link.slice(5, 7)) + '月' + parseInt(link.slice(8, -2)) + '日'}</span
				>
			</div>
			<div class="pure-u-19-24">
				<a href={'policy/' + link}>{title}</a>
			</div>
		</ul>
	{/each}
</div>

<style>
	.date {
		font-size: 0.5rem;
	}
</style>
