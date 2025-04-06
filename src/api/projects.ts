import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
    const projects = [
        {
            slug: 'project-1',
            title: 'Project title 1',
            description:
                'Project description Project description Project description Project description Project description Project description Project description Project description',
            startDate: '2022-01-01',
            endDate: '2022-12-31',
            image: '/src/assets/ex-pastel-bg.jpg'
        },
        {
            slug: 'project-2',
            title: 'Project title 2',
            description:
                'Project description Project description Project description Project description Project description Project description Project description Project description',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            image: '/src/assets/ex-amber-bg.jpg'
        },
        {
            slug: 'project-3',
            title: 'Project title 3',
            description:
                'Project description Project description Project description Project description Project description Project description Project description Project description',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            image: '/src/assets/mountain.jpg'
        }
    ];

    return new Response(JSON.stringify(projects), {
        status: 200
    });
};
