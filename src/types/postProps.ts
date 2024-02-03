interface PostProps {
    pageContext: {
        id?: string;
        node: {
            id: string;
            brief: string;
            title: string;
            subtitle: string;
            url: string;
            publishedAt: string;
            coverImage: {
                url: string;
            };
            content: {
                html: string;
            },
            seo: {
                title: string;
                description: string;
            }
        }
    }
}