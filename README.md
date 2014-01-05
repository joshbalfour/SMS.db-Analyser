SMS.db Analyser
===============

By [Josh Balfour][1] ([@joshbal4][2])

Description
-----------

Analyses your iPhone texts and iMessages, shows you some stats, your most popular words, and your most popular 2 word ngrams.

Demo: [http://joshbalfour.co.uk/sms/][8]

Prerequisites:
-----------

 1. an iPhone
 2. [node.js][3]
 3. [sqlite3][4]
 4. your SMS.db file (instructions below)

How to get your SMS.db file
---------------------------

 1. Backup your phone in iTunes
 2. go to ~/Library/Application Support/MobileSync/Backup/ if you're on a mac or C:\Users\username\AppData\Roaming\Apple Computer\MobileSync\Backup on windows
 3. Sort the folders there by date modified and go into the most recently modified one
 4. Copy the 3d0d7e5fb2ce288813306e4d4636395e047a3d28 file into the same directory as app.js and rename it to sms.db

How to Use:
-----------

 1. Download the project
 2. Make sure you fulfil the prerequisites
 3. In a command line cd to the directory where the app.js file is and go:

    node app
    

 4. If all goes well you should get:

     { open: false, filename: 'sms.db', mode: 65542 }

     success
 5. Open the index.html file in Chrome
 6. See your stats!  

Notes
-----------
 1. If you want to change it or whatever feel free,  if you do I'd be interested to hear about what you make with it!
 2. This does not call home to anything, you can run this offline and it'll work perfectly fine  

Uses
-----------

 1. [Bootstrap][5]
 2. [FontAwesome][6]
 3. [Social Buttons for Twitter Bootstrap 3][7]  

License
-----------

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

This permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [1]: http://joshbalfour.co.uk
  [2]: http://twitter.com/joshbal4
  [3]: https://npmjs.org/package/sqlite3
  [4]: https://npmjs.org/package/sqlite3
  [5]: http://getbootstrap.com/
  [6]: http://fontawesome.io/
  [7]: http://noizwaves.github.io/bootstrap-social-buttons/3/
  [8]: http://joshbalfour.co.uk/sms/
