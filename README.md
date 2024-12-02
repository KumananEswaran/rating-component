# Interactive Rating Component: <a target="_blank" href="https://rc-frontendmentor.netlify.app/">Visit Here</a>
 
<a href="https://rc-frontendmentor.netlify.app/" target="_blank">
 
![image](https://github.com/user-attachments/assets/416f8bd6-914b-4a50-95ae-9f976832f03f)
 
![image](https://github.com/user-attachments/assets/7d8ec1a7-df35-4392-bcb8-4324a56446cc)

![image](https://github.com/user-attachments/assets/e12d43b2-07d8-4c27-927e-767068f8e4aa)
 
### INTERACTIVE RATING COMPONENT - FRONTEND MENTOR CHALLENGE

## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)

The project is an interactive rating component that allows users to provide feedback by selecting a score and displays a thank-you message upon submission.

## What I'm Most Proud Of:

Responsive Design: The layout adjusts seamlessly across devices, ensuring a smooth experience on both mobile and desktop.

## What I'd Do Differently:

Validation: Add a check to ensure a rating is selected before submitting.

## Challenges Encountered:

Challenge: Identifying the correct elements for Event Listeners

Solution: I used querySelectorAll('.rate-btn') to select all the buttons with the class .rate-btn, which were the clickable rating buttons. I then added an event listener to each of them using forEach, ensuring that each button's click event was handled properly.

Challenge: Ensuring the Rating Value is Displayed Correctly

Solution: Using the rate element (which is a ) in the thank-you section, I updated its inner text with the value of the selected rating by setting rate.innerText = rating.innerText inside the event listener for the rating buttons.



