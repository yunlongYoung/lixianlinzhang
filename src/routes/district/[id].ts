import { districts } from "$lib/district";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {

    const district = { "id": params.id, "name": districts[params.id] };

    if (params) {
        return { body: { district } }
    }

    return {
        status: 404
    };
};