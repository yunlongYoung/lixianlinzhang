/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    
    let district = params.id

    if (params) {
        return { body: { district } }
    }

    return {
        status: 404
    };
};