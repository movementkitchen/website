# Movement Kitchen Website - Claude Instructions

This document provides instructions for Claude when working with the Movement Kitchen website repository.

## Repository Overview

This is a Gatsby-based website for Movement Kitchen, focusing on movement, fitness, and yoga content.

## Blog Post Structure

Blog posts are located in `/src/blog/` with the following structure:

```sh
src/blog/
├── post-name/
│   ├── index.md
│   └── images/files (if any)
```

### Blog Post Format

Each blog post must include:

1. **Directory**: Create a new directory in `/src/blog/` using kebab-case naming (e.g., `the-truth-about-yoga-and-muscle`)

2. **Front Matter**: Each `index.md` must start with:

```yaml
---
title: "Post Title"
subTitle: "Optional Subtitle"
date: "YYYY-MM-DDTHH:MM:SS.sssZ"
path: "/post-url-path/"
tags: ["Tag1", "Tag2", "Tag3"]
featuredImage: image-filename.jpg
---
```

3. **Content Guidelines**:
   - Use standard Markdown formatting
   - Images should be placed in the same directory as the post
   - Reference images using relative paths
   - YouTube videos can be embedded using iframe tags
   - Small captions for images use `<small>` HTML tags
   - Include references/citations at the end if applicable
   - Sign off with "Ivana xx" for consistency

### Common Tags

Based on existing posts, common tags include:

- "movement"
- "fitness"
- "yoga"
- "science"
- "health"
- "coaching"
- "pain"
- "exercise"
- "biomechanics"

## Development Guidelines

1. Follow the existing code style and patterns
2. Test changes locally before committing
   - run `make build-site` and makes sure it's successfully building – should end with something like `Done in 6.58s`
   - check the generated file (e.g. `public/blog/the-truth-about-yoga-and-muscle/index.html`)
3. Ensure all images are optimized for web – convert to WebP
4. Maintain consistent formatting across blog posts
