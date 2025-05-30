export interface Metadata {
    title: string;
    description: string;
    openGraph: {
        title: string;
        description: string;
        images: { url: string }[];
    };
}

export interface PostData {
    id: string;
    title: string;
    author: {
      name: string;
    }
    content?: string;
    createdAt: string;
    category?: string;
  };

