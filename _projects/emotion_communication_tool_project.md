---
layout: page
title: Robot as Emotion Communication Tool
description: Children with ASD identified robot emotions that matched situations
img: assets/img/projects/emotion_communication_2.jpg
importance: 3
category: work
---

Under guidance of therapists from the <a href="https://www.duhs.edu.pk/new/ipmr-introduction/" target="_blank">Dow Institute of Physical Medicine and Rehabilitation</a> and the <a href="https://c-arts.org.pk/" target="_blank">Center for Autism Rehabilitation & Training Sindh</a> and assisted by two teams of 4 undergraduate students each, I explored the use of <a href="#robo_chotu">Robo-Chotu</a> as an emotion-communication tool. 

In a pilot, we put items such as a birthday hat or a band-aid on the robot. Programmed the robot to also show an appropriate expression on its face. Children with ASD then identified the emotion that matched the situation. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/emotion_communication_1.jpg" title="Robo-Chotu wearing birthday hat and turned off" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/emotion_communication_2.jpg" title="Robo-Chotu weraing a birthday hat and happy" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Robo-Chotu turned off. This is the state the robot would be before the child entered the room. Right: Robo-Chotu turned on and happy. 
</div>

Rebuilt <a href="#bucket_chotu">Robo-Chotu (original)</a> for this task. Added natural language processing and communication
using Google <a href="https://cloud.google.com/dialogflow" target="_blank"> Dialogflow</a>. Wrote Android app for Wizard-of-Oz control.

We made the code public but the repositories are not maintained. <a href="https://www.doxygen.nl/index.html">Doxygen</a> documentation is available for the first four repositories.
<ol>
    <li><a href="https://github.com/tahaShaheen/tdf02-145_tablet_sharable"
            target="_blank">Repo for the face Android app (initially exported from
            Unity)</a></li>
    <li><a href="https://github.com/tahaShaheen/tdf02-145_unity_sharable"
            target="_blank">Repo for Unity code for face</a></li>
    <li><a href="https://github.com/tahaShaheen/tdf02-145_remote_sharable"
            target="_blank">Repo for Android remote app for Wizard-of-Oz</a></li>
    <li><a href="https://github.com/tahaShaheen/tdf02-145_arduino_sharable"
            target="_blank">Repo for Arduino code</a></li>
    <li><a href="https://github.com/tahaShaheen/dialogflow-sharable"
            target="_blank">Dialogflow template for chatbot</a>
    </li>
</ol>