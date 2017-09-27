# UhOh
An attempt or proof-of-concept to show that "privacy" is a hoax in this era.

## Background
WhatsApp is a highly popular messaging app with over a billion users now and well, it was bought by Facebook for a whopping 19 billion US Dollars. I use WhatsApp to communicate with my family and friends almost all the time. WhatsApp has privacy options and they work pretty well for most users. One such option is to hide your "Last Seen" status from people.
<p><img src="https://raw.githubusercontent.com/mnafees/UhOh/master/images/privacy.PNG"></p>
But WhatsApp also has a web version. And thanks to that, this privacy option can completely be broken. All you need is some browser automation and coding skills, and voila! you are now tracking someone's "Last Seen".

## How?
The implementation uses Headless Chrome for browser automation and keeps a track of when a WhatsApp contact comes online and goes offline with some JavaScript and DOM magic. All this is done automatically, and the results are printed on the terminal.

## Setup
Let's first get the necessary data you need in order to make the tool work for you. Go to WhatsApp Web and sign in. Open your Chrome Developer Tools' Application tab and navigate to the Local Storage tab inside it. It should look something like:
<p><img src="https://raw.githubusercontent.com/mnafees/UhOh/master/images/chrome_dev_tools.png"></p>
<p>Now create <code>waw_data.js</code> in the same directory as your <code>index.js</code>. The contents of the file should look something like the template file <code>waw_data.template.js</code> provided. You can just rename it and input all the required values there.
Now that you've done that, open your terminal and type the following:

```
$ npm install
$ node index.js "Any WhatsApp contact of yours"
```

<strong>Send me a mail at hello &lt;at&gt; mnafees &lt;dot&gt; me if you are interested in such projects 😃
