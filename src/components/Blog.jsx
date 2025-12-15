import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data';
import './Blog.css';

const Blog = () => {
    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Latest Articles
                </motion.h2>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            className="blog-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">
                                        <Calendar size={14} /> {post.date}
                                    </span>
                                    <span className="blog-read-time">
                                        <Clock size={14} /> {post.readTime}
                                    </span>
                                </div>

                                <h3 className="blog-title">
                                    <a href={post.link}>{post.title}</a>
                                </h3>

                                <p className="blog-excerpt">{post.excerpt}</p>

                                <div className="blog-footer">
                                    <div className="blog-tags">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="blog-tag">#{tag}</span>
                                        ))}
                                    </div>
                                    <a href={post.link} className="read-more">
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
