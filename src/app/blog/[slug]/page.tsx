import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import blogData from '@/data/blog-posts.json'
import styles from './BlogPost.module.css'

interface BlogPost {
  slug: string
  title: string
  description: string
  content: {
    type: string
    title: string
    text: string
    image?: string
  }[]
  date: string
  image: string
  tags: string[]
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogData.posts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
      description: 'İstediğiniz blog yazısı bulunamadı.',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogData.posts.find(post => post.slug === params.slug)

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Blog yazısı bulunamadı</h1>
        <Link href="/blog">Blog sayfasına dön</Link>
      </div>
    )
  }

  return (
    <>
      <article className={styles.blogPost}>
        <div className={styles.header}>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('tr-TR')}</time>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            priority
          />
        </div>

        <div className={styles.content}>
          {post.content.map((section, index) => (
            <section key={index} className={styles.section}>
              <h2>{section.title}</h2>
              <ReactMarkdown>{section.text}</ReactMarkdown>
              {section.image && (
                <div className={styles.sectionImage}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={400}
                  />
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/abelmedikal" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter
              </a>
              <a href="https://linkedin.com/company/abelmedikal" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="https://instagram.com/abelmedikal" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
            </div>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} Abel Medikal. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>
      </article>
    </>
  )
} 