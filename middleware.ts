export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/orders',
        '/profile',
        '/gigs/new',
        '/gigs/edit/:id+'
    ]
}