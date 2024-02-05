---
layout: page
title: Office Reception Robot
description: Robot that recognized office employees and guests and learned new faces
img: assets/img/projects/reception_bot.jpg
importance: 2
category: work
---

I began to work on this project once the COVID-19 pandemic made it impossible to continue on with the <a href="#asd_bot">previous project</a>. I integrated the <a href="#robo_chotu">Robo-Chotu platform </a> 
with the <a href="https://pypi.org/project/face-recognition/" target="_blank"> PyPI face-recognition package </a> running on a server at the backend. The robot recognized people it had met before, and remembered if they were guests or employees. It
memorized the new faces it saw. I wrote three Android apps, one for the reception robot, one for employees, and one for management.

Once the reception bot established the identity of the person at the reception, it asked
them who they wanted to met and their verbal answer was confirmed. This chatbot feature
utilized Google's <a href="https://cloud.google.com/dialogflow" target="_blank"> Dialogflow</a>. A notification was sent to utilizing <a href="https://firebase.google.com/docs/cloud-messaging" target="_blank">Firebase Cloud Messaging</a>
to the employee in question. They could then ask the robot to tell the guest where to go.

I was assisted by very talented junior research assistants. 

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/reception_bot.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The image shows the notification on an employee's phone after the reception-bot has recognized me. The employee can ask the robot to send me to either their office or a conference room. System worked even with terrible photos such as this one. 
</div>