'use strict';

/**
 * index.js
 *
 * Copyright 2017 Mohammed Nafees
 */

const waw_data = require('./waw_data');
const puppeteer = require('puppeteer');

(async () => {
    if (process.argv.length < 3) {
        console.error("Please provide the name of a WhatsApp contact");
        process.exit(-1);
    }

    const isLoggedIn = async () => {
        return window.localStorage.getItem("WABrowserId") !== null &&
            window.localStorage.getItem("WASecretBundle") !== null &&
            window.localStorage.getItem("WAToken1") !== null &&
            window.localStorage.getItem("WAToken2") !== null;
    };

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.waitForSelector(".chat-title")
        .then(() => {
            page.evaluate((name) => {
                const elems = document.querySelectorAll(".chat-title");
                for (let i = 0; i < elems.length; ++i) {
                    if (elems[i].innerText === name) {
                        return i;
                    }
                }
                return null;
            }, process.argv[2]).then((id) => {
                if (id !== null) {
                    page.$$(".chat-title").then((elems) => {
                        elems[id].click();
                    }).then(() => {
                        page.waitForSelector(".icon-clip").then(() => {
                            page.evaluate((name) => {
                                const target = document.querySelectorAll(".pane-header")[1].childNodes[1];
                                const observer = new MutationObserver((mutations) => {
                                    mutations.forEach((mutation) => {
                                        if ([].slice.call(mutation.addedNodes).toString() === "[object Comment]") {
                                            console.log(name + " is offline at " + new Date());
                                        } else {
                                            console.log(name + " is online at " + new Date());
                                        }
                                    });
                                });
                                const config = { childList: true };
                                observer.observe(target, config);
                            }, process.argv[2]);
                        });
                    });
                } else {
                    console.error("Could not find " + process.argv[2]);
                    browser.close();
                }
            });
        });
    page.on("console", console.log); // temp for debug
    page.on('load', () => {
        page.evaluate(isLoggedIn).then((loggedIn) => {
            if (loggedIn) {
                console.log("Logged in");
            } else {
                console.log("Not logged in");
                page.evaluate((waw_data) => {
                    localStorage.setItem("WABrowserId", waw_data.WABrowserId);
                    localStorage.setItem("WASecretBundle", waw_data.WASecretBundle);
                    localStorage.setItem("WAToken1", waw_data.WAToken1);
                    localStorage.setItem("WAToken2", waw_data.WAToken2);
                    location.reload();
                }, waw_data);
            }
        });
    });
    await page.goto('https://web.whatsapp.com', {waitUntil: 'networkidle'});
})();
