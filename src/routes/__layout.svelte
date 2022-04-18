<svelte:head>
	<title>礼县林长制智慧工作平台</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link
		rel="stylesheet"
		href="https://unpkg.com/purecss@2.1.0/build/pure-min.css"
		integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH"
		crossorigin="anonymous"
	/>
</svelte:head>
<nav>
	<div class="pure-menu pure-menu-horizontal">
		<a href="/" class="pure-menu-heading pure-menu-link"><b>首页</b></a>
		<ul class="pure-menu-list">
			<li class="pure-menu-item">
				<a href="/news" class="pure-menu-link">动态</a>
			</li>
			<li class="pure-menu-item">
			<a href="/policy" class="pure-menu-link">政策</a>
			</li>
			<li class="pure-menu-item">
			<a href="/district" class="pure-menu-link">机构</a>
			</li>
			<li class="pure-menu-item">
			<a href="/plan" class="pure-menu-link">规划</a>
			</li>
		</ul>
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	.custom-restricted-width {
		/* To limit the menu width to the content of the menu: */
		display: inline-block;
		/* Or set the width explicitly: */
		/* width: 10em; */
	}
	main {
		max-width: 768px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
