The script should work again for now. We'll find out for how long when WhatsApp decides to change their API...

### Donations are still welcome :)

A special thanks to one guy who already send me $10! I don't know who the user is :(

If you make some money with it, I'll like to have a little slice of the cake as well:

Bitcoin address: 1DTqXrfnQrUutj7bGtKuhc5hP2DhZLXMC8

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PHVYMCEVZNLPA)
# WhatsAllApp
Chrome Extension that creates a UI overlay for WhatsApp Web to enumerate phone numbers, profile pics, about texts and online statuses.

Checkout the background information at https://www.lorankloeze.nl/2017/05/07/collecting-huge-amounts-of-data-with-whatsapp/
 
This is a Proof of Concept packed in a Chrome Extension. It's not bug free and you may run into errors. If there was a stage before alpha it would be in that stage. Use it wisely!

![Extension in action](https://www.lorankloeze.nl/wp-content/uploads/2017/05/whatsapp_script_2.png "Extension in action")
 
## Warning
This extension has the permission to read from your WhatsApp Web screen. As you can see in the source code, that permission is not used in a bad way. But, take care if you download this extension from anywhere else but this repo!

## Installation
1. Click 'clone or download' and choose to download the ZIP file
2. Extract the folder from the ZIP file
3. Open up chrome://extensions/ 
4. Enable developer mode at the top of the screen by clicking the checkbox
5. Click 'load unpacked extension'
6. Select the folder from step 2
7. The extension should appear at the top of the list

## Usage
1. Go to WhatsApp Web, a green button should appear, click it to open the UI
2. Enter a range of phonenumbers you want to enumerate, more than 500 numbers is probably a little much 
3. After a few seconds you'll see a table of phonenumbers, profile pics, about texts and on/offline statuses
4. Every 10 sec, the script checks if someone is online and places that number at the beginning of the table
5. If someone is currently online, the left border of the profile picture becomes green


## FAQ
* __I can't see online/offline status of users?__

   Yeah, that's a bug that needs some fixing. 
   
* __Can you update the script so it becomes a mass surveillance tool?__

   No, it has its privacy concerns already as it is. Ask your local secret service for more info.
   
* __Can you update the script so it includes feature X?__

   ~~Maybe: tell me (loran@ralon.nl) what feature you'd like to have included and I'll make you a nice offer :)~~
   No, at this moment I don't have the time.

* __How about rate limiting?__

   There is some kind of rate limiting in place but what exactly the limits are and their penalties for exceeding them, I don't know yet. Sometimes I get a '427 Too many requests' but a few minutes later I can continue using the API calls.

* __Why is this extension not available in the Chrome Web Store?__

   Because it's a PoC and because I'll have to pay $5. Since I'm Dutch I don't want to pay unless I have absolutely no other choice. So there you go :)
   
