At this moment you may experience that the green button does not appear or that you see console errors like 'cannot read property '1' of null'. WhatsApp changed their API. I have fixed both bugs but have not yet pushed it to this repo. Why? Read this: https://github.com/LoranKloeze/WhatsAllApp/issues/27#issuecomment-412271640

## 🎉🎈🎉 WhatsAllApp Pro is coming! 🎉🎈🎉 
![Preview dropbar](https://i.imgur.com/0YYh20T.png)

22-08-2018: at this moment, I started the development of WhatsAllApp Pro. There is a huge demand for offical support for WhatsAllApp. The Pro version will feature a new UI, some more functionality, faster releases of bug fixes and basic email support. The timeline is a beta release somewhere in November.
If you want to back the Pro project at this moment, you get a 75% discount on the $35 monthly fee for one year. That makes you an early bird. What do early birds get?
- All the features mentioned
- Access to early releases
- 75% discount for the first year

The discount year starts at the first beta release.

If you want to be an early bird, donate $105 to my PayPal and I'll inform you by email about the project.

Important: WhatsAllApp completely depends on WhatsApp and their undocumentened API. If they decide to completely overhaul their back or front end that may mean the end of WhatsAllApp. Keep that in mind please!

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PHVYMCEVZNLPA)



# WhatsAllApp
Chrome Extension that creates a UI overlay for WhatsApp Web to enumerate phone numbers, profile pics and about texts

Checkout the background information at https://www.lorankloeze.nl/2017/05/07/collecting-huge-amounts-of-data-with-whatsapp/
 
This is a Proof of Concept packed in a Chrome Extension. It's not bug free and you may run into errors. If there was a stage before alpha it would be in that stage. Use it wisely!

![Extension in action](https://www.lorankloeze.nl/wp-content/uploads/2017/05/whatsapp_script_2.png "Extension in action")

## New functionality
### Download to zip-file
You can now download the numbers + their corresponding profile pictures and statuses to a zip-file. The file contains the profile pictures in jpeg format and a csv-file with numbers and statuses. Give it a try, it seems to be still a little buggy.

### Show only active accounts
I've implemented a checkbox to disable displaying inactive or non-existing accounts.

### Enter custom numbers
You can now enter a comma separated list of numbers to iterate over instead of a hard range.

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
3. After a few seconds you'll see a table of phonenumbers, profile pics, about texts

## FAQ
* __Can you update the script so it becomes a mass surveillance tool?__

   No, it has its privacy concerns already as it is. Ask your local secret service for more info.
   
* __Can you update the script so it includes feature X?__

   ~~Maybe: tell me (loran@ralon.nl) what feature you'd like to have included and I'll make you a nice offer :)~~
   No, at this moment I don't have the time.

* __How about rate limiting?__

   There is some kind of rate limiting in place but what exactly the limits are and their penalties for exceeding them, I don't know yet. Sometimes I get a '427 Too many requests' but a few minutes later I can continue using the API calls.

* __Why is this extension not available in the Chrome Web Store?__

   Because it's a PoC and because I'll have to pay $5. Since I'm Dutch I don't want to pay unless I have absolutely no other choice. So there you go :)
   
