import { districts } from "$lib/district";
import { coordinates } from "$lib/coordinate"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    const district = { "id": params.id, "name": districts[params.id], "center": coordinates[params.id] };

    if (params) {
        return { body: { district } }
    }

    return {
        status: 404
    };
};