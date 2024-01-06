import React from 'react';
import './blog.css';
import { gridimg1, gridimg2, gridimg3, gridimg4, gridimg5 } from './imports';
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">

      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={gridimg1} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={gridimg2} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={gridimg3} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={gridimg4} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={gridimg5} date='Sep 26, 2021' title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>

    </div>
  );
};

export default Blog;
