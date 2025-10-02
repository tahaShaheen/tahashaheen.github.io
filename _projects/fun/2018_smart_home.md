---
layout: page
title: Smart Home Control
description: Connected AC and fan to internet
img: assets/img/projects/fun/2018_smart_home/cover.jpg
importance: 4
category: fun
permalink: projects/fun/smart_home
---

I wrote an Android app in Java, programmed and installed an [ESP8266 nodemcu](https://www.nodemcu.com/index_en.html) in an air conditioner, and set up a backend on [Google Firebase](https://firebase.google.com/). I configured the AC to turn on at a certain time of the day. I also wrote an app to remotely operate the AC through WiFi. To send signals to the AC, I copied the AC remote's IR signals using a TSOP1738, then ripped out the IR LED from the remote and attached it to the ESP. The ESP and LED combination was hung from the ceiling in front of the AC.

{% include video.liquid path="assets/video/projects/fun/2018_smart_home/smart_home.mp4" title="poster exhibition low moral action" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="Video shows my roommate and I entering the room after work on the day I set up the AC to turn on automatically for the first time."%}

<div class="row">
    <div class="col-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fun/2018_smart_home/node_mcu_and_ir_led.jpg" title="ESP and IR LED" class="img-fluid rounded z-depth-1" caption="ESP hanging from the ceiling with an IR LED attached."%}
    </div>
    <div class="col-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fun/2018_smart_home/1_not_connected.png" title="app image" class="img-fluid rounded z-depth-1" caption="The app's starting screen."%}
    </div>
    <div class="col-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fun/2018_smart_home/3_garden_garden.jpg" title="app image" class="img-fluid rounded z-depth-1" caption="Toast message after signal sent to AC successfully."%}
    </div>
</div>

Later that year, I added a makeshift PCB into the wiring of my house with relays to control fans and lights in my room.

<div class="row">
    <div class="col-9 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fun/2018_smart_home/fan_bt_pcb_1.jpeg" title="Relays PCB" class="img-fluid rounded z-depth-1" caption="The circuit board."%}
    </div>
    <div class="col-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fun/2018_smart_home/fan_bt_pcb_2.jpeg" title="Relays PCB Wall" class="img-fluid rounded z-depth-1" caption="The circuit board attached to the wiring in my house (all stunts done by professionals)."%}
    </div>
</div>