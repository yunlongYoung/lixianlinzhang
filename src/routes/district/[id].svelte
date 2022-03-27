<script>
    // populated with data from the endpoint
    export let district;
</script>

<h1>{district.name}</h1>
{#if district.id.slice(-7)=='0000000'}
<img src={`http://api.tianditu.gov.cn/staticimage?center=${district.center}&width=480&height=720&zoom=10&layers=%20img_c,cva_c&tk=d999b17e082a319d7892134e07b054af`} alt={district.name}>
{:else if district.id.slice(-3)=='000'}
<img src={`http://api.tianditu.gov.cn/staticimage?center=${district.center}&width=480&height=720&zoom=12&layers=%20img_c,cva_c&tk=d999b17e082a319d7892134e07b054af`} alt={district.name}>
{:else}
<img src={`http://api.tianditu.gov.cn/staticimage?center=${district.center}&width=480&height=720&zoom=14&layers=%20img_c,cva_c&tk=d999b17e082a319d7892134e07b054af`} alt={district.name}>
{/if}