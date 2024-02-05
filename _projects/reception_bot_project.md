---
layout: page
title: Office Reception Robot
description: Robot that recognized office employees and guests and learned new faces
img: assets/img/projects/reception_bot.jpg
importance: 2
category: work
---

This project was a continuation of my <a href="/projects/imitation_therapy_project">previous work</a> that I had to pause due to the COVID-19 pandemic. I used the <a href="#robo_chotu">Robo-Chotu platform</a> and the <a href="https://pypi.org/project/face-recognition/" target="_blank"> PyPI face-recognition package</a> to create a reception robot that could identify people by their faces. The robot could distinguish between guests and employees and remember the new faces it encountered.

The robot would greet the person at the reception and ask them who they wanted to meet. It would listen to their verbal response and confirm it by displaying the employee’s name on its screen. If the robot failed to recognize the response after three attempts, it would show a list of employees and ask the visitor to choose the one they wanted to see.

I developed three Android apps for this project: one for the reception robot, one for the employees, and one for the management. I used Google’s <a href="https://cloud.google.com/dialogflow" target="_blank"> Dialogflow</a> to create the robot’s chatbot feature. I also used <a href="https://firebase.google.com/docs/cloud-messaging" target="_blank">Firebase Cloud Messaging</a> to send notifications to the employees’ app. The employees could then select one of the available office locations for the visitor. The robot would then guide the visitor to the selected location.

I had the support of some very talented junior research assistants for this project.

<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reception_bot.jpg" title="reception robot employee side notification" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/reception_bot_demo.mp4" class="img-fluid rounded z-depth-1" controls=true%}
    </div>
</div>

<div class="caption">
    <b>Left:</b> This image shows the notification that the employee received on their phone when the reception-bot recognized me (the visitor). The employee could choose their office or a conference room and the robot would guide me there verbally. The system was reliable even with challenging photos like this one. <b>Right:</b> The video (in Urdu) demonstrates the system in action. The robot recognized a guest, had a conversation with them, sent a notification to the employee, and then directed the guest to the desired location.
</div>