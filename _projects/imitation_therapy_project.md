---
layout: page
title: Robot for Imitation Therapy
description: Children with ASD copied robot arm movements and vice versa
img: assets/img/projects/robosapien_imitation.jpg
importance: 4
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/robosapien.jpg" title="OpenPose detection of human skeleton and augmented Robosapien wearing a bag containing ESP8266" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/robosapien_imitation.jpg" title="Robosapien imitates an arm raised up" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: OpenPose detection of human skeletons and augmented Robosapien wearing a bag containing ESP8266. Right: Robosapien imitates an arm raised up
</div>

Worked with a team of 4 undergraduate students and therapists from Dow IPMR to augment a <a href="https://wowwee.com/robosapien-x" target="_blank"> Robosapien by WowWee robotics</a>. Used <a href="https://github.com/CMU-Perceptual-Computing-Lab/openpose" target="_blank"> OpenPose </a> and an <a href="https://en.wikipedia.org/wiki/NodeMCU">ESP8266 nodemcu</a>. The robot (1) copied a aingle person’s arm positions and (2) detected when a person had successfully copied the robot’s arm position.