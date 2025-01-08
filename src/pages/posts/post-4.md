---
layout: '../../layouts/MarkdownPostLayout.astro'
title: Mon quatrième billet de blog
author: Apprenti Astro
description: "Ce billet apparaîtra tout seul !"
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "Le mot « astro » sur fond d'illustration de planètes et d'étoiles."
pubDate: 2022-08-08
tags: ["astro", "réussites"]
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Mon troisième article de blog</title>
  </head>
  <body>

Ce billet devrait apparaître avec mes autres billets de blog, car `import.meta.glob()` renvoie une liste de tous mes billets pour créer ma liste.

</body>
</html>
