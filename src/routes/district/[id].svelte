<script>
    // populated with data from the endpoint
    export let district;
</script>

<h1>{district.name}</h1>
<img src={`http://api.tianditu.gov.cn/staticimage?center=${district.center}&width=480&height=720&zoom=14&layers=%20img_c,cva_c&tk=d999b17e082a319d7892134e07b054af`} alt={district.name}>