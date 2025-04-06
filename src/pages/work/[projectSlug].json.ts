import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
    const slug = params.projectSlug;
    const project = {
        slug,
        title: 'Project title',
        description:
            'Project description Project description Project description Project description Project description Project description Project description Project description',
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        image: 'https://placekitten.com/200/300'
    };

    if (!slug) {
        return new Response(null, {
            status: 400,
            statusText: 'Bad Request: Missing product slug'
        });
    }

    return new Response(JSON.stringify(project), {
        status: 200
    });
};
