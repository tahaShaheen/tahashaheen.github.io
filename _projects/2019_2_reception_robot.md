---
layout: page
title: Office Reception Robot
description: Robot that recognized office employees and guests and learned new faces
img: assets/img/projects/2019_2_reception_robot/cover.png
importance: 2
category: work
permalink: /projects/reception_robot/
---

During the COVID pandemic shutdowns, I used the [Robo-Chotu platform](projects/robochotu_fyp) and the [PyPI face-recognition package](https://pypi.org/project/face-recognition/) to create a reception robot that could identify people by their faces. The robot could distinguish between guests and employees and remember the new faces it encountered.

The robot would greet the person at the reception and ask them who they wanted to meet. It would listen to their verbal response and confirm it by displaying the employee’s name on its screen. If the robot failed to recognize the response after three attempts, it would show a list of employees and ask the visitor to choose the one they wanted to see.

I developed three Android apps for this project: one for the reception robot, one for the employees, and one for the management. I used Google's [Dialogflow](https://cloud.google.com/dialogflow) to create the robot's chatbot feature. I also used [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) to send notifications to the employees' app. The employees could select one of the available office locations for the visitor. The robot would then guide the visitor to the selected location.

I had the support of some very talented junior research assistants for this project.

{% include video.liquid path="assets/video/projects/2019_2_reception_robot/reception_bot_demo.mp4" title="reception_bot" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true caption="The video (in Urdu) demonstrates the system in action. The robot recognizes a guest, has a conversation with them, sends a notification to the employee, and then directs the guest to the desired location."%}

<div class="row justify-content-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/2019_2_reception_robot/reception_bot_employee.jpg" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="col-sm-3 mt-3 mt-md-0">
        <div class="text-center">
            {% include figure.liquid path="assets/img/projects/2019_2_reception_robot/reception_bot_employee2.jpg" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Notifications that the employee would received on their phone when the reception-bot recognized a guest (me). The employee could choose their office or a conference room to have the meeting. The robot would guide the guest there verbally. The system was reliable even with challenging photos like these hilarious ones. 
    </div>
</div>
