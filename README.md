## What is this?
The source code of my personal website, [polgomez.com](https://polgomez.com).

## How is it built?
I have been using [`harp`](http://harpjs.com) to great satisfaction.
No databases, no complex configurations: just `git clone`, `harp compile`, serve the generated `www` directory through NGINX (or similar) and you're all set.

The workflow for, e.g. a new blog post, is hopelessly simple:

1. Add an entry in [`_data.json`](public/blog/_data.json) with some info:
```
{
  "post-url": {
    "title": "Hello World!",
    "date": "August 25th, 2018",
    "author": "Pol"
  }
}
```
2. Write the Markdown-formatted body in `public/blog/post-url.md`, and [`_layout.jade`](public/blog/_layout.jade) takes care of the rest.

Not even three steps, which is great! I use [Bulma CSS](https://bulma.io/) for a decent 5-minute layout.
