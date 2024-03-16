# Web Development Project 3 - *GolfPro Learning*

Submitted by: **Devin Khun**

This web app: **A web app that displays a collection of flashcards related to the rules of Golf.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [x] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] Shuffle only cards that have not been viewed
* [ ] Progress bar that tracks the user's learning progress
* [ ] Different levels of mastery status for each flashcard
* [ ] Bookmark or star certain flashcards for more review
* [ ] Tagging flashcards into different categories

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/Cn1K95T.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I encountered was finding a way to check and verify the user's inputted answer against the actual answer of the flashcard. I figured that the best way to approach this was to use a fuzzy search where it would show the user a percentage based on the correctness of the answer rather than showing right or wrong. The function would go through each character of the answer and keep track of how many characters were correct. The shuffle button was also an interesting approach since I took the array of flashcards and essentially randomized the order of the cards.

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

