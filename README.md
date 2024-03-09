# Web Development Project 2 - *GolfPro Leaning*

Submitted by: **Devin Khun**

This web app: **A web app that displays a collection of flashcards related to the rules of Golf.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] Very clean and organized

The following **additional** features are implemented:

* [x] Shuffle button to randomize the order of the cards
* [x] Previous and next buttons to move through the different cards
* [ ] Text input box for the user to enter an answer

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/qNhvXyC.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I encountered was the flipping part of the card and figuring out how to display the question and answer component separately. I then found that creating a boolean state to keep track of whether to display the answer was the best approach. Based on the boolean state, it would either hide the question component or answer component of the card.

## License

    Copyright [2024] [Devin Khun]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

