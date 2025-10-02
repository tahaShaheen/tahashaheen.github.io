---
layout: page
title: Low-Moral Actions in Avatar Robots
description: Masters research project at HRI Lab, Kyoto University
img: /assets/img/projects/work/2023_low_moral_actions/cover.png
importance: 1
category: work
related_publications: true
permalink: /projects/low_moral_actions
button:
  text: "Read Paper"
  url: "https://doi.org/10.1145/3696466"
---

In {% cite shaheen2024lowmoralactions %}, we created a list of what low-moral actions were possible through avatar robots when operated by someone malicious and anonymous. We also suggested prevention mechanisms.

#### Avatar Robots
Imagine a world where people use robots to visit different places and countries. Unlike screens on wheels (telepresence robots), avatar robots can look like anything (think [Surrogates](https://www.imdb.com/title/tt0986263/), the movie). 

<div class="row justify-content-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/robot_robovie.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Robovie</strong><br>Avatar Robot
            </div>
        </div>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/robot_engkey.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Engkey</strong><br>Avatar Robot
            </div>
        </div>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/robot_orihime.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Orihime</strong><br>Avatar Robot
            </div>
        </div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/robot_double.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Double 3</strong><br>Telepresence Robot
            </div>
        </div>
    </div>
</div>

#### Anonymity and Low-Moral Actions
One flaw of this is that it is not readily apparent to bystanders who the operator of the robot is. Malicious operators can use this anonymity to do low-moral actions, which we define as not only illegal acts but also acts that violate norms of society.

#### Risk Analysis Workshops
We conducted three hazard identification workshops with a total of 12 participants (6 male, 6 female) to brainstorm possible low-moral actions. Participants first experienced avatar robots by operating a real robot, a simulated avatar, and sharing space with an avatar robot. Activities included tasks like navigating through simulated environments such as shopping malls and convenience stores, where participants acted as malicious operators. This experience phase was critical for ideation, ensuring that participants understood the technology and its potential for misuse. At the end, participants brainstormed ideas of what low-moral actions are possible when an avatar robot is limited to locomotor movement and video feed from the robot’s eyes to the operator only. 

{% include video.liquid path="assets/video/projects/work/2023_low_moral_actions/lma_robot_pushes_man.mp4" title="low moral action example" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true muted=true caption="Participants in an activity that simulates an art or poster exhibition. The video shows one participant being forced to change their position by the avatar operated by another participant from a separate room."%}


Following are examples of the participants doing low-moral acts in simulations. The top-down view was hidden from the participants. They only saw from the Robot's point-of-view.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/big_store_congestion.png" title="Robot inhibits movement of the crowd in a big clothing store" class="img-fluid rounded z-depth-1" caption="Robot inhibits movement of the crowd in a big clothing store."%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/big_hall_block_path.png" title="Robot inhibits movement of an individual in a large hall in a mall." class="img-fluid rounded z-depth-1" caption="Robot inhibits movement of an individual in a large hall in a mall."%}
    </div>
</div>

#### Results 
Through these workshops, we identified four main categories of low-moral actions:

<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/violate_privacy.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Violate Privacy and Security</strong><br>
                Actions such as eavesdropping or entering forbidden spaces.
            </div>
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/inhibit_access.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Inhibit</strong><br>
                Blocking access to resources or obstructing movement.
            </div>
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/unnatural_movement.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Annoy</strong><br>
                Actions like unnatural movement or invading personal space.
            </div>
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/work/2023_low_moral_actions/destroy_or_hurt.png" class="img-fluid rounded z-depth-1" %}
            <div class="caption mt-2">
                <strong>Destroy or Hurt</strong><br>
                Causing physical harm to individuals or damage to property.
            </div>
        </div>
    </div>
</div>

Each category was further divided into subcategories, resulting in a comprehensive list of potential actions and their manifestations. We also suggested prevention mechanisms that were applicable for each category. 

#### Acknlowledgements
This research was conducted during my master’s studies at the [Human-Robot Interaction Lab](https://www.robot.soc.i.kyoto-u.ac.jp/en/) at Kyoto University. It was made possible via the MEXT Scholarship and was supported by JST Moonshot R&D under Grant Number JPMJMS2011, Japan.

#### 🏆 Award
I was awarded the [Distinguished Master's Thesis Award](https://www.soc.i.kyoto-u.ac.jp/en/news/785/) for this work.