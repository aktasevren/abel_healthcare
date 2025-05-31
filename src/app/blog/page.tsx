import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import blogData from '@/data/blog-posts.json'

export const metadata: Metadata = {
  title: 'Blog | Biyomedikal Teknolojileri ve Sağlık',
  description: 'Biyomedikal teknolojileri, sağlık sektöründeki yenilikler ve tıbbi cihazlar hakkında güncel bilgiler ve makaleler.',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Blog</h1>
        <div className="grid gap-12">
          {blogData.posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <span className="mr-4">{post.author}</span>
                        <time className="text-sm">
                          {new Date(post.date).toLocaleDateString('tr-TR')}
                        </time>
                      </div>
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 