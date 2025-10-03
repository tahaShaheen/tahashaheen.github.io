---
layout: page
title: Oral History Apprentice
description: I found and recorded 83 oral histories and life stories
img: assets/img/extra_curriculars/1947_partition_archive/2016_oha/cover.jpg
importance: 1
category: 1947 Partition Archive
permalink: /extra_curriculars/1947_partition_archive/oral_history_apprentice
---

In 2016, I received training from the [1947 Partition Archive](https://www.1947partitionarchive.org/) in story-collection and interviewing techniques to become an Oral History Apprentice. I recorded 83 life stories in Karachi and rural Punjab. Many of the interviews have been published on the Archive's website. Click on one of the names below and it will take you to the Archive's website where you can read the person's story. 

You can learn more about [my connection with the 1947 Partition of British India](/extra_curriculars/1947_partition_archive/1947_info/).

**Note: As of October 2025, all the links are broken. The Archive website is going through some form of migration to a new database. Hopefully, the links will begin to work soon.**

*You can try to manually find a story by going to the Archive's [Collections page](https://www.1947partitionarchive.org/collections/), scrolling down to the interactive Story Map, and enter the name of the person whose story you want to read.*

<div class="projects">
  <div class="grid">
    <div class="grid-sizer"></div>
    {% for item in site.data.oral_histories %}
      <div class="grid-item">
        <a href="https://www.1947partitionarchive.org/collections/story/{{ item.id }}" target="_blank">
          <div class="card hoverable">
            <div class="card-body">
              <h6 class="card-title">{{ item.name }}</h6>
              <p class="card-text"></p>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>