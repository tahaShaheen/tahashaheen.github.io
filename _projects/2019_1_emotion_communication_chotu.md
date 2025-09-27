---
layout: page
title: Robot as Emotion Communication Tool
description: Children with ASD identified robot emotions that matched situations
img: assets/img/projects/2019_1_emotion_communication_chotu/cover.jpg
importance: 3
category: work
permalink: /projects/emotion_communication_tool/

---

Under guidance of therapists from the [Dow Institute of Physical Medicine and Rehabilitation](https://www.duhs.edu.pk/new/ipmr-introduction/) and the [Center for Autism Rehabilitation & Training Sindh](https://c-arts.org.pk/){:target="_blank"} and assisted by two teams of 4 undergraduate students each, I explored the use of [Robo-Chotu](projects/robochotu_fyp) as an emotion-communication tool. 

In an on-site pilot, we put items such as a birthday hat or a band-aid on the robot. Programmed the robot to also show an appropriate expression on its face. Children on the Autism Spectrum then identified the emotion that matched the situation. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2019_1_emotion_communication_chotu/emotion_communication_1.jpg" title="Robo-Chotu wearing birthday hat and turned off" class="img-fluid rounded z-depth-1" caption="Robo-Chotu turned off. This is the state the robot would be before the child entered the room."%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2019_1_emotion_communication_chotu/emotion_communication_2.jpg" title="Robo-Chotu weraing a birthday hat and happy" class="img-fluid rounded z-depth-1" caption="Robo-Chotu turned on and happy. Wearing a birthday cap."%}
    </div>
</div>

Rebuilt [Robo-Chotu](projects/robochotu_fyp) for this task. Added natural language processing and communication
using Google [Dialogflow](https://cloud.google.com/dialogflow). Wrote Android app for Wizard-of-Oz control.

We made the code public but the repositories are not maintained. [Doxygen](https://www.doxygen.nl/index.html) documentation is available for the first four repositories.

1. [Repo for the face Android app (initially exported from Unity)](https://github.com/tahaShaheen/tdf02-145_tablet_sharable)
2. [Repo for Unity code for face](https://github.com/tahaShaheen/tdf02-145_unity_sharable){:target="_blank"}
3. [Repo for Android remote app for Wizard-of-Oz](https://github.com/tahaShaheen/tdf02-145_remote_sharable)
4. [Repo for Arduino code](https://github.com/tahaShaheen/tdf02-145_arduino_sharable)
5. [Dialogflow template for chatbot](https://github.com/tahaShaheen/dialogflow-sharable)