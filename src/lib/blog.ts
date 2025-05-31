export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  date: string
  image: string
  author: string
  tags: string[]
}

// Blog yazılarını oluşturmak için yardımcı fonksiyon
export function createBlogPost(post: Omit<BlogPost, 'slug'>): BlogPost {
  const slug = post.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return {
    ...post,
    slug,
  }
}

// Blog yazısı şablonu
export const blogPostTemplate = {
  title: '',
  description: '',
  content: `
    <h2>Giriş</h2>
    <p>Buraya giriş paragrafınızı yazın...</p>
    
    <h2>Ana Bölüm</h2>
    <p>Ana içeriğinizi buraya yazın...</p>
    
    <h2>Sonuç</h2>
    <p>Sonuç paragrafınızı buraya yazın...</p>
  `,
  date: new Date().toISOString().split('T')[0],
  image: '/blog/default-image.jpg',
  author: '',
  tags: [],
}

// SEO meta etiketleri oluşturmak için yardımcı fonksiyon
export function generateBlogMeta(post: BlogPost) {
  return {
    title: `${post.title} | Biyomedikal Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
} 