/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import styles from './blog-post-item.module.scss';

const BlogPostItem = ({ post }) => {
  const {
    frontmatter: {
      title,
      featured_image: featuredImage,
      author,
      date,
      //  category,
    },
    fields: { slug },
  } = post;

  return (
    <article className='col-4'>
      <div className={styles.articleContent}>
        <Link to={`/blog/${slug}`}>
          <div className={styles.featuredImage}>
            <Img fluid={featuredImage.childImageSharp.fluid} alt={title} />
          </div>
          <div className={styles.content}>
            <h4>{title}</h4>
            <p className='subtitle1'>{author}</p>
            <span>{date}</span>
          </div>
        </Link>
      </div>
    </article>
  );
};
BlogPostItem.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.object,
    fields: PropTypes.object,
  }).isRequired,
};

export default BlogPostItem;
