# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

The **Restaurant Reviews** project requires an incremental conversion of a static webpage to a mobile-ready web application. In **Stage One**, work has been completed to change the presentation of the site in terms of a responsive layout to optimise presentation in all screen sizes.

Accessibility has been address and checked in both AXE and Chrome Dev Tools audits.

A third requirement was to add a service worker to provide offline access.

### Installation
Clone repository or download files. Go to the project directory. You need a localserver to be able to run the service worker.

Python can setup one very simple, To set it up:

Check your Python version. In a terminal type: python -V.
If you have **Python 2.x**, type ```python -m SimpleHTTPServer 8000``` (or some other port, if port 8000 is already in use. If you need to use another port you must change the const = 8000 at the beginning of dhelper.js file according to the port you use).
For **Python 3.x**, you can use ```python3 -m http.server 8000```.
If you don't have Python installed, navigate to [Python's website](https://www.python.org/downloads/) to download and install the software.

With your server running, visit the site: http://localhost:8000 to launch the project.

### What have I achieved?

1. CSS was used to provide responsive design to the pages while maintaining normal flow.

2. Accessibility features have been added.

3. A service worker is registered and installed with required files cached by the service worker for use offline.
