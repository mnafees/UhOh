# UhOh
An attempt or proof-of-concept to show that "privacy" is a hoax in this era.

## Background
WhatsApp is a highly popular messaging app with over a billion users now and well, it was bought by Facebook for a whopping 19 billion US Dollars. I use WhatsApp to communicate with my family and friends almost all the time. WhatsApp has privacy options and they work pretty well for most users. One such option is to hide your "Last Seen" status from people.
<p><img src="https://lh3.googleusercontent.com/powPrukwLhWwgPgNBgqnnptb5jKj_xV0jcsBkSkC96axvDGhukzR11Q7X702juEGRjgvUsxAiE_GPQLQfJWlesydZafFxr03oOMRAyGXBM_mct0UpG12qKQT1UD3VoAG88XHaU2Edi7r7eA--96kSbmApPQbrfxjhq3zK2dSP9QoesAM_ppz5SQBCv6Z6JzOhwRaTk9cp9B0ypK_7YjpDRv4hBFn1rdAKIs4pe_DcXRc3EoKBNhMhKOmuO41SRwUXp0KSKATCN27BJzSmNoEeaWb3A_853qihgrAXxrF9W2iH37NYYYPcBfoTstyr6orHWvdkob0K3d_dZk_hHDgkJCzmIbim96LPIRpVaZALMOs3SWFmWrwQZHpGLLDvNsDyEpgCWjvtj0q_-t0Tiw48PYsgG6eS26uhubvZqBFKYZAOiCTq82ixfLVHE0wCaV1GrIiPETFxCgiMAPfkYBuTNxzGM7z1m8zi9yWDsxnNgZ_c0eEWuAbPzE1XnlApB1fgZ33R9S_0P9eEt8mFuQOTm4QA7Bi1ZpdkvPeylkLnkygeoPxV-PQobidEV63DDqDO8DN_GdkD7DnswrV4Xc3T7b_zVYDHnU5MaecUFWZJj8=w750-h240-no"></p>
But WhatsApp also has a web version. And thanks to that, this privacy option can completely be broken. All you need is some browser automation and coding skills, and voila! you are now tracking someone's "Last Seen".

## How?
The implementation uses Headless Chrome for browser automation and keeps a track of when a WhatsApp contact comes online and goes offline with some JavaScript and DOM magic. All this is done automatically, and the results are printed on the terminal.

## Setup
Let's first get the necessary data you need in order to make the tool work for you. Go to WhatsApp Web and sign in. Open your Chrome Developer Tools' Application tab and navigate to the Local Storage tab inside it. It should look something like:
<p><img src="https://lh3.googleusercontent.com/mcaBqa36Y1CI1UjKJ_vf6MWqmOCSa_Gp6zB5JZrKlkZyLaGrOZmizZQsqGMaDrqWcwsiXwMUebDwcbFS5cg0dLjhbX5wXPGA96Te2RrKlxmTVthx7G3e9xIF5x4ahx62IEHWpgA5OC6CXjzGc-txIr78LdV5ejIB_9xykbluxz5a4SgXKVUvbQ4ND-wsu7u76tnD5B-oO8RH1QWX8TG2zj7YRtOMUlx2hggtrSHl9y2pf6gZF5CYQqjGWipziKrHUzALeTR_KFyvkB5ggcLTBymTcqeqI9cft7gduONmgxES9TDH3d21M5FImHHWeeV_CUHyWx_7hnjhIBl8l78Dq8NrTSQM3kVyrNCv2T3gMtIXPZpu6JQDDD0RI8Tt8Pina7WSA2Zc2nfUJi7yMWiSEEq4KXn3cUMXkIHCea4r4jUnfV3TkudV89jkJVoCEwp29WHQb9LLUcrhrznWrk5a_EtYY8qMOg1VYtSX7Oi5oIQhVy8nFSXEAkJ1NmVr9rxoXCSWDFBrE4wMGVyT4_BoLvg64PrOlIHbKBmuTWh23ULFYMmiDNxFT2O4DYq9suBpAOWqGZcH1QMLvQn8zJrNvOr-YV29WnNw3mTxtuOuflY=w740-h266-no"></p>
<p>Now create <code>waw_data.js</code> in the same directory as your <code>index.js</code>. The contents of the file should look something like the template file <code>waw_data.template.js</code> provided. You can just rename it and input all the required values there.
Now that you've done that, open your terminal and type the following:

```
$ npm install
$ node index.js "Any WhatsApp contact of yours"
```

<strong>Send me a mail at hello &lt;at&gt; mnafees &lt;dot&gt; me if you are interested in such projects 😃
