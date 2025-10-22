---
title: 'The completeness of the Gaia DR3 open cluster census'
date: 2025-10-28T00:00:00+01:00
authors: ['Emily Hunt']
tags: ['open cluster', 'gaia', 'gaia DR3', 'star cluster', 'selection function', 'completeness']
categories: ['Star Clusters', 'Paper Summaries']
description: 'We applied our new cluster catalogue completeness method to the entire Milky Way, publishing a selection function and accompanying open source code & models with our results.'
thumbnail: '/assets/posts/250602-anticentre-completeness/thumbnail.webp'
image: '/assets/posts/250602-anticentre-completeness/header.webp'
# paper: 'https://ui.adsabs.harvard.edu/abs/2025arXiv250618708H/abstract'
---

We see our galaxy -- the Milky Way -- from within, making understanding our galaxy's structure uniquely challenging compared to other galaxies. But that doesn't mean that we should give up! Because everything in the Milky Way is so close to us, we can do **much** more in-depth studies with the content of our galaxy compared to others.

The best way to get around this difficulty is with **tracers**: some type of object that has easier to determine parameters than your average object. Open clusters of stars, as groups of a few dozen to a few thousand stars, are one such tracer. They're especially useful because their ages and distances can be determined much more accurately than individual stars.

But one catch is that we've never really known how many open clusters are _missing_ from our catalogues. Across the history of astronomy, large strides have been made in cataloguing clusters -- especially in the era of Gaia (see below). But to use open clusters to trace larger elements of Galactic structure -- like the density of clusters in a given area, or their age and mass distributions -- we need a better understanding of **what's missing** from these catalogues going forwards.

!image of historical census

In a pilot study, we developed and applied a method to do this on the Galactic anticentre. To do so, we simulated realistic clusters, and then tried to recover them using the pipeline that created my cluster catalogue. That lets us know which clusters can (or cannot) be recovered, depending on their parameters -- like mass, distance, or age. That work was already published this year -- so the only challenge left was to apply it to the full Gaia DR3 dataset!

After running about 80,000 injection and retrievals of simulated clusters, we fit a model to our simulations. I spent a lot of time finding the optimal model setup, and managed to get it down to just three things: the number of stars in the cluster, the cluster's relative density compared to Gaia data, and the significance threshold used to cut my catalogue. This model tells you the probability that a given cluster would have been detected by my original clustering pipeline!

!model pic

Best of all, our model is open-source, and is available right now as a pip installable Python package. We also published all of the data we used to fit the model, which could be used for other purposes -- like estimating the completeness and purity of open cluster memberships in my catalogue. As a quick demonstration of why selection functions matter, we show one example in the paper: the detectability of an old, medium-sized cluster:

!det probability model

Our results can be used to make maps of the detection probability of any open cluster you can think of. But where it can get particularly interesting is when making **comparisons**: for instance, are clusters on fast orbits easier to detect than clusters on circular ones? The theory here is that clusters moving quickly will have fewer stars around them in the proper motion space used to detect them in Gaia data. This is exactly what we see, and it gets particularly complicated: depending on which direction it's going 'faster' in, you'll see different regions have different areas of 'boosted' detection probability.

!det prob top down map

What's happening here is that in cases where the boost to orbital speed is fully projected into a proper motion axis observed by Gaia, this boost will be highest. Radial velocities aren't used to detect open clusters by my catalogue, so only a high tangential motion (i.e. proper motion) boosts detectability. 

We can already say here that previous results that have analysed things like the velocity distribution of the Milky Way but without selection functions will have been biased: their sample will have contained more fast-moving clusters than slow-moving ones, leading to something a bit like this, where the cluster velocity distribution gets overestimated:

!velocity example

All of this (and more!) is now available to read about on the arXiv in our new paper submitted to A&A. You can also check out the accompanying [Python package](https://github.com/emilyhunt/hr_selection_function). 


