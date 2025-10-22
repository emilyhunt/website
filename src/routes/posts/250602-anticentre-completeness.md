---
title: 'The outer edge of our galaxy is full of clusters too faint to see'
date: 2025-06-24T00:00:00+01:00
authors: ['Emily Hunt']
tags: ['open cluster', 'gaia', 'gaia DR3', 'star cluster', 'selection function', 'completeness']
categories: ['Star Clusters', 'Paper Summaries']
description: 'Using a new method, we tested how detectable open clusters are in the outer edges of our galaxy - finding that there are probably far more clusters out there than we currently think.'
thumbnail: '/assets/posts/250602-anticentre-completeness/thumbnail.webp'
image: '/assets/posts/250602-anticentre-completeness/header.webp'
paper: 'https://ui.adsabs.harvard.edu/abs/2025arXiv250618708H/abstract'
---

The outskirts of our galaxy are a curious place for open clusters. Two clusters - Berkeley 29 and Saurer 1 - are further away from our galaxy's centre than any other known open clusters. More than 2 kpc (∼6000 light years) stand between the edge of the 'usual' cluster distribution and these two objects. Are they alone, or are there more clusters like them out there waiting to be discovered?

![The distribution of clusters in the Milky Way and its outskirts. Berkeley 29 and Saurer 1 are labelled, and are in an odd spot.](/assets/posts/250602-anticentre-completeness/distribution.png)

I [led a paper](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.273H/abstract) where we tried to answer this and more about our galaxy's outer edge. It was recently accepted to A&A, and is [out now on the arXiv!](https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.273H/abstract)


## A tale of missing clusters

The main problem we had to solve is that we don't know how many clusters could be missing from [a cluster catalogue](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H/abstract) like my own. The Milky Way should contain about ∼10⁵ open clusters in total, yet just ≈5600 are known. The chances are that much of this 'empty void' without clusters could just be a **selection effect**, where some clusters are missing from our catalogue because they're too faint or hard to see.

To solve this, we developed a new technique that uses **injection and retrieval** to empirically test the completeness of a cluster catalogue. Using a newly developed cluster simulation suite (which is open source in [ocelot](https://ocelot-docs.org/)!), we injected simulated clusters with known parameters into Gaia data, and then tried to retrieve them with an identical setup to the cluster detection pipeline from [my catalogue](https://ui.adsabs.harvard.edu/abs/2024A%26A...686A..42H/abstract).


## Why can't we see them?

Repeated almost 200,000 times, these injection and retrieval experiments give us a great idea of what causes clusters to be **missing** from a catalogue like my own. There are many different parameters - but it mostly depends on a cluster's mass, distance, extinction, and age.

![The trends in cluster detectability. Parameters like mass and distance have the largest impact.](/assets/posts/250602-anticentre-completeness/detection_trends.png)

Looking at the distribution of dust in the outer part of our galaxy, we can see why! It's much easier to recover clusters in the less-dusty regions. This is also reflected in the distribution of clusters in my catalogue - it's quite clear that dusty areas seem to be difficult to see clusters in.

![The distribution of detectability compared against that of dust. They're almost the same!](/assets/posts/250602-anticentre-completeness/sky_dust.png)


## The hidden clusters at the edge of our galaxy

We used these results to show a few interesting things about this region.

Firstly, we ran some models, and showed that the typical age of clusters in our galaxy's outer reaches is **much** older than near to the Sun - suggesting that clusters are formed and destroyed more slowly there, or that the clusters migrated out there from the centre of our galaxy.

![The ratio between young and old clusters at different galactocentric radii. Those closest to the centre of our galaxy are the youngest.](/assets/posts/250602-anticentre-completeness/age_ratio.png)

Secondly, we were able to provide a satisfying answer for Berkeley 29 and Saurer 1. It is **almost impossible** to detect distant open clusters with Gaia data alone, because dust near to the plane of our galaxy gets in the way. We can probably only see them at all because they exist in a small pocket in the upper-left of the outer galaxy that has a comparatively low amount of dust.

![A comparison of the detectability of young and old clusters. Old ones like Berkeley 29 are clearly much harder to see.](/assets/posts/250602-anticentre-completeness/sky_age_comparison.png)


## The next steps

This work started as a conversation between myself and a few of my other coauthors (including e.g. Tristan Cantat-Gaudin) about whether it could even be _computationally possible_ to derive the completeness of a cluster catalogue in an empirical way like this. And the great news is that it is!

This initial test in the outer part of our galaxy was easier to do because there are fewer stars out there, making algorithms faster to run. Our next paper will be about scaling this up to the full galaxy (you can see an early preview with [these talk slides from EAS](https://great.ast.cam.ac.uk/Greatwiki/GreatMeet-PM18?action=AttachFile&do=view&target=EAS2025-S1-Hunt.pdf)), and we hope to get it published soon so that you could use it in your science! We're planning on making an **open source Python package** that will tell you the probability that a hypothetical cluster would be in my catalogue - stay tuned!



